from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from flask_login import UserMixin


metadata = MetaData()
db = SQLAlchemy(metadata=metadata)


class User(db.Model,SerializerMixin, UserMixin):
    __tablename__= 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password=db.Column(db.String(50))
    
    reviews = db.relationship('Review', backref='user', lazy=True)
    
    serialize_rules=('-reviews.user',)
    
    def to_dict(self):
        return{
            "id":self.id,
            "username":self.username,
            "password":self.password
            }
        
    
    def __repr__(self):
        return f'<User {self.id}, Username: {self.username} >'
    

class Product(db.Model, SerializerMixin,UserMixin):
    __tablename__='products'
    
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    name = db.Column(db.String(100), nullable=False)
    processor=db.Column(db.String(100),nullable=False)
    price = db.Column(db.Float, nullable=False)

    reviews = db.relationship('Review', backref='product', lazy=True)
    
    serialize_rules =('-reviews.product',)
    
    def __repr__(self):
        return f'<product {self.id}, name; {self.name}, >'

class Review(db.Model, SerializerMixin, UserMixin):
    __tablename__='reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    
    serialize_rules = ('-product.reviews', '-user.reviews',)
    
    @validates('rating')
    def validate_rating(self, key, value):
        ratings = range(0, 6)
        if value not in ratings:
            raise ValueError('Must be from 1 to 5')
        return value
    
    def __repr__(self):
        return f'<review {self.id}, of {self.product_id}, by {self.user_id}>'
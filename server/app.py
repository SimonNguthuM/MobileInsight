from models import User, Product, Review, db
from flask import request, jsonify, Flask, make_response, session
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = os.urandom(24)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mobileInsight.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

api = Api(app)

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users

    def post(self):
        username = request.json.get("username")
        password = request.json.get("password")
        hashed_pass = bcrypt.generate_password_hash(password).decode("utf-8")

        user = User(username=username, password=hashed_pass)
        db.session.add(user)
        db.session.commit()

        return {"message": "User successfully created!"}, 201

class Login(Resource):
    def post(self):
        username = request.json.get("username")
        password = request.json.get("password")

        user = User.query.filter_by(username=username).first()

        if user and bcrypt.check_password_hash(user.password, password):
            session['user_id'] = user.id
            session['username'] = user.username
            return jsonify({"token": "fake-jwt-token", "username": user.username})
        return {"error": "Invalid credentials"}, 401

class Logout(Resource):
    def post(self):
        session.pop('user_id', None)
        session.pop('username', None)
        return {"message": "Logged out successfully"}, 200

class Products(Resource):
    def get(self):
        products = [product.to_dict() for product in Product.query.all()]
        return make_response(products, 200)

    def post(self):
        new_product = Product(
            name=request.json.get('name'), 
            processor=request.json.get('processor'),
            image=request.json.get('image'),
            price=request.json.get('price')
        )
        db.session.add(new_product)
        db.session.commit()
        return make_response(["Product created successfully"], 201)

class ProductById(Resource):
    def get(self, id):
        product = Product.query.filter(Product.id == id).first()
        if product:
            return make_response(product.to_dict(), 200)
        return make_response({"error": "product not found"}, 404)

class ReviewsById(Resource):
    def get(self, id):
        review = Review.query.filter(Review.id == id).first()
        if review:
            return make_response(review.to_dict(rules=('-product',)), 200)
        return make_response({"error": "Review not found"}, 404)

    def patch(self, id):
        review = Review.query.filter(Review.id == id).first()
        if not review:
            return make_response({"error": "Review not found"}, 404)
        try:
            for attr in request.json:
                setattr(review, attr, request.json.get(attr))
            db.session.commit()
            return make_response(review.to_dict(), 200)
        except ValueError:
            return make_response({"error": "validation errors"}, 400)

    def delete(self, id):
        review = Review.query.filter(Review.id == id).first()
        db.session.delete(review)
        db.session.commit()
        return make_response({'message': 'review successfully deleted'}, 200)

class Reviews(Resource):
    def post(self):
        new_review = Review(
            user_id=request.json.get('user_id'),
            product_id=request.json.get('product_id'),
            rating=request.json.get('rating'),
            comment=request.json.get('comment')
        )
        db.session.add(new_review)
        db.session.commit()
        return make_response(new_review.to_dict(), 201)

api.add_resource(Users, '/users')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Products, '/products')
api.add_resource(ProductById, '/products/<int:id>')
api.add_resource(ReviewsById, '/reviews/<int:id>')
api.add_resource(Reviews, '/reviews')

if __name__ == '__main__':
    app.run(debug=True, port=5555)

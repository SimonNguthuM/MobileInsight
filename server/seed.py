from app import app, db
from models import User, Product, Review

with app.app_context():
    db.create_all()  

    user1 = User(username='john_doe')
    user2 = User(username='jane_doe')
    db.session.add(user1)
    db.session.add(user2)

    product1 = Product(name='iPhone 13', price=999.99)
    product2 = Product(name='Samsung Galaxy S21', price=799.99)
    db.session.add(product1)
    db.session.add(product2)

    review1 = Review(user_id=1, product_id=1, rating=5, comment='Amazing phone!')
    review2 = Review(user_id=2, product_id=2, rating=4, comment='Great features but expensive.')
    db.session.add(review1)
    db.session.add(review2)

    db.session.commit()

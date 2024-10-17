from config import app, db, api
from models import User, Product, Review
from flask import request, jsonify
from flask_restful import Resource

class UserResource(Resource):
    def get(self):
        users = User.query.all()
        return jsonify([{"id": user.id, "username": user.username} for user in users])

    def post(self):
        data = request.get_json()
        new_user = User(username=data['username'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"id": new_user.id, "username": new_user.username}), 201

class ProductResource(Resource):
    def get(self):
        products = Product.query.all()
        return jsonify([{"id": product.id, "name": product.name, "price": product.price} for product in products])

    def post(self):
        data = request.get_json()
        new_product = Product(name=data['name'], price=data['price'])
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"id": new_product.id, "name": new_product.name, "price": new_product.price}), 201

class ReviewResource(Resource):
    def get(self):
        reviews = Review.query.all()
        return jsonify([{"id": review.id, "user_id": review.user_id, "product_id": review.product_id, "rating": review.rating, "comment": review.comment} for review in reviews])

    def post(self):
        data = request.get_json()
        new_review = Review(user_id=data['user_id'], product_id=data['product_id'], rating=data['rating'], comment=data['comment'])
        db.session.add(new_review)
        db.session.commit()
        return jsonify({"id": new_review.id, "user_id": new_review.user_id, "product_id": new_review.product_id, "rating": new_review.rating, "comment": new_review.comment}), 201

api.add_resource(UserResource, '/api/users')
api.add_resource(ProductResource, '/api/products')
api.add_resource(ReviewResource, '/api/reviews')

if __name__ == '__main__':
    app.run(debug=True, port=5555)

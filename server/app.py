from models import User, Product, Review, db
from flask import request, jsonify, Flask,make_response,session
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import os


app = Flask(__name__)
bcrypt=Bcrypt(app)
app.secret_key = os.urandom(24)

# Configure the database URI and settings
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mobileInsight.db'
app.config['SQLALCHEMY_TRACK_MODIFICACTION'] = False 
app.json.compact = False 

# Set up database migrations and initialize the database
migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

# Initialize Flask-RESTful API
api = Api(app)


class Users(Resource):
    def get(self):

        if 'user_id' not in session:
            return {"message":"Please log in to access this resource!"},403
        
        users = [user.to_dict() for user in User.query.all()]

        return {
            "message": "request successful!",
            "Data": users
        }

    def post(self):
        username = request.json.get("username")
        password = request.json.get("password")

        hashed_pass = bcrypt.generate_password_hash(password).decode("utf-8")


        user = User(username = username, password = hashed_pass )


        db.session.add(user)
        db.session.commit()

        return {
            "message": "User successfully created!"
        }
        
        
@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username")
    password = request.json.get("password")

    user  = User.query.filter_by(username = username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        session["user_id"] = user.id
        return {
            "message": "Login successful!"
        },200
    return {
        "message": "Invalid Credentials"
    },401

@app.route('/logout', methods=['POST'] )
def logout():
    session.pop('user_id',None)
    return jsonify({
        "message":"Logged out successfully!"
    })        
        
        

class Products(Resource):
    def get(self):

        products = [product.to_dict() for product in Product.query.all()]
        response = make_response(products, 200)
        return response

    def post(self):
        data = request.get_json()
        new_product = Product(name=data['name'], price=data['price'])
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"id": new_product.id, "name": new_product.name, "price": new_product.price}), 201
    
class ProductBYId(Resource):
    def get(self, id):
        
        # if 'user_id' not in session:
        #     return {"message":"Please log in to access this resource!"},403
        product=Product.query.filter(Product.id==id).first()
        
        if product:
            product_dict=product.to_dict()
            body=product_dict
            status=200
        else:
            body = {"error": "product not found"}
            status = 404
            
        return make_response(body, status)

class ReviewsById(Resource):
    def get(self,id):
        review=Review.query.filter(Review.id==id).first()
        
        if review:
            review_dict=review.to_dict(rules=('-product',))
            body=review_dict
            status=200
        else:
            body = {"error": "Review not found"}
            status = 404
            
        return make_response(body, status)
    
    def patch(self,id):
        review=Review.query.filter(Review.id==id).first()
        
        if not review:
            error_message = '"error":"Review not found"'
            return error_message
        
        try:
            for attr in request.form:
               setattr(review ,attr, request.form.get(attr))
               
            db.session.add(review)
            db.session.commit()
            
            review_dict=review.to_dict()
            
            response=make_response(review_dict,200)
            return response
        except ValueError:  
            body = {"error": ["validation errors"]}
            status = 400
            return make_response(body, status)
         
               
    def delete(self, id):
        review=Review.querry.filter(Review.id==id).first()
        
        db.session.delete(review)
        db.session.commit()

class Reviews(Resource):
        def post(self):
            data = request.get_json()
            new_review = Review(user_id=data['user_id'], product_id=data['product_id'], rating=data['rating'], comment=data['comment'])
            db.session.add(new_review)
            db.session.commit()
            return jsonify({"id": new_review.id, "user_id": new_review.user_id, "product_id": new_review.product_id, "rating": new_review.rating, "comment": new_review.comment}), 201
    

api.add_resource(ReviewsById, '/reviews/<int:id>')
api.add_resource(Users, '/users')
api.add_resource(Products, '/products')
api.add_resource(ProductBYId, '/products/<int:id>')
api.add_resource(Reviews, '/reviews')

if __name__ == '__main__':
    app.run(debug=True, port=5555)
 
 
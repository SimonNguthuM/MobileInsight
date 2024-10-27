from app import app, db,bcrypt
from models import User, Product, Review
from faker import Faker
import random
from flask import request

with app.app_context():
    faker=Faker()
    
    User.query.delete()
    Product.query.delete()
    Review.query.delete()
        
    users=[]
    reviews=[]
    
    for n in range(20):
        username = faker.name()
        password = faker.name()
        hashed_pass = bcrypt.generate_password_hash(password).decode("utf-8")
        user = User(username = username, password = hashed_pass )
        users.append(user)
        
        review=Review(rating=random.randint(1, 5), comment=faker.sentence(nb_words=15), user_id=random.randint(1,20), product_id=random.randint(1,10))
        reviews.append(review)
        
    db.session.add_all(users)
    db.session.add_all(reviews)

    products = [
        {
            "name": "Tecno Spark 20",
            "processor": "Mediatek G85",
            "price": "20000",
            "image": "https://www.phoneplacekenya.com/wp-content/uploads/2023/12/Tecno-Spark-20-1.jpg"
        },
        {
            "name": "Redmi 12 C",
            "processor": "Mediatek G85",
            "price": "25000",
            "image": "https://www.xiaomihomekenya.co.ke/cdn/shop/products/redmi-12c-6-128gb-xiaomi-home-kenya-official-authorized-store-4.jpg?v=1712143043&width=600"
        },
        {
            "name": "Samsung Galaxy A24",
            "processor": "Helio G99",
            "price": "25000",
            "image": "https://phones.co.ke/wp-content/uploads/2024/07/Samsung-Galaxy-A24-8-128GB-DUBAI.jpg"
        },
        {
            "name": "Oppo Reno 11 Pro",
            "processor": "Mediatek Dimensity 8200",
            "price": "20000",
            "image": "https://phonesstorekenya.com/wp-content/uploads/2023/07/Oppo-Reno-10-Pro-5G-1.jpg"
        },
        {
            "name": "Samsung Galaxy A35",
            "processor": "Exynos 1380 Soc",
            "price": "26500",
            "image": "https://i0.wp.com/hotspotelectronics.co.ke/wp-content/uploads/2024/04/Samsung-Galaxy-A35-5G-Navy.png?fit=800%2C800&ssl=1"
        },
        {
            "name": "Huawei Nova Y61",
            "processor": "Qualcomm Snapdragon 680G",
            "price": "30000",
            "image": "https://m.media-amazon.com/images/I/51efmiSrmeL._AC_.jpg"
        },
        {
            "name": "iPhone 13",
            "processor": "Apple A15 Bionic(5nm)",
            "price": "86500",
            "image": "https://istore.ke/wp-content/uploads/2021/09/iphone-13-pro-max-blue-select.png"
        },
        {
            "name": "Vivo V30",
            "processor": "Qualcomm Snapdragon 7Gen",
            "price": "45000",
            "image": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1706865527504/9fef4f86f94b5be5ed465424273c0a51.png"
        },
        {
            "name": "Nokia 7610 5G",
            "processor": "Qualcomm Snapdragon 7 Plus Gen 2",
            "price": "54000",
            "image": "https://www.gsmarena.com.bd/images/products/Nokia-76105G.jpg"
        },
        {
            "name": "HTC U24 Pro",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "price": "70000",
            "image": "https://fdn2.gsmarena.com/vv/pics/htc/htc-u24-pro-r1.jpg"
        }
    ]

    for product_data in products:
        product = Product(
            name=product_data["name"],
            processor=product_data["processor"],
            price=product_data["price"],
            image=product_data["image"]
        )
    
        db.session.add(product)
    
    db.session.commit()
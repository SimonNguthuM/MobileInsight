import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;

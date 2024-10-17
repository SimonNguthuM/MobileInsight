import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Users from './components/Users';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/users">Users</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default App;

# MobileInsight

MobileInsight is an e-commerce platform for discovering and purchasing the latest smartphones from top brands. The platform provides a responsive, intuitive interface with a **React** front-end and **Flask** back-end, allowing users to browse, search, review, and learn about mobile devices.

## Features

### MVP Features
1. **Product Catalog**: Browse a wide selection of smartphones from top brands.
2. **Search Functionality**: Quickly search for specific users.
3. **Detailed Product View**: View in-depth details about each mobile device, including specs and pricing.
4. **User Authentication**: Log-in and sign-up features for personalized user accounts.
5. **Product Reviews**: Customers can leave and view product reviews to share feedback, enhancing the user experience.

### Technical Requirements
- **Back-end Models**: Three models with relationships:
  - **One-to-Many**: 
    - Users to Reviews
    - Products to Reviews
  - **Many-to-Many**: 
    - Users and Products with a submittable "rating" attribute.
- **CRUD Actions**: Full CRUD for at least one resource (e.g., Products), with create and read actions for all resources.
- **Form Validation**: Implemented using Formik and Yup for input validation, including data type validation and string/number format validation.
- **Routes**: At least three client-side routes (e.g., Home, Discover, Specifications) using React Router, with a Navbar for easy navigation.

## Installation and Usage

### Prerequisites
- [Node.js] (for React front-end)
- [Python & Flask] (for back-end)

### Installation
1. **Backend**:
   - Navigate to the `backend` folder.
   - Install dependencies: 
     ```bash
     pip install
     ```
   - Run the Flask server: 
     ```bash
     python app.py
     ```

2. **Frontend**:
   - Navigate to the `frontend` folder.
   - Install dependencies: 
     ```bash
     npm install
     ```
   - Run the React app: 
     ```bash
     npm start
     ```

### Usage
1. Visit the homepage to browse for devices.
2. Log in to access personalized features.
3. Navigate to device details for specifications and user reviews.
4. Use the Admin panel (if admin) for product management.



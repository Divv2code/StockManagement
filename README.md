 A company operates a retail business that involves the management of various
products and their inventory. As the business grows, it has become increasingly
important to have a robust stock management system in place. To achieve this,
develop a Stock Management CRUD (Create, Read, Update, Delete) Operations
project. The purpose of this project is to enable efficient tracking, updating, and
maintenance of stock-related information.
Basic functionalities:
● An Admin can add new products to the inventory by providing details such
as product name, category, description, price, quantity, and other relevant
attributes.
● A Staff can only view the products.
Key Features:
In addition to the basic CRUD operations, the project should also include the
following features:
● Authentication and Authorization: Implement a user authentication system
to ensure that only authorized personnel can access and modify the stock
inventory.
● Establish role-based access control, differentiating between Admins and
Staffs.
Tech Stacks to be Used - React, Firebase.
** Extra brownie points on implementation with Next js 13 App router *

Step 1: Setting Up Firebase
Create a Firebase project on the Firebase console.
Set up Firebase Authentication for email/password login.
Create Firestore collections for products and users.
Step 2: Setting Up React App
Create a new React app (or Next.js app if you choose to use it).
Install Firebase SDK and necessary dependencies.
Step 3: Implement Authentication
In your React components, you'll need to handle:

User registration
User login
User logout
You'll interact with Firebase Authentication API for these operations.

Step 4: Implement Authorization and Role-Based Access Control
Once a user is authenticated, you'll need to fetch their role from the Firestore database.
Based on the role, you'll conditionally render different components or routes.
Step 5: CRUD Operations
Create a form for Admins to add new products.
Implement functions to interact with Firestore for creating, reading, updating, and deleting products.
Step 6: Routing (Optional, for Next.js)
If you're using Next.js, set up routes for different pages or components.

Step 7: Testing and Deployment
Test the application to ensure all functionalities work as expected. Then, deploy it to a hosting platform of your choice (e.g., Vercel, Netlify).

Example Code Snippets:
Here are some example code snippets to help you get started:

Firebase Configuration (in your React app)
javascript
Copy code
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
Creating a New Product
javascript
Copy code
const addProduct = async (productData) => {
  try {
    const productRef = await firestore.collection('products').add(productData);
    return productRef.id;
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};
Authentication (Firebase)
javascript
Copy code
// Sign Up
const signUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing up: ', error);
  }
};

// Log In
const logIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error logging in: ', error);
  }
};

// Log Out
const logOut = () => {
  auth.signOut();
};

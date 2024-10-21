# React Business Card App

This is a simple React-based web application that allows users to create and display reusable e-business cards. The app also features a backend server to store and manage the card data with basic CRUD (Create, Read, Update, Delete) operations.

## Features

### 1. Card Component
- **Props:** Pass a person's details like name, description, social media links, and interests to the card component.
- **Reusable:** The Card component can be reused across the app to display different people's information.
- **Social Media Links:** Shows buttons for LinkedIn, Twitter, and other social media platforms.
- **Interests Section:** Displays a person's interests as a list.

### 2. Add Card Page
- **User Input:** A form is provided to input a person's details such as name, description, social media handles, and interests.
- **Card Preview:** Shows a preview of the business card as the details are entered.
- **Submit:** Adds a new card to the page and stores it in the backend database.

### 3. Backend Server
- **Database Integration:** Stores the card information in a database (e.g., MongoDB).
- **CRUD Operations:** Supports Create, Read, Update, and Delete operations for cards.
- **Express API:** Provides a RESTful API to interact with the database and perform CRUD operations.

### 4. Admin Feature
- **Admin Panel:** Allows an admin to manage (create, update, delete) the cards from the frontend.
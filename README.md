# Chatbot Application

This is a simple chatbot application built using **React** for the frontend and **Node.js** for the backend. The chatbot simulates conversations and provides an interactive UI for users to send and receive messages.

---

## Features

- **User-friendly Interface**: A sleek and responsive design inspired by Instagram.
- **Real-time Chat**: Instant display of user messages and bot responses.
- **Backend Integration**: Connects to a Node.js backend to process and respond to user queries.
- **Scrollable Message Container**: Smooth scrolling to always show the latest messages.
- **Message Alignment**: User and bot messages are displayed on separate sides for clarity.

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **CSS**: For styling the application, including responsive and Instagram-inspired designs.

### Backend:
- **Node.js**: To handle API requests and generate bot responses.
- **Express.js**: As the web server framework.
- **API Integration**: Fetches responses from a server-side chatbot API.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**
- A modern web browser

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/chatbot-app.git
   cd chatbot-app
   ```

2. **Install Dependencies**:
   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

3. **Start the Backend Server**:
   ```bash
   cd backend
   node server.js
   ```
   The backend will start on `http://localhost:3000`.

4. **Start the Frontend**:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will start on `http://localhost:3001`.

---

## File Structure

```plaintext
chatbot-app/
├── frontend/               # React application
│   ├── public/             # Static assets
│   ├── src/                # React components and CSS
│   │   ├── components/     # Chatbot components
│   │   ├── App.js          # Main application file
│   │   ├── index.js        # Entry point
│   │   ├── Chatbot.css     # Styling for the chatbot
├── backend/                # Node.js backend
│   ├── server.js           # Express server
│   ├── routes/             # API routes
│   ├── package.json        # Backend dependencies
```

---

## Usage

1. Open the frontend application in your browser at `http://localhost:3001`.
2. Type your message in the input field and press "Send" or hit "Enter".
3. View the bot's responses aligned on the left and user messages aligned on the right.

---

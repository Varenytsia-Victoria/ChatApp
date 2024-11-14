# Realtime Chat App

A simple, real-time one-on-one messaging app built with React and Express.js. Users can register, log in, chat, attach files, and edit or delete their own messages.

## Features
- **User authentication** (register, log in)
- **One-on-one chat functionality**
- **File attachments** with messages
- **Message editing and deletion**
- **Real-time updates** with Socket.io
- **Dockerized** for easy deployment

## Technologies
**Backend:**
- Nest.js
- Node.js
- PostgreSQL
- JWT
- Socket.io 

**Frontend:**
- React.js
- Axios
- CSS

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Varenytsia-Victoria/RealtimeChat
   ```

2. **Run the app with Docker:**
   ```bash
   docker-compose up --build
   ```

### Run Locally without Docker (optional):

**Frontend:**

1. Go to the frontend folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```

**Backend:**

1. Go to the backend folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

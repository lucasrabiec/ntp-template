import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

// Redirect root to Admin panel
server.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: server,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here

server.listen(process.env.PORT);

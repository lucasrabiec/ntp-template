import dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';

dotenv.config();
const server = express();

server.get('/', (_, res) => {
  res.redirect('/admin');
});

payload.init({
  secret: process.env.PAYLOAD_SECRET ?? '',
  mongoURL: process.env.MONGODB_URI ?? '',
  express: server,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

server.listen(process.env.SERVER_PORT ?? 3080);

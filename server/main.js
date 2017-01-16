import dotenv from 'dotenv';
import Server from './server';

// Init environment variable
dotenv.config();

// Create and start a server
const server = new Server(process.env.PORT);
server.serve();

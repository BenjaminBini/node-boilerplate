import dotenv from 'dotenv';
import Database from './config/database';
import Server from './config/server';
import Models from './models/models';

async function startApp() {
  // Init environment variable
  dotenv.config();

  // Init DB
  const database = new Database();
  const databaseConnectionEstablished = await database.authenticate();
  if (databaseConnectionEstablished) {
    // Configure sequelize models
    Models.configureModels();

    // Create and start a server
    const server = new Server(process.env.PORT);
    server.serve();
  }
}

// Start the app !
startApp();

import dotenv from 'dotenv';
import Server from "./server";
import { sequelize } from '../models';

// Load environment variables from .env file
dotenv.config();

// Get the port from environment variables or default to 5000
const port: Number = parseInt(process.env.PORT || '5000');

// Create and start the server
const server = new Server();
server.app.listen(port,async()=>{
    await sequelize.authenticate()
    console.log(`SERVER RUNNING SUCCESSFULLY IN PORT ${port}.` )
})

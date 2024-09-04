import express from 'express';

export default class Server {
  app: express.Application;

  constructor() {
    this.app = express();  // Initialize express application
    this.configure();
  }

//   setConfiguration() {
//     // connect to db
//     this.connectDatabase();
//     // parse form
//     this.configureBodyParser();
//     this.app.use(cors());
//     this.app.use(express.json());
// }
//     configureBodyParser() {
//         throw new Error('Method not implemented.');
//     }
//     connectDatabase() {
//         throw new Error('Method not implemented.');
//     }
    


  private configure() {
    // Set up middlewares, routes, etc.
  }
}
function cors(): any {
    throw new Error('Function not implemented.');
}


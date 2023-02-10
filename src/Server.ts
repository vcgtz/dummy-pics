import express from 'express';
import Router from './routes/Router';
import cors from 'cors';
import bodyParser from 'body-parser';

class Server {
  private readonly app: express.Application;
  private readonly router: Router;
  private readonly port: number;

  constructor (port: number) {
    this.app = express();
    this.port = port;
    this.router = Router.getInstance();

    this.config();
  }

  public config (): void {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Set up the routes
    this.app.use('/', this.router.getExpressRouter());
  }

  public start (): void {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

export default Server;

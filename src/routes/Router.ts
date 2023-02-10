import { Router as ExpressRouter } from 'express';
import MainController from '../controllers/MainController';
import MainRouter from './MainRouter';

class Router {
  private static router: Router;
  private expressRouter: ExpressRouter;

  private constructor() {
    this.expressRouter = ExpressRouter();

    this.registerRoutes();
  }

  private registerRoutes(): void {
    const mainRouter: MainRouter = new MainRouter();

    this.expressRouter.use('/', mainRouter.getRouter());
  }

  public getExpressRouter(): ExpressRouter {
    return this.expressRouter;
  }

  public static getInstance(): Router {
    if (!this.router) {
      this.router = new Router();
    }

    return this.router;
  }
}

export default Router;

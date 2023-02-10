import { Router } from 'express';
import MainController from '../controllers/MainController';

class MainRouter {
  private router: Router;
  
  public constructor() {
    this.router = Router();

    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get('/', MainController.index);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default MainRouter;

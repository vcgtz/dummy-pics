import { Router } from 'express';
import DummyImagesController from '../controllers/DummyImagesController';

class DummyImagesRouter {
  private readonly router: Router;

  public constructor () {
    this.router = Router();

    this.registerRoutes();
  }

  private registerRoutes (): void {
    this.router.get('/', DummyImagesController.index);
  }

  public getRouter (): Router {
    return this.router;
  }
}

export default DummyImagesRouter;

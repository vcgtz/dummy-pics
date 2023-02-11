import { type Request, type Response } from 'express';

class MainController {
  public static index (req: Request, res: Response): void {
    res.render('main/index');
  }
}

export default MainController;

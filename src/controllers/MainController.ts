import { type Request, type Response } from 'express';

class MainController {
  public static index (req: Request, res: Response): Response {
    return res.send('Hello World!');
  }
}

export default MainController;

import { type Request, type Response } from 'express';
import sharp from 'sharp';

class DummyImagesController {
  public static index (req: Request, res: Response): void {
    const { width, height, color = '#EEE' } = req.query as { width: string, height: string, color: string };
    const svg: string = DummyImagesController.getBaseSVG(width, height, color);

    sharp(Buffer.from(svg))
      .png()
      .toBuffer()
      .then((buffer: Buffer) => {
        res.set('Content-Type', 'image/png');
        res.send(buffer);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error processing your request.');
      });
  }

  private static getBaseSVG (width: string, height: string, colorHex: string): string {
    return `
      <svg width="${width}" height="${height}">
        <style>
          .title { fill: #001; font-size: 2em; font-family: sans-serif; font-weight: lighter;}
        </style>
        <rect width="100%" height="100%" fill="#${colorHex}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="title">${width} x ${height}</text>
      </svg>
    `;
  }
}

export default DummyImagesController;

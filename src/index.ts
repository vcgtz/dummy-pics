import Server from './Server';
import dotenv from 'dotenv';

const main = (): void => {
  dotenv.config();

  const port: number = +process.env.PORT! || 3000;
  const server = new Server(port || 3000);

  server.start();
};

main();

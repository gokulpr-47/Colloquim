import express from 'express';

async function startServer() {
  const app = express();

  await loaders(app);
  routes.init(app);
  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();

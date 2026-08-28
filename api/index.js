export default async function handler(req, res) {
  const { AppServerModule } = await import('../dist/goal-church-app/server/main.js');
  const { ngExpressEngine } = await import('@nguniversal/express-engine');
  const express = (await import('express')).default;

  const app = express();

  // Set up Angular Universal engine
  app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
  app.set('view engine', 'html');
  app.set('views', 'dist/goal-church-app/browser');

  // Serve static files
  app.get('*.*', express.static('dist/goal-church-app/browser', {
    maxAge: '1y'
  }));

  // SSR routes
  app.get('*', (req, res) => {
    res.render('index', { req });
  });

  return app(req, res);
}

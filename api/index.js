import { join } from 'path';
import express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from '../dist/goal-church-app/server/main.js';

const app = express();

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', join(process.cwd(), 'dist/goal-church-app/browser'));

app.get('*.*', express.static(join(process.cwd(), 'dist/goal-church-app/browser'), {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render('index', { req });
});

export default app;

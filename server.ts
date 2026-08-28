import 'zone.js/node';

import * as dotenv from 'dotenv';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
const express = require('express');

// ============================================
// Load environment variables FIRST
// ============================================

const envPath = join(process.cwd(), '.env');

const envResult = dotenv.config({
  path: envPath
});

console.log('ENV PATH:', envPath);
console.log('ENV LOADED:', !envResult.error);
console.log('Loaded HOST:', process.env['HOST']);


// ============================================
// Express App
// ============================================

export function app():any {
  const server = express();

  const distFolder = join(
    process.cwd(),
    'dist/goal-church-app/browser'
  );

  const indexHtml = existsSync(
    join(distFolder, 'index.original.html')
  )
    ? 'index.original.html'
    : 'index';


  // Angular Universal
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);


  // Static files
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y'
    })
  );


  // Body parser
  const bodyParser = require('body-parser');

  server.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  server.use(bodyParser.json());


  // Images
  const directoryPath = join(
    __dirname,
    '../../../../public_images'
  );

  server.use(
    '/images',
    express.static(directoryPath)
  );


  // ============================================
  // IMPORTANT:
  // Load Routes AFTER dotenv has been configured
  // ============================================

  const { Routes } = require('routes');
  const routes = new Routes();
  routes.apiRoutes(server);
  // Angular routes
  server.get('*', (req:any, res:any) => {
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: req.baseUrl
        }
      ]
    });
  });

  return server;
}


// ============================================
// Start server
// ============================================

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();

  server.listen(port, () => {
    console.log(
      `Node Express server listening on http://localhost:${port}`
    );
  });
}


// ============================================
// Webpack / IISNode
// ============================================

declare const __non_webpack_require__: NodeRequire;

const mainModule = __non_webpack_require__.main;

const moduleFilename =
  mainModule && mainModule.filename || '';

if (
  moduleFilename === __filename ||
  moduleFilename.includes('iisnode')
) {
  run();
}


export * from './src/main.server';
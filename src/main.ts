import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

  function bootstrap() {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }


  console.log('document.readyState', document.readyState);

  if (document.readyState === 'complete') {
    bootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', bootstrap);
  }
  
  
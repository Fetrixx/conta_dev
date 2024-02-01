import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  import { registerLocaleData } from '@angular/common';
  import localeEs from '@angular/common/locales/es';

  registerLocaleData(localeEs, 'fr')


  

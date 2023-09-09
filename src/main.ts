/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgChatModule } from './ng-chat';

//import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(NgChatModule)
  .catch(err => console.error(err));

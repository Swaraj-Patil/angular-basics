import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



  // App
    // - Login
    // - Register
    // - Home 
          // - Feed
          // - Add friends
    // - Change pass
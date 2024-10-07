import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    ...(appConfig.providers || []),
    BrowserAnimationsModule,
  ],
})
  .catch((err) => console.error(err));

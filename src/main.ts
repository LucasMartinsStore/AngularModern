import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideNoopAnimations(),
    provideRouter(APP_ROUTES),
  ],
}).catch((err) => console.error(err));

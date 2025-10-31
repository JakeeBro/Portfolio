import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { About } from './app/components/about/about';
import { Projects } from './app/components/projects/projects';
import { Contact } from './app/components/contact/contact';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact }
];

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || {}),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' }))
  ]
})
  .catch((err) => console.error(err));

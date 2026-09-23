import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'The Theresian Charitable Trust (Ammaveedu) | Thellakom, Kottayam',
  },
  {
    path: 'stories/:slug',
    loadComponent: () => import('./features/story/story.component').then((m) => m.StoryComponent),
    title: 'The Story of Ammaveedu | Theresian Charitable Trust',
  },
  { path: '**', redirectTo: '' },
];

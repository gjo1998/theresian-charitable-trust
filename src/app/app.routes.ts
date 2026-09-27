import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Ammaveedu | A family home for boys in Thellakom, Kottayam',
  },
  {
    path: 'stories',
    loadComponent: () => import('./features/story/story.component').then((m) => m.StoryComponent),
    title: 'The story of Ammaveedu | Theresian Charitable Trust',
  },
  {
    path: 'stories/:slug',
    loadComponent: () => import('./features/story/chapter/chapter.component').then((m) => m.ChapterComponent),
    title: 'The story of Ammaveedu | Theresian Charitable Trust',
  },
  { path: '**', redirectTo: '' },
];

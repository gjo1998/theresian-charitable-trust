import { Routes } from '@angular/router';

/*
 * Titles, descriptions and link-preview tags are set by each page through
 * SeoService, so the routes carry no `title`.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'stories',
    loadComponent: () => import('./features/story/story.component').then((m) => m.StoryComponent),
  },
  {
    path: 'stories/:slug',
    loadComponent: () => import('./features/story/chapter/chapter.component').then((m) => m.ChapterComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

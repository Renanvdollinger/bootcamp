import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'list-item',
    loadChildren: () => import('./list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./icon/icon.module').then( m => m.IconPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'reorderlist',
    loadChildren: () => import('./reorderlist/reorderlist.module').then( m => m.ReorderlistPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

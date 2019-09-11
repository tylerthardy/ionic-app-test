import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loadout/5d7745763eb09a43c4659686', pathMatch: 'full' },
  { path: 'loadout', redirectTo: 'loadout/5d7745763eb09a43c4659686', pathMatch: 'full' },
  { path: 'loadout/:loadoutId', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'loadout', redirectTo: 'loadout/5d784db51a323633d41e2858', pathMatch: 'full' },
  { path: 'loadout/:loadoutId', loadChildren: () => import('./pages/loadout/loadout.module').then( m => m.LoadoutPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ItemSelectComponent } from '../item-select/item-select.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaperDollComponent } from '../paper-doll/paper-doll.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ItemSelectComponent,
    ItemDetailsComponent,
    PaperDollComponent
  ],
  providers: [
    ItemDetailsService
  ]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadoutPage } from './loadout.page';
import { ItemSelectComponent } from '../../shared/item-select/item-select.component';
import { ItemDetailsComponent } from '../../shared/item-details/item-details.component';
import { ItemDetailsService } from '../../shared/item-details/item-details.service';
import { PaperDollComponent } from '../../shared/paper-doll/paper-doll.component';
import { InventoryComponent } from '../../shared/inventory/inventory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoadoutPage
      }
    ])
  ],
  declarations: [
    LoadoutPage,
    ItemSelectComponent,
    ItemDetailsComponent,
    PaperDollComponent,
    InventoryComponent
  ],
  providers: [
    ItemDetailsService
  ]
})
export class LoadoutPageModule {}

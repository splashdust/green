import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModalsRoutingModule } from './modals-routing.module'
import { ModalsComponent } from './modals.component'
import { NggDropdownModule, NggModalModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    NggDropdownModule,
    NggModalModule,
    ModalsRoutingModule,
  ],
  exports: [],
})
export class ModalsModule {}

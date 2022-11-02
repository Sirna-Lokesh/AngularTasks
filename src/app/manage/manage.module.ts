import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FullnamePipe } from './fullname.pipe';

//alert("manageModule is loaded (lazy loading)");
console.log("manageModule is loaded");
@NgModule({
  declarations: [
    ManageUsersComponent,
    UserDetailsComponent,
    FullnamePipe
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  exports:[
    ManageUsersComponent
  ]
})
export class ManageModule { }

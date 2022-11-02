import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullnamePipe } from './fullname.pipe';
import { ManualComponentComponent } from './manual-component/manual-component.component';
import { CliComponentComponent } from './cli-component/cli-component.component';
// import { ManageModule } from './manage/manage.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    FullnamePipe,
    ManualComponentComponent,
    CliComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    NgbModule,
    // ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

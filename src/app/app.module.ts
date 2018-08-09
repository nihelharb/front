import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AddTestComponent } from './component/add-test/add-test.component';
import { EditTestComponent } from './component/edit-test/edit-test.component';
import {ListTestComponent} from "./component/list-test/list-test.component";
import {ManagerComponent} from "./component/manager/manager.component";
import {ListEchecComponent} from "./component/list-echec/list-echec.component";
import {RapportComponent} from "./component/rapport/rapport.component";
import { AppRoutingModule } from './app-routing.module';
import { TestService } from './services/test.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LunchTestComponent } from './component/lunch-test/lunch-test.component';
import { AuthService } from './services/auth.service';
import { AccountService } from './services/account.service';
import { UrlPermission } from './urlPermission/url.permission';

import { AdminPermission } from './urlPermission/admin.permission';
import { ManagerPermission } from './urlPermission/manager.permission';
import { CommonModule } from '@angular/common';
import 'Chart.js';



//import  { Chart } from 'c:/Users/asus/Downloads/RestClient/node_modules/@types/chart.js/index';  

//import { ChartModule } from 'chart.js/src/chart.js';


@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent,
    AddTestComponent,
    EditTestComponent,
    ManagerComponent,
    ListEchecComponent,
    RapportComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LunchTestComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule,

  ],

  providers: [AuthService,AccountService,UrlPermission,ManagerPermission,AdminPermission, TestService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

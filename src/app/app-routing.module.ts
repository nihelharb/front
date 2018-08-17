import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddTestComponent} from "./component/add-test/add-test.component";
import {EditTestComponent} from "./component/edit-test/edit-test.component";
import {ListTestComponent} from "./component/list-test/list-test.component";
import {ListEchecComponent} from "./component/list-echec/list-echec.component"
import { RapportComponent } from './component/rapport/rapport.component';
import { UrlPermission } from './urlPermission/url.permission';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { ManagerPermission } from './urlPermission/manager.permission';
import { AdminPermission } from './urlPermission/admin.permission';
import { LunchTestComponent } from './component/lunch-test/lunch-test.component';
import { IndexComponent } from './component/index/index.component';
import { Index2Component } from './component/index2/index2.component';




const routes: Routes = [
  
    { path: 'index_Manager', component: Index2Component,canActivate: [ManagerPermission] },
    { path: 'index', component: IndexComponent,canActivate: [AdminPermission]},
    { path: 'test', component: ListTestComponent },
    { path: 'index/add', component: AddTestComponent,canActivate: [AdminPermission] },
    { path: 'test/edit', component: EditTestComponent },
    { path: 'index/edit', component: EditTestComponent,canActivate: [AdminPermission] },
    { path: 'index/lunch', component: LunchTestComponent ,canActivate: [AdminPermission]},
    //{ path: 'echec', component: ListEchecComponent,canActivate: [ManagerPermission] },
    { path: 'manager/Rapport', component: RapportComponent,canActivate: [ManagerPermission] },
    { path: 'index_Manager/echec', component: ListEchecComponent },

   { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  
    { path: '**', redirectTo: '/login' }, 
   

];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
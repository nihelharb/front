import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddTestComponent} from "./component/add-test/add-test.component";
import {EditTestComponent} from "./component/edit-test/edit-test.component";
import {ListTestComponent} from "./component/list-test/list-test.component";
import {ManagerComponent} from "./component/manager/manager.component";
import {ListEchecComponent} from "./component/list-echec/list-echec.component"
import { RapportComponent } from './component/rapport/rapport.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UrlPermission } from './urlPermission/url.permission';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { ManagerPermission } from './urlPermission/manager.permission';
import { AdminPermission } from './urlPermission/admin.permission';
import { LunchTestComponent } from './component/lunch-test/lunch-test.component';



const routes: Routes = [
 
    { path: 'test', component: ListTestComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'test/add', component: AddTestComponent },
    { path: 'test/edit', component: EditTestComponent },
    { path: 'test/lunch', component: LunchTestComponent },
    { path: 'manager/echec', component: ListEchecComponent },
    { path: 'manager/Rapport', component: RapportComponent },

    { path: 'profile', component: ProfileComponent ,canActivate: [UrlPermission] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  
    // otherwise redirect to profile
    { path: '**', redirectTo: '/login' },
 
   

];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
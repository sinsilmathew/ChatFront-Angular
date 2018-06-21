import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//custom routes
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{};
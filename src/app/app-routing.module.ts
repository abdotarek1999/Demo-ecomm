import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CartComponent } from './Components/mycart/cart/cart.component';
import { DetailsComponent } from './Components/parent/productdetails/details/details.component';
import { LoginComponent } from './Components/userlogin/login/login.component';
import { RegisterComponent } from './Components/userregister/register/register.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ParentComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'details/:pid',
    component:DetailsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

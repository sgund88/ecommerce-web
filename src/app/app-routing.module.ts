import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent, canActivate : [AuthGuardService] },
  { path: 'cart', component: CartComponent, canActivate : [AuthGuardService]  },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

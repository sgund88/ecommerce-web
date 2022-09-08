import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';
import { LoaderComponent } from './component/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { ProductComponent } from './component/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { ProductServiceService } from './service/product-service.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CartComponent,
    LoaderComponent,
    ProductComponent,
    AlertBoxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthGuardService, AuthService, ProductServiceService, {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

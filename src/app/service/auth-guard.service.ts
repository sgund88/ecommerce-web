import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { ProductServiceService } from './product-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private productService: ProductServiceService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.authService.isUserLoggedIn()) {
      this.productService.alertBox.next({ active: true, message: "You are not allowed to view this page. Please Login First", status: "warning" });
      this.router.navigate(["login"], { queryParams: { retUrl: route.url } });
      return false;
    }

    return true;
  }

}

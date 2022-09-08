import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ProductServiceService } from "./service/product-service.service";

@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
  constructor(private prodService: ProductServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        this.prodService.loader.next(true);
        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this.prodService.loader.next(false);
            this.prodService.alertBox.next({active:false, message: "", status: ""});
          }
        }
      })
    )
  }
}

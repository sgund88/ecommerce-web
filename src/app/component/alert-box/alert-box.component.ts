import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
  alertBox: any;
  constructor(private prodService: ProductServiceService) {
    this.prodService.alertBox.subscribe(res => {
      this.alertBox = res;
    });
   }

  ngOnInit(): void {
  }

  closeAlert() {
    this.prodService.alertBox.next({active:false, message: "", status: ""});
  }
}

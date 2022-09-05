import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader: any;
  constructor(private prodService: ProductServiceService) {
    this.prodService.loader.subscribe(res => {
      this.loader = res;
    })
   }

  ngOnInit(): void {
  }

}

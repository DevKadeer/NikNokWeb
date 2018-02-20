import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
  }

  addCategory(name: string): void {
    this._productService.addCategory(name);
  }

}

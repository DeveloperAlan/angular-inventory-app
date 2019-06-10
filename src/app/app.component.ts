import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  product: Product;

  constructor() {
    let newProduct = new Product(
      'NICEHAT',
      'A Nice Blake Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );

    this.product = newProduct;
  }

}

import { Component, Input } from '@angular/core';
interface Product {
  id:number
  title: string,
  image: string,
  price: number,
  description: string,
  category?:string
  rating?:any
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

@Input() product! : Product;

}

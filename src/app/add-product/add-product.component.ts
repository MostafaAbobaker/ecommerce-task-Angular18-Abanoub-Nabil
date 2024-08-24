import { Component, EventEmitter, Output } from '@angular/core';
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
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  title:string =''
  priceString:string=''
  price:number = +this.priceString
  description: string = '';
  image:string = ''

  @Output() productCreated = new EventEmitter<Product>();

  onAddProduct(){
    this.productCreated.emit({id:2,title:this.title, price:this.price ,description: this.description , image:this.image });
    this.title = '';
    this.priceString= '';
    this.description = '';
    this.image = '';
  }
}


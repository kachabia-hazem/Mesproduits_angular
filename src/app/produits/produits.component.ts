import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
  
})
export class ProduitsComponent {
  produits : string[];
  constructor(){
    this.produits=["pc","phone","imprimant","modem"];
  
  }

}

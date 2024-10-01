import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
  
})
export class ProduitsComponent {
  produits : produit[];
  
  constructor(private produitServices: ProduitService  ){
    this.produits=this.produitServices.ListeProduits();
    
         
   
  
  }
  ngOnInit(): void{
  
  }
  SupprimerProduit(prod:produit){
    let conf=confirm("Etes-vous sur ?");
    if(conf){
    this.produitServices.SupprimerProduit(prod);
    }
  }
 

}

import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent {
  newProduit= new produit();
  message:string="0"


 

constructor(private ps: ProduitService){

}


  addProduit(){
    this.ps.ajouterPrduit(this.newProduit);
    this.message="Produit"+this.newProduit.nomProduit+"ajouté avec succés"
    
  }

}

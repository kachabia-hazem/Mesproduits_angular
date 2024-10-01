import { Injectable } from '@angular/core';
import { produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : produit[];
  



  constructor() {
    this.produits=[
      {
        idProduit :1,nomProduit:"playstation5",prixProduit:3500,dateCreation: new Date("12/27/2020") 
      },
      {idProduit :2,nomProduit:"samsung s23",prixProduit:4500,dateCreation: new Date("12/27/2023") },
      {idProduit :3,nomProduit:"iphone 16",prixProduit:6500,dateCreation: new Date("12/12/2024") },
      {idProduit :4,nomProduit:"pc asus rog",prixProduit:1000,dateCreation: new Date("10/12/2024") },
      {idProduit :5,nomProduit:"nvidia rtx 4070",prixProduit:5500,dateCreation: new Date("5/12/2023") },
      {idProduit :6,nomProduit:"intel i9 12",prixProduit:6500,dateCreation: new Date("7/12/2022") },
    ];

   }
   ListeProduits():produit[]{
    return this.produits;
  }
  ajouterPrduit(p:produit){
    this.produits.push(p);

  }
  SupprimerProduit(prod:produit){
    const index=this.produits.indexOf(prod,0);
    if(index>-1){
      this.produits.splice(index,1);
    }
  }
  consulterProduit(id:number):produit{
    return this.produits.find(p =>p.idProduit==id)!;
    
  }
  updateProduit(p:produit){
    this.SupprimerProduit(p);
    this.ajouterPrduit(p);
  }
}

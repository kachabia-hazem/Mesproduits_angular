import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css'
})
export class RechercheParCategorieComponent {
  produits!:produit[];
  categories!:Categorie[];
  IdCategorie:number=0;
  constructor(private ps:ProduitService){
  }
  ngOnInit():void{}}
    /* this.categories=this.ps.listeCategories();

    this.produits=[];

  }
    onChange() {
      this.produits = this.ps.rechercheParCategorie(this.IdCategorie);
    } */
    

  




import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router'; // Correction de l'import

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new produit();  // Correction du nom de la classe Produit
  message: string = '0';
  categories!: Categorie[];
  newCategorie!: Categorie;
  newIdCat!: number;

  constructor(private ps: ProduitService, private router: Router) {} // Correction de "route" à "router"

  ngOnInit(): void {
    // Récupérer la liste des catégories si nécessaire
    /* this.categories = this.ps.listeCategories(); */
  }

  addProduit() {
    this.ps.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']); // Correction pour utiliser 'router'
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css'] // Plural 'styleUrls'
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new produit();
  categories!: Categorie[];
  updateCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentProduit = prod; } ) ;
  //  this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);

  /*   this.categories = this.produitService.listeCategories();
 */
    //this.updateCatId = this.currentProduit.categorie.idCat;
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }
}

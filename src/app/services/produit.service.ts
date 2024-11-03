import { Injectable } from '@angular/core';
import { produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';

  produits!: produit[];
  // categories!: Categorie[];
  produitsRecherche: produit[] = [];

  constructor(private http: HttpClient) {
    /* 
    this.categories = [
      { idCat: 1, nomCat: "playstation" },
      { idCat: 2, nomCat: "telephone" },
      { idCat: 3, nomCat: "pc" }
    ];
    */
    /* 
    this.produits = [
      {
        idProduit: 1, nomProduit: "playstation5", prixProduit: 3500, dateCreation: new Date("12/27/2020"), categorie: { idCat: 1, nomCat: "playstation" }
      },
      { idProduit: 2, nomProduit: "samsung s23", prixProduit: 4500, dateCreation: new Date("12/27/2023"), categorie: { idCat: 2, nomCat: "telephone" } },
      { idProduit: 3, nomProduit: "iphone 16", prixProduit: 6500, dateCreation: new Date("12/12/2024"), categorie: { idCat: 2, nomCat: "telephone" } },
      { idProduit: 4, nomProduit: "pc asus rog", prixProduit: 1000, dateCreation: new Date("10/12/2024"), categorie: { idCat: 3, nomCat: "pc" } },
      { idProduit: 5, nomProduit: "nvidia rtx 4070", prixProduit: 5500, dateCreation: new Date("5/12/2023"), categorie: { idCat: 3, nomCat: "pc" } },
      { idProduit: 6, nomProduit: "intel i9 12", prixProduit: 6500, dateCreation: new Date("7/12/2022"), categorie: { idCat: 3, nomCat: "pc" } },
    ];
    */
  }

  listeProduit(): Observable<produit[]> {
    return this.http.get<produit[]>(this.apiURL);
  }

  ajouterProduit(prod: produit): Observable<produit> {
    return this.http.post<produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    consulterProduit(id: number): Observable<produit> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<produit>(url);
      }
      updateProduit(prod :produit) : Observable<produit>
{
return this.http.put<produit>(this.apiURL, prod, httpOptions);
}


  // consulterProduit(id:number): produit {
  //   return this.produits.find(p => p.idProduit == id)!;
  // }

  // updateProduit(p: produit) {
  //   this.SupprimerProduit(p);
  //   this.ajouterProduit(p);
  //   this.trierProduits();
  // }

  // trierProduits() {
  //   this.produits = this.produits.sort((n1, n2) => {
  //     if (n1.idProduit! > n2.idProduit!) {
  //       return 1;
  //     }
  //     if (n1.idProduit! < n2.idProduit!) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }

  /* listeCategories(): Categorie[] {
    return this.categories;
  }
  consulterCategorie(id: number): Categorie {
    return this.categories.find(haz => haz.idCat == id)!;
  } */

  /* rechercheParCategorie(iidCat: number): produit[] {
    this.produitsRecherche = [];
    this.produits.forEach((cur, index) => {
      if (iidCat === cur.categorie.idCat) {
        console.log("cur", cur);
        this.produitsRecherche.push(cur);
      }
    });
    return this.produitsRecherche;
  } */
}

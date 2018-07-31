import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoriqueService } from '../../services/historique.service';
import { Router } from '@angular/router';
import{Historique} from '../../model/Historique';
@Component({
  selector: 'rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {   
  rapport: Observable<String[]>;
  listComponent: RapportComponent;

  dateD :String ;
  dateF :String ;
  nom :String ;

  myArray = ['nom du test'    , 'nombre de tests effecuées', 'nombre d echec     ', 'temps de reponse moyenne(ms)'];
  constructor(private HistoriqueService: HistoriqueService,public router:Router) { }
 
   ngOnInit() {
   }
 
   reloadData() {
 
     this.rapport = this.HistoriqueService.getRapport(this.nom,this.dateD,this.dateF);
   }
   private getRapportSS() {
   
     this.HistoriqueService.getRapport(this.nom,this.dateD,this.dateF)
     
     .subscribe(
         
       data => {
         console.log("c bon");
         this.rapport=data;
       },
       error => {
         console.log("ereeeeur");
         alert(error);
       });
     
   }
  
   onSubmit() {
     this.getRapportSS();
     
   }
  

}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoriqueService } from '../../services/historique.service';
import { Router } from '@angular/router';
import{Historique} from '../../model/Historique';
@Component({
  selector: 'list-echec',
  templateUrl: './list-echec.component.html',
  styleUrls: ['./list-echec.component.css']
})
export class ListEchecComponent implements OnInit {
  hist: Observable<Historique[]>;
  listComponent: ListEchecComponent;

date :String ;


 constructor(private HistoriqueService: HistoriqueService,public router:Router) { }

  ngOnInit() {
  }

  reloadData() {

    this.hist = this.HistoriqueService.getEchec(this.date);
  }
  private getEchecs() {
  
    this.HistoriqueService.getEchec(this.date)
    
    .subscribe(
      data => {
        console.log(data);
        this.hist=data;
      },
      error => {
        console.log("ereeeeur");
        alert(error);
      });
    
  }
 
  onSubmit() {
    this.getEchecs();
    
  }
  
  

}

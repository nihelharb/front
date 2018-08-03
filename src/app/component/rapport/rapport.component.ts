import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoriqueService } from '../../services/historique.service';
import { Router } from '@angular/router';
import{Historique} from '../../model/Historique';
import * as Chart from 'Chart.js'

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

pieChart : any ;


  myArray = ['nom du test'    , 'nombre de tests effecuées', 'nombre d echec     ', 'temps de reponse moyenne(ms)'];
  constructor(private HistoriqueService: HistoriqueService,public router:Router) { }



  ngViewPieChart(){
this.pieChart = new Chart('pieChart',{
type : 'pie',
data : {
  label : ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'] ,
  datasets : [{
    label : '# from votes',
    data : [300, 50, 100, 40, 120],
    backgroundColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    BorderWidth: 1
  }]
},
options :{
  title : {
    text :"Pie Chart",
    display : true ,
  },


  
}
});
}


  /*
  public chartType:string = 'pie';

  public chartData:Array<any> = [300, 50, 100, 40, 120];

  public chartLabels:Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors:Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
      hoverBorderWidth: 0,
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
  }];

  public chartOptions:any = {
      responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
*/

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

import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../../services/historique.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CanvasJS from './Canvasjs.min.js';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {
  rapport: Observable<String[]>;

  dateD :String ;
  dateF :String ;
  nom :String ;
  constructor(private HistoriqueService: HistoriqueService,public router:Router) { }
  myArray = ['nombre de tests effecuées', 'nombre d echec     ','nombre de tests en retard', 'temps de reponse moyenne(ms)'];


  private getRapportSS() {
   
    this.HistoriqueService.getRapport(this.nom,this.dateD,this.dateF)
    
    .subscribe(
        
      data => {
    
        for (let i =0 ; i< data.length; i++){
          this.rapport[i]=data[i+1];
            
      
            }
            console.log(this.rapport[1]);

        
      },
      error => {
        console.log("ereeeeur");
        alert(error);
      });
    
  }
  onSubmit(){
    this.getRapportSS();
     
    this.HistoriqueService.getRapport(this.nom,this.dateD,this.dateF)
    
    .subscribe(
        
      data1 => {
        console.log("c bon");
        this.rapport=data1;
    let chart = new CanvasJS.Chart("chartContainer", {
        
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
          text: "Monthly Expense"
      },
      
      data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
              { y: Number(data1[0])-Number(data1[1])-Number(data1[2]), name: "succée" },
              { y: Number(data1[1]), name: "echec" },
              { y: Number(data1[2]), name: "retard" },
            
        ]
      }]
  });       
  chart.render();
 },)
 //////////////////

 this.HistoriqueService.getTime(this.nom,this.dateD,this.dateF)
     
 .subscribe(
     
   data1 => {
    
    let dataPoints=[];

    for(let key in data1){
        console.log(key);
        dataPoints.push({
        
        x:new Date(key),
        y:parseFloat(data1[key]),
        
    })
    }


console.log(dataPoints);

  var chart = new CanvasJS.Chart("chartContainer8", {
 
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Rapport du temps de réponse moyenne en fonction du temps"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Number of Visitors",
            includeZero: false,
            scaleBreaks: {
                autoCalculate: true
            }
        },
        data: [{
            type: "line",
            xValueFormatString: "DD MM",
            color: "#F08080",
            dataPoints: dataPoints
        
                /**{ x: new Date("2017-08-01"), y: 610 },
                { x: new Date("2017-08-08"), y: 20 },**/
                
 //for(let key of data1){
    
        
//  }

            
        }]
    });
    chart.render();


        
   })
  }
  ngOnInit() {

  }

}

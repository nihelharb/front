import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoriqueService } from '../../services/historique.service';
import { Router } from '@angular/router';
import * as CanvasJS from './Canvasjs.min.js';


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




  myArray = ['nom du test   '  , 'nombre de tests effecuées', 'nombre d echec     ','nombre de tests en retard', 'temps de reponse moyenne(ms)'];
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
                { y: Number(data1[1])-Number(data1[2])-Number(data1[3]), name: "succée" },
                { y: Number(data1[2]), name: "echec" },
                { y: Number(data1[3]), name: "retard" },
              
          ]
        }]
    });       
    chart.render();
   },)
 /////
 var chart = new CanvasJS.Chart("chartContainer1", {
	theme: "light2",
	title: {
		text: "Variation de temps de réponse"
	},
	axisX: {
		valueFormatString: "DD MMM"
	},
	axisY: {
		title: "Temps de Réponse(s)"
	},
	toolTip: {
		shared: true
	},
	legend: {
		dockInsidePlotArea: true,
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "rangeArea",
		markerSize: 0,
		name: "Temps de réponse Range",
		showInLegend: true,
		toolTipContent: "{x}<br><span style=\"color:#6D77AC\">{name}</span><br>Min: {y[1]} °C<br>Max: {y[0]} °C",
		dataPoints: [
			{ x: new Date(2017, 6, 1), y: [30, 19] },
			{ x: new Date(2017, 6, 2), y: [30, 21] },
			{ x: new Date(2017, 6, 3), y: [29, 21] },
			{ x: new Date(2017, 6, 4), y: [28, 20] },
			{ x: new Date(2017, 6, 5), y: [29, 20] },
			{ x: new Date(2017, 6, 6), y: [29, 20] },
			{ x: new Date(2017, 6, 7), y: [27, 21] },
			{ x: new Date(2017, 6, 8), y: [26, 20] },
			{ x: new Date(2017, 6, 9), y: [30, 20] },
			{ x: new Date(2017, 6, 10), y: [30, 21] },
			{ x: new Date(2017, 6, 11), y: [30, 21] },
			{ x: new Date(2017, 6, 12),y: [29, 21] },
			{ x: new Date(2017, 6, 13),y: [27, 20] },
			{ x: new Date(2017, 6, 14),y: [27, 20] },
			{ x: new Date(2017, 6, 15),y: [25, 20] },
			{ x: new Date(2017, 6, 16),y: [29, 20] },
			{ x: new Date(2017, 6, 17),y: [28, 20] },
			{ x: new Date(2017, 6, 18),y: [27, 21] },
			{ x: new Date(2017, 6, 19),y: [27, 21] },
			{ x: new Date(2017, 6, 20),y: [29, 21] },
			{ x: new Date(2017, 6, 21),y: [29, 20] },
			{ x: new Date(2017, 6, 22),y: [31, 20] },
			{ x: new Date(2017, 6, 23),y: [30, 21] },
			{ x: new Date(2017, 6, 24),y: [30, 20] },
			{ x: new Date(2017, 6, 25),y: [31, 21] },
			{ x: new Date(2017, 6, 26),y: [30, 21] },
			{ x: new Date(2017, 6, 27),y: [31, 21] },
			{ x: new Date(2017, 6, 28),y: [31, 21] },
			{ x: new Date(2017, 6, 29),y: [31, 21] },
			{ x: new Date(2017, 6, 30), y: [31, 21] },
			{ x: new Date(2017, 6, 31), y: [31, 22] }
		]
	}]
});
chart.render();

addAverages();

function addAverages() {
	var dps = [];
	for(var i = 0; i < chart.options.data[0].dataPoints.length; i++) {
		dps.push({
			x: chart.options.data[0].dataPoints[i].x,
			y: (chart.options.data[0].dataPoints[i].y[0] + chart.options.data[0].dataPoints[i].y[1]) / 2
		});
	}
	chart.options.data.push({
		type: "line",
		name: "Average",
		showInLegend: true,
		markerType: "triangle",
		markerSize: 0,
		yValueFormatString: "##.0 S",
		dataPoints: dps
	});
	chart.render();
}

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}


}

}

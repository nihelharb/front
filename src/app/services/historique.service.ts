import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn : "root"}
)
export class HistoriqueService {

  constructor(private http: HttpClient) {  }
  baseUrl: string = 'http://localhost:8080/api/historique'

getHistorique() : Observable<any>{
      return this.http.get(`${this.baseUrl}`);
  }
  getEchec(date: String) : Observable<any>{
    console.log(this.http.get(`${this.baseUrl}`+/echec/+`${date}`));
    return this.http.get(`${this.baseUrl}`+/echec/+`${date}`);
    
  }
  getRapport(nom : String ,dateD : String ,dataF : String): Observable<any>{
  
    return this.http.get(`${this.baseUrl}/${nom}/${dateD}/${dataF}`);

  }
 
}

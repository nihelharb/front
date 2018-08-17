import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../model/Test';

@Injectable({providedIn : "root"})
export class TestService {

  constructor(private http: HttpClient) {  }
      baseUrl: string = 'http://localhost:8080/api/test'

  getTests() : Observable<any>{
       
    
          return this.http.get(`http://localhost:8080/api/test_date`);
      
      }

      getTestById(id: String) : Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);    }


        getTestByURL(URL : String): Observable<any> {
          return this.http.get(`${this.baseUrl}/URL/${URL}`);
         }

         createTest(test: Object): Observable<Object> {
  
          return this.http.post(`${this.baseUrl}` + `/create`, test);
      }


      updateTest(test: Test) {
        return this.http.put(`${this.baseUrl}/${test.id}` ,test);
      }



    deleteTest(id: String): Observable<any> {
      return this.http.delete(`${this.baseUrl}`+`/delete/${id}`, { responseType: 'text' });
    }
    
    lunchAllTests(): Observable<any>{
      return this.http.post(`${this.baseUrl}`+`/lunchAll`, { responseType: 'text' }) ;
    }

     /*    deleteTest(id: String) {
        //return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
        return this.http.delete(`${this.baseUrl}` + `/delete/{id}`, { responseType: 'text' });
  
      }*/

      lunchTest(test: Test){
        return this.http.post(`${this.baseUrl}`+`/lunch`,test) ;
      }

  
     
}

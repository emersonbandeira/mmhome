import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Roadmap } from './roadmap';


@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private apiURL = "http://jsonplaceholder.typicode.com";
      
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/posts/').pipe( catchError(this.errorHandler)    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(roadmap:Roadmap): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(roadmap), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/posts/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, roadmap:Roadmap): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(roadmap), this.httpOptions)
  
    .pipe( 
      catchError(this.errorHandler)
    )
  }
        
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
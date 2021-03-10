import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http:HttpClient) { }

  public getYouBikeData(): Observable<JSON> {  
      const URL = 'http://127.0.0.1:5000/';
      return this.http.get<JSON>(URL);
    }

  public HandleError(e: any): void {
    // console.log(e);
    alert(e.error.error);
  }
}


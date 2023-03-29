import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public baseUrl = "https://ti-react-test.herokuapp.com/users";

  constructor(private http: HttpClient) { }

  // public getImag(): Observable<any> {
  //   return this.httpClient.get(`api/images`);
  // }

  getImages(item:any): Observable<any> {
    console.log('item', item);
    return this.http.get<any>(`api/images`);
  }

}

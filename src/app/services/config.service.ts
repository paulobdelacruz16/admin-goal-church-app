import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public baseUrl = 'https://ti-react-test.herokuapp.com/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    }),
  };
  constructor(private http: HttpClient) {}

  // public getImag(): Observable<any> {
  //   return this.httpClient.get(`api/images`);
  // }

  getImages(item: any): Observable<any> {
    return this.http.get<any>(`api/images`);
  }

  getAllImages(): Observable<any> {
    return this.http.get<any>(`api/images`);
  }

  getAllSection1(): Observable<any> {
    return this.http.get<any>(`api/section1`);
  }

  postSection1(data: any): Observable<any> {
    return this.http.post<any>('api/section1', data);
  }

  putSection1(data: any): Observable<any> {
    return this.http.put<any>('api/section1', data);
  }

  deleteSection1(data: any): Observable<any> {
    return this.http.delete<any>(`api/section1/:${data.id}`);
  }

  uploadImages(image: any): Observable<any> {
    return this.http.post<any>('/api/uploadImage', image);
  }

  deleteImage(name: any): Observable<any> {
    return this.http.delete<any>(`api/deleteImage/:${name}`);
  }

  findLoginCredential(data: any): Observable<any> {
    return this.http.post<any>('/ng/api/findByloginCredential', data);
  }

  getAlloginCredential(): Observable<any> {
    return this.http.get<any>(`/ng/api/getAlloginCredential`);
  }

  dynamicAddApi(data: any): Observable<any> {
    return this.http.post<any>('/ng/api/dynamicApi/add', data);
  }
  
  dynamicUpdateApi(data: any): Observable<any> {
    return this.http.post<any>('/ng/api/dynamicApi/update', data);
  }

  dynamicDeleteApi(data: any): Observable<any> {
    return this.http.post<any>('/ng/api/dynamicApi/delete', data);
  }
}

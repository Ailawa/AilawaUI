import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecuritasService {
  url = "";

  constructor(private http: HttpClient) { }

  UploadExcel(formDate: FormData) {

    let headers = new HttpHeaders();
    headers.append('content-type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    const httpOptions = {headers : headers};

    return this.http.post(this.url, formDate, httpOptions);
  }
}

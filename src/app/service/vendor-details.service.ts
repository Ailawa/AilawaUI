import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorDetailsService {

  url = "http://localhost:5000/api/VendorMaster/get";

  constructor(private httpClient: HttpClient) { }

  GetVendorDetails(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}

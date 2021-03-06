import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// tslint:disable-next-line: import-spacing
import {Observable} from 'rxjs';
import { SalesDetails } from 'src/app/Models/Sale-models/SaleDetails';
const baseUrl = 'https://localhost:44326/api/salesdetails';
const baseUrl1 = 'https://localhost:44326/api/salesdetails/getPriceByProductId';
const baseUrl2 = 'https://localhost:44326/api/salesdetails/getAllFalse';
const baseUrl3 = 'https://localhost:44326/api/salesdetails/getDetailsBySaleId';


const headerOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SalesDetailsService {

  constructor(private http: HttpClient) { }
  create(saleDetails: SalesDetails): Observable<SalesDetails>{
   return this.http.post<SalesDetails>(baseUrl, saleDetails, headerOptions);
  }
  getAll(): Observable<SalesDetails[]>{
    return this.http.get<SalesDetails[]>(baseUrl);
  }
  getPriceByProductId(id: number): Observable<any>{
    return this.http.get(`${baseUrl1}/${id}`);
  }
  getAllSaleDetail(): Observable<SalesDetails[]>{
    return this.http.get<SalesDetails[]>(baseUrl2);
  }
  getDetailsBySaleId(id: number): Observable<SalesDetails[]>{
    return this.http.get<SalesDetails[]>(`${baseUrl3}/${id}`);
  }
}

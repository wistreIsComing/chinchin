import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  result: Observable<any>;

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any>{
    return this.http
    .get<any>(`${environment.binance.apiUrl}/api/v3/ticker/24hr`)
    .pipe(map((resp: any) => resp));
  }
}

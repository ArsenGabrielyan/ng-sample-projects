import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpQuoteService {
  constructor(private client: HttpClient) {}
  getData(): Observable<any>{
    return this.client.get("https://api.quotable.io/random");
  }
}

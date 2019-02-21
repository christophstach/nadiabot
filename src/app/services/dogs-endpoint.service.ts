import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsEndpointService {

  constructor(private http: HttpClient) {
  }

  async  getRandomDog(): Promise<string> {
    return '';
  }
}

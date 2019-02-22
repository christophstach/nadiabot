import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {

  constructor(private http: HttpClient) {
  }

  fetchRandomDog(): Promise<string> {
    return this.http.get<{ status: string; message: string; }>('https://dog.ceo/api/breed/terrier/westhighland/images/random').pipe(
      map(response => response.message)
    ).toPromise();
  }
}

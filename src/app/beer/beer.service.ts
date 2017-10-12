import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  constructor(private http: Http) {
  }

  getAll(): Observable<any> {
    const url = 'http://localhost:8080/good-beers';
    return this.http.get(url)
      .map((response: Response) => response.json());
  }

  save(item: any) {
    const url = 'http://localhost:8080/new';
    this.http.post(url, JSON.stringify(item)).subscribe();
  }
}

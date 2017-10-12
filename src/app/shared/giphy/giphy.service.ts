import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

  giphyApi = 'https://api.giphy.com/v1/gifs/search?api_key=Joyh3LXeEO0mFIj0Z7VBaIIRPQ4QQZ5G&q=';
  giphySuffix = '&limit=25&offset=0&rating=G&lang=en';

  constructor(private http: Http) {
  }

  get(searchTerm): Observable<any> {
    const apiLink = this.giphyApi + searchTerm + this.giphySuffix;
    return this.http.request(apiLink)
      .map((res: Response) => {
        const results = res.json().data;
        if (results.length > 0) {
          return results[0].images.downsized_large.url;
        } else {
          return 'https://giphy.com/gifs/3o84Ughbtrcsp8OAM0/html5';
        }
      });
  }
}

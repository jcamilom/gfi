import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SearchResultItem } from '../../core/models/models';

interface SearchResponse {
  Search: SearchResultItem[];
  totalResults: string;
  Response: 'True' | 'False';
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public search(value: string): Observable<SearchResponse> {
    const url = environment.API_DOMAIN;
    const options = { params: new HttpParams().set('s', value) };
    return this.http.get<SearchResponse>(url, options);
  }

}

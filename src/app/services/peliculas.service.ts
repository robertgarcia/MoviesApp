import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '0316fbbdf2d4f5c13a4f32fe7c90054a';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient
  ) { }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}

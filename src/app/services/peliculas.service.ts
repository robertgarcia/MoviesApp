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

  getPopularesKids() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    &api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    desde.setDate(hasta.getDate() - 17);
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = `${ desde.getFullYear() }-${ ('0' + (desde.getMonth() + 1)).slice(-2) }-${ ('0' + desde.getDate()).slice(-2) }`;
    const hastaStr = `${ hasta.getFullYear() }-${ ('0' + (hasta.getMonth() + 1)).slice(-2) }-${ ('0' + hasta.getDate()).slice(-2) }`;
    console.log(`${desdeStr} - ${ hastaStr }`);
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}

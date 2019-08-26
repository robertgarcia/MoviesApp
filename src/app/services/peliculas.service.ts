import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: any[] = [];
  private apikey = '0316fbbdf2d4f5c13a4f32fe7c90054a';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient
  ) { }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(map((res: any) => {
      return res.results;
    }));
  }

  getPopularesKids() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    &api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(map((res: any) => {
      return res.results;
    }));
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    desde.setDate(hasta.getDate() - 17);
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = `${ desde.getFullYear() }-${ ('0' + (desde.getMonth() + 1)).slice(-2) }-${ ('0' + desde.getDate()).slice(-2) }`;
    const hastaStr = `${ hasta.getFullYear() }-${ ('0' + (hasta.getMonth() + 1)).slice(-2) }-${ ('0' + hasta.getDate()).slice(-2) }`;
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(map((res: any) => {
      return res.results;
    }));
  }

  buscarPeliculas(texto: string) {
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(map((res: any) => {
      this.peliculas = res.results;
      return res.results;
    }));
  }
}

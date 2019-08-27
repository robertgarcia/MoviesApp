import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {
    const url = 'http://image.tmdb.org/t/p/w500';

    if ( poster ) {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'https://www.cicar.com/html/thumbnails/noimage.png';
      }
    }

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'https://www.cicar.com/html/thumbnails/noimage.png';
      }
    }
  }

}

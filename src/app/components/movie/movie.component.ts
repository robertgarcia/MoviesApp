import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pelicula: any;
  constructor(
    public service: PeliculasService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe((parametros: any) => {
      this.service.getPelicula(parametros.id).subscribe((res: any) => {
        this.pelicula = res;
      });
    });
  }

  ngOnInit() {
  }

}

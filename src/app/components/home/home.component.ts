import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesKids: any;
  constructor(
    private service: PeliculasService
  ) {
    this.service.getCartelera().subscribe( (res: any) => this.cartelera = res.results );
    this.service.getPopulares().subscribe( (res: any) => this.populares = res.results );
    this.service.getPopularesKids().subscribe( (res: any) => this.popularesKids = res.results );
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  constructor(
    private service: PeliculasService
  ) {
    this.service.getPopulares().subscribe( (res: any) => {
      console.log(res);
      this.cartelera = res.results;
    });
  }

  ngOnInit() {
  }

}

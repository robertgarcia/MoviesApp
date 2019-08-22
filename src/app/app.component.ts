import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(public service: PeliculasService) {
    this.service.getPopulares().toPromise().then( data => console.log(data) ).catch( err => console.log(err));
  }
}

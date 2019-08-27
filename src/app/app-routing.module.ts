import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pelicula/:id/:pag', component: MovieComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: MovieComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

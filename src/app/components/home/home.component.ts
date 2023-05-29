import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  data: any;
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    /**** -- Introduccion peticiones HTTP ***********/
    /* 
     console.log("Constructor del Home")
     this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(
       (data: any) => {
         this.paises = data;
         console.log(data);
       }
     );*/
  }

  ngOnInit() {
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleases().subscribe(
      data =>{
        this.nuevasCanciones = data;
        this.loading = false;
        console.log(this.nuevasCanciones);
      },
      (errorServicio) =>{
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }

}

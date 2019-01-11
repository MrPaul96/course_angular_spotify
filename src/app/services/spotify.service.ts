import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

//Injectable este servicio se va a poder inyectar en otros componentes.
/*
@Injectable()
*/

//Aca no es necesario en providers, por el nuevo update.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
  }

  getNewReleases(){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAUjsYEaHoCDZvV8tzi1pKvrZtp7ktYhosO8gGHF0kgss2dAHivmnMm3xVk4n-5uxS4M2GayUFvA_9BtAM'
    }); 

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }
}

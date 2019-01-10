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
      'Authorization': 'Bearer BQAzJepriDggwp5riveVwg6bygtG8NnAclgJ2fVhN77MLxsLkgImF289I3hqSNEUD5Uu4ZQuJkGjuiw6Cn8'
    }); 

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe(
      (data) => {
         console.log(data);
      }
    )

  }
}

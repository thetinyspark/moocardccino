import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Card, DEFAULT_TYPE } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // On va aller chercher nos données par le biais de requêtes http.
  // Pour cela, on a besoin d'un service, déjà codé, nommé HttpClient
  // et disponible au sein du module HttpClientModule.

  constructor( private http:HttpClient ) { }

  public getAll():Observable<Card[]>{
    return this.http.get<Card[]>(environment.cardsApiUrl);
  }

  public getTypes():Observable<any[]>{
    return this.http.get<any[]>(environment.cardTypesApiUrl);
  }

  public getDefaultType():Observable<string>{
    return this.getTypes().pipe( 
      map(
        (types:any[]) => {
          const results:any[] = types.filter( (cur) => cur.default );
          if( results.length > 0 ){
            return results.shift().type;
          }
          else{
            return DEFAULT_TYPE;
          }
        }
      )
    )
  }
}

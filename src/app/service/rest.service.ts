import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Directory, Ruta } from '../model/paths-interface';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private url = "https://localhost:7155/api/Prueba/Directorio";

  

  public get(){
    return this.http.get(this.url);
  }

  //[POST]
  public MainDirectory(body?: Ruta){
    return this.http.post<Directory>(this.url, body)
       .pipe(
         map( resp => {
           return resp.archivos;
         })
       )
    
  }

  public AnyDirectory (ruta: any){
    return this.http.post<Directory>(this.url, ruta);
  }
}

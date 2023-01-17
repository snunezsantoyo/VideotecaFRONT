import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Archivo, Directory, Ruta } from '../model/paths-interface';
@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  private Directorio = 'https://localhost:7155/api/Videoteca/Directorio';
  
  private ObtenerVideo = 'https://localhost:7155/api/Videoteca/ObtenerVideo';

  public get() {
    return this.http.get(this.Directorio);
  }

  //[POST]
  public MainDirectory(body?: Ruta) {
    return this.http.post<Directory>(this.Directorio, body).pipe(
      map((resp) => {
        return resp.archivos;
      })
    );
  }

  public GetVideo(ruta: Ruta) {
    return this.http.post<Archivo>(this.ObtenerVideo, ruta).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Archivo, Directory } from 'src/app/model';
import { Ruta } from 'src/app/model/paths-interface';
import { RestService } from 'src/app/service/rest.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Pila } from 'src/app/model/pila.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public HistorialDirectorio: Pila = new Pila();
  public DirectorioActual: Directory;
  public Archivos$: Observable<Archivo[]>;
  public refreshArchivos$ = new BehaviorSubject<boolean>(true);
  public ruta: Ruta = { url: '' };
  public play: boolean = false;
  public video: Archivo;
  public path_base: string = "data:video/mp4;base64,";
  public path_video: string;
  //refreshArchivos$ = new BehaviorSubject<boolean>(true);

  rutas = [
    {
      name: 'Home',
      path: '/home',
      directorio: 'true',
    },
    {
      name: 'Contact',
      path: '/contact',
      directorio: 'true',
    },
    {
      name: 'About',
      path: '/about',
      directorio: 'false',
    },
    {
      name: 'Directory',
      path: '/directory',
      directorio: 'false',
    },
  ];

  constructor(private service: RestService) {}

  ngOnInit(): void {
    this.Archivos$ = this.refreshArchivos$.pipe(
      switchMap((_) => this.service.MainDirectory(this.ruta))
    );
  }

  regresar() {
    //console.log(this.HistorialDirectorio.extraer());
    this.ruta.url = <string>this.HistorialDirectorio.extraer();
    this.refreshArchivos$.next(true);
  }
  cargarHome() {
    this.ruta.url = '';
    this.refreshArchivos$.next(true);
  }
  cargarNuevoDirectorio(ruta: string, isDirectory: boolean) {
    // if (ruta.url !== ''){
    //   console.log(ruta);
    //   this.Archivos$ =  this.service.MainDirectory(ruta);
    //   console.log(ruta);
    //
    // }
    if (isDirectory) {
      this.ruta.url = ruta;
      this.refreshArchivos$.next(true);
      this.HistorialDirectorio.insertar(ruta);
    } else {
      console.log(ruta);
      this.ruta.url = ruta;
      this.play = true;
      this.path_video = this.path_base;
      this.ReproducirVideo();
    }
  }

  ReproducirVideo() {
    this.service.GetVideo(this.ruta).subscribe(archivo => this.path_video += archivo.base64);
    console.log(this.path_video);
  }
}

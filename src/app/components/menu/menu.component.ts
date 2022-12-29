import { Component, OnInit } from '@angular/core';
import { Archivo, Directory } from 'src/app/model';
import { Ruta } from 'src/app/model/paths-interface';
import { RestService } from 'src/app/service/rest.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {

    public DirectorioActual: Directory
    public Archivos$: Observable<Archivo[]>
    public refreshArchivos$ = new BehaviorSubject<boolean>(true);
    public ruta: Ruta = { url : ""}
    //refreshArchivos$ = new BehaviorSubject<boolean>(true);

    rutas = [
      {
        name: 'Home',
        path: '/home',
        directorio: 'true'
      },
      {
        name: 'Contact',
        path: '/contact',
        directorio: 'true'
      },
      {
        name: 'About',
        path: '/about',
        directorio: 'false'
      },
      {
        name: 'Directory',
        path: '/directory',
        directorio: 'false'
      }
    ];

      
  constructor(private service: RestService) { }
   
  ngOnInit(): void { 
  this.Archivos$ = this.refreshArchivos$.pipe(switchMap(_ => this.service.MainDirectory(this.ruta))); 
  }

  cargarNuevoDirectorio (ruta: string){

    // if (ruta.url !== ''){
    //   console.log(ruta);
    //   this.Archivos$ =  this.service.MainDirectory(ruta);
    //   console.log(ruta);
    //   
    // }
    
    this.ruta.url = ruta;
    this.refreshArchivos$.next(true);
  }

}

import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-pagina-principal-estudiante',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  opcion = true;
  opcionSubmit: string[] = ['insertar', ''];

  constructor() { }

  ngOnInit(): void {

  }

  mostrar(opcionEvent: string[]){
    this.opcion = false;
    this.opcionSubmit = opcionEvent;
  }

  nuevo(){
    this.opcion=false;
    this.opcionSubmit = ['insertar', ''];
  }

  regresarSubmit(opcionSubmit: boolean){
    console.log(this.opcion);
    this.opcion = opcionSubmit;
    console.log(this.opcion);
  }

}

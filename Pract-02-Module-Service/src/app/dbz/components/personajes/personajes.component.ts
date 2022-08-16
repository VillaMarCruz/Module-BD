import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personajes } from '../../interfaces/personaje';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Output() personajeModificado = new EventEmitter<Personajes>();

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  get Personajes(){
    return this.dbzService.getLista;
  }

  modificar(personaje:Personajes){
    this.personajeModificado.emit(personaje);
  }

  eliminar(personaje: Personajes){
    let posicion:number = this.dbzService.busquedaPersonaje(personaje.codigo);
    this.dbzService.eliminarPersonaje(posicion);
  }
}

import { Injectable } from '@angular/core';
import { Personajes } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  opcion='insertar';

  private ListaPersonajes:Personajes[]=[
    {
      codigo: 1,
      nombre: 'Goku',
      ciudad: 'New York',
      poder: 1000
    },
    {
      codigo: 2,
      nombre: 'Vegeta',
      ciudad: 'New York',
      poder: 750
    }
  ]

  constructor() { }

  get getLista(): Personajes[]{
    return [...this.ListaPersonajes];
  }

  set setLista(personajes:Personajes[]){
    this.ListaPersonajes = personajes;
  }

  busquedaPersonaje(codigo: number): number{
    let posicion:any = this.getLista.findIndex((personaje) => personaje.codigo === codigo)
    return posicion;
  }

  agregarPersonaje(personaje:Personajes){
    this.ListaPersonajes.push(personaje);
  }

  actualizarPersonaje(index: number, updatedPersonaje: Personajes){
    this.ListaPersonajes[index] = updatedPersonaje;
  }

  eliminarPersonaje(posicion: number) {
    this.ListaPersonajes.splice(posicion, 1);
  }
}

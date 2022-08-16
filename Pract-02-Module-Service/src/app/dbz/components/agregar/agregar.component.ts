import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personajes } from '../../interfaces/personaje';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input()
  opcion: string;
  @Input()
  dbzForm!: FormGroup;

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
    this.dbzForm;
  }

  onSubmit() {
    let posicion: number = 0;
    let personaje = this.dbzForm.value;

    if (this.opcion === 'insertar') {
      this.dbzService.agregarPersonaje(personaje);
    } else {
      posicion = this.dbzService.busquedaPersonaje(personaje.codigo);
      this.dbzService.actualizarPersonaje(posicion, personaje);
      /* this.opcion = 'insertar'; */
    }
    this.dbzForm.reset();
  }
}

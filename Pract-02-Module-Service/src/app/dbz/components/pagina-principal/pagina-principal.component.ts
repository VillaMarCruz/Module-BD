import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personajes } from '../../interfaces/personaje';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent implements OnInit {

  dbzFormInit!: FormGroup;
  opcion:string = 'insertar';

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.dbzFormInit = this.initForm();
  }

  obj: Personajes = {
    codigo: 3,
    nombre: 'Maestro Zatan',
    ciudad: 'Machala',
    poder: 2,
  };

  initForm(): FormGroup {
    return this.fb.group({
      codigo: new FormControl({value: 3, disabled: false}, [Validators.required]),
      nombre: ['Maestro Satan', [Validators.required]],
      ciudad: ['Machala', [Validators.required]],
      poder: [2, [Validators.required]]
    });
  }

  mostrar(personaje: Personajes){
    this.opcion = 'actualizar';
    console.log(this.opcion);
    this.dbzFormInit.patchValue({
      codigo: personaje.codigo,
      nombre:personaje.nombre,
      ciudad: personaje.ciudad,
      poder: personaje.poder,
    });
  }

  nuevo(){
    this.opcion = 'insertar';
    this.dbzFormInit.patchValue({
      codigo: '',
      nombre: '',
      ciudad: '',
      poder: '',
    });
  }

}

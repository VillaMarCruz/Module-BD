import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './components/agregar/agregar.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    PaginaPrincipalComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginaPrincipalComponent
  ],
})
export class DbzModule { }

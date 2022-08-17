import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginaPrincipalComponent } from './estudiante/components/pagina-principal/pagina-principal.component';
import { EstudianteListaComponent } from './estudiante/components/estudiante-lista/estudiante-lista.component';
import { EstudianteFormularioComponent } from './estudiante/components/estudiante-formulario/estudiante-formulario.component';
import { EstudianteDetalleComponent } from './estudiante/components/estudiante-detalle/estudiante-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    EstudianteListaComponent,
    EstudianteFormularioComponent,
    EstudianteDetalleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    PaginaPrincipalComponent
  ]
})
export class UniversidadModule { }

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from '../../interfaces/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante-lista',
  templateUrl: './estudiante-lista.component.html',
  styleUrls: ['./estudiante-lista.component.css']
})
export class EstudianteListaComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(
    private estudianteService: EstudianteService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(){
    this.estudianteService.lista().subscribe({
      next: (data)=>{this.estudiantes = data.body},
      error: (error) => {console.log(error)}
    });
  }

  borrar(id: string){
    this.estudianteService.delete(id).subscribe({
      next: data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEstudiantes();
      },
      error: (err)=>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    });
  }

}

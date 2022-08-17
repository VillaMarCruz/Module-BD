import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../interfaces/estudiante';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-estudiante-formulario',
  templateUrl: './estudiante-formulario.component.html',
  styleUrls: ['./estudiante-formulario.component.css']
})
export class EstudianteFormularioComponent implements OnInit {

  @Input()
  opcion: string[];
  estudianteForm: FormGroup;

  constructor(
    private estudianteService: EstudianteService,
    private readonly fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.estudianteForm = this.initForm();
    if (this.opcion[0] === 'actualizar') {
      this.estudianteService.detail(this.opcion[1]).subscribe({
        next: data => {
          this.estudianteForm.patchValue({
            cedula: data.body.cedula,
            apellidos: data.body.apellidos,
            nombres: data.body.nombres,
            semestre: data.body.semestre,
            carrera: data.body.carrera,
            facultad: data.body.facultad,
          });
        }
      });
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      cedula: new FormControl({ value: '', disabled: false }, [Validators.required]),
      apellidos: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      semestre: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      facultad: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let estudiante: Estudiante = this.estudianteForm.value;
    if (this.opcion[0] === 'insertar') {
      this.estudianteService.save(estudiante).subscribe({
        next: (data) => {
          this.toastr.success(data.message, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      });
    } else {
      this.estudianteService.update(this.opcion[1], estudiante).subscribe({
        next: (data) => {
          this.toastr.success(data.message, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      });
    }

  }
}

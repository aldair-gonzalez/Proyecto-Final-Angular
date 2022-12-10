import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso.model';
import { crearCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.scss']
})
export class AgregarCursoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private storeCurso: Store<Curso>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      f_inicio: new FormControl('', [Validators.required]),
      f_fin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  addCurso() {
    const curso: Curso = {
      id: '',
      curso: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      f_inicio: this.formulario.value.f_inicio,
      f_fin: this.formulario.value.f_fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      alumnos: [],
    }
    this.storeCurso.dispatch(crearCurso({curso}));
    alert('Curso añadido');
  }

}

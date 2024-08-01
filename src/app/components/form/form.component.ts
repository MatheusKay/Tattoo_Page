import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cel: ['', Validators.required],
      mensage: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Sucesso', this.form.value)
    }
  }
}

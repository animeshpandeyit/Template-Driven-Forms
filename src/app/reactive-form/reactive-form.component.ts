import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  submitForm(): void {
    // if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    // }
  }
}

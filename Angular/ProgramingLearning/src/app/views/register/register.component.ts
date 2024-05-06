import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { GlobalConstants } from '../../common/global-constants';
import {  EmailPassw,Register,User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public constructor(
    public service: ProgramingLearningService,
  ) {}
  alluse: EmailPassw[] = [];
  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
  });

  public onSubmit() {
    console.log('form: ', this.formRegister.getRawValue());
    console.log('form: ', this.formRegister.value.email);
    console.log('form: ', this.formRegister.value.password1);
    console.log('form: ', this.formRegister.value.password2);
  }

  public getAllUsers(): void {
    this.service.getAllUsers().subscribe((response) => {
      response.forEach((element) => {
        console.log(element);
        this.alluse.push(element);

      });
    });
  }
  public onclick() {
    console.log('HOLAAAAAAA');
    let emailExists = false;
    let formRegisterValue=this.formRegister.getRawValue();

    this.alluse.forEach((element) => {
      if (element.email === formRegisterValue.email) {
        emailExists = true;
      }
    });

    if (!emailExists) {
      if (
        formRegisterValue.password1 === formRegisterValue.password2
      ) {
        
        const newUser:Register = {
          email: formRegisterValue.email,
          password: formRegisterValue.password1,
        };
        console.log('se va a añadir el susuario');
        console.log(newUser);
        this.service.saveUpdate(newUser).subscribe(respose=>{
          console.log("++++++++++++++++++++++");
          console.log(respose);
        });
        window.location.href = 'http://localhost:4200/login';
      } else {
        console.log('Las contraseñas no coinciden');
      }
    } else {
      console.log('El correo electrónico ya está registrado');
    }

  }
  public ngOnInit(): void {
    this.getAllUsers();
  }
}

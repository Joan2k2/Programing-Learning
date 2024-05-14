import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormGroup, FormControl,  Validators } from '@angular/forms';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { GlobalConstants } from '../../common/global-constants';
import { EmailPassw, User } from '../../interfaces/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public constructor(public service:ProgramingLearningService,){}
  
  alluse:User[]=[];
  formLogin = new FormGroup({

    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",Validators.required),
  })

  public onSubmit(){

  }

  public getAllUsers():void{
    this.service.getAllUsers().subscribe((response)=>{

      response.forEach(element => {
        this.alluse.push(element);
       
        
      });
    })
  }

  public ngOnInit():void{

    this.getAllUsers();
  }
  public onclick(){
  

    this.alluse.forEach(element => {
      if(element.email===this.formLogin.value.email){
        if(element.password===this.formLogin.value.password){
 
          localStorage.setItem("logged","true");
          localStorage.setItem("idUser",element.id.toString());

        }
      }
      
    });
    
    window.location.href="http://localhost:4200/home";
  }

}

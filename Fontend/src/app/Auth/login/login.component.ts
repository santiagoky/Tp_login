import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup : FormGroup;
  error: string = '';
  constructor( private _fb : FormBuilder,
               private _router : Router,
               private _userServ : UserService) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formGroup = this._fb.group({
      email: ['', [Validators.required, Validators.minLength(5),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSumit(){
    if(this.formGroup.invalid){ 
      return;
     }
   
    this._userServ.login(this.formGroup.value).subscribe( data =>{          
     this._router.navigateByUrl('/home');
    },
    (err) => {
      this.error= err;
    })
  }

}

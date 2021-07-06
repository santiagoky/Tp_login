import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  formGroup : FormGroup;
  role : boolean;
  roleValue: string = 'Usuario';



  constructor(private _fb : FormBuilder,
              private _router : Router,
              private _userServ : UserService) { }

  ngOnInit(): void {
    this.crearForm();
    this.role= false;
  }

  crearForm(){
    this.formGroup = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role : this.roleValue      
    })
  }

  onSumit(){
    if(this.formGroup.invalid){return;}
    
    console.log(this.formGroup.value);

    this._userServ.register(this.formGroup.value).subscribe( data =>{
      
      if(data.dataUser.role === 'Administrador'){
        this._router.navigateByUrl('/admin/home');
      }else {
        this._router.navigateByUrl('/user/home');
      }
      
    }),(err)=> {console.log(err)}
  }

  roleChange(){
    this.role = !this.role
    if(this.role){
      this.roleValue = 'Administrador';
      this.formGroup.get('role').setValue(this.roleValue);
    }else{
      this.roleValue = 'Usuario'
      this.formGroup.get('role').setValue(this.roleValue);
    }
  }


}

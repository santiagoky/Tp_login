import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
   
  isAdmin = false;


  constructor(public _userServ : UserService) {
   
    this.rolVerify();
    
  }

  ngOnInit(): void {
    this.rolVerify();
  }
  
  logOut(){
    this._userServ.logout();
  }

  rolVerify(){
    
    if(localStorage.getItem('AUTH_ROL') === 'Administrador'){
      this.isAdmin = true;
    }
  }
}

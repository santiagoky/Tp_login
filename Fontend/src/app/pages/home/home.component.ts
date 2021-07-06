import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { IJwtResponse } from '../../Models/IJwtResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: IJwtResponse;

  constructor(private _userServ: UserService) {
    this._userServ.leerRol();
    
  }

  ngOnInit(): void {
    this.data();
  }

  data() {
    debugger;
    if (this._userServ.userData === undefined) {
      return this.userData;
      console.log(this.userData);
    }else{
      this.userData = this._userServ.userData;
      console.log(this.userData);
    }
  }
}

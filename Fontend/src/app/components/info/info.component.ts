import { Component, Input, OnInit } from '@angular/core';
import { IJwtResponse } from 'src/app/Models/IJwtResponse';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  @Input() userData:IJwtResponse;

  constructor() { }

  ngOnInit(): void {
  }

}

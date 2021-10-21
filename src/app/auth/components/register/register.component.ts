import { Component, OnInit } from '@angular/core';
import { Propiedades } from 'src/app/shared/util/propiedades';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  propiedades: Propiedades = new Propiedades();

  constructor() { }

  ngOnInit(): void {
  }




}

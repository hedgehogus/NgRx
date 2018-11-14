import { Component,Input, OnInit } from '@angular/core';
import { Car } from '../car.model'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car

  constructor() { }

  

}

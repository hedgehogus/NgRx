import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Car } from '../car.model'

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  private id: number = 2;

  carName: string = '';
  carModel: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    if (this.carModel === '' || this.carModel === '') return;
    this.id = ++this.id;

    const car = new Car(
      this.carName,
      this.carModel,
      moment().format('DD.MM.YY'),
      false,
      this.id
    )

  }

  onLoad(){

  }

}

//npm install --save moment
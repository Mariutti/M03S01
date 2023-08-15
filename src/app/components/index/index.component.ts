import { Component } from '@angular/core';
import { ICars } from 'src/app/interfaces/icars.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  carros?: ICars[];

  constructor(private carService: CarService) { }

  async ngOnInit() {
    this.carros = await this.carService.obterCarros();
    console.log(this.carros);
  }

}

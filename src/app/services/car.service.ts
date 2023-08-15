import { Injectable } from '@angular/core';
import { ICars } from '../interfaces/icars.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carros: ICars[] = [];

  constructor(private httpClient: HttpClient) { }

  async obterCarros() {
    this.carros = await lastValueFrom(this.httpClient.get<ICars[]>("http://localhost:3000/cars"));
    return this.carros;
  }
}

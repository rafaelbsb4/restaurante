import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Pratos } from '../model/pratos';



@Injectable()
export class PratosService {
  private api: string;
  constructor(private http: HttpClient, private httpService: HttpService) {
    this.api = httpService.getApi() + '/Pratos/'

  }
  getAll() {
    return this.http.get(this.api);
  }

  get(idPrato: number) {
    return this.http.get(this.api + idPrato);
  }


  create(Pratos: Pratos) {
    const headers = this.httpService.getHeaders();
    return this.http.post(this.api, Pratos, headers);
  }

  update(idPrato: number, prato: Pratos) {
    if (idPrato && idPrato > 0) {
      prato.idPrato = idPrato;
      const headers = this.httpService.getHeaders();
      return this.http.put(this.api + idPrato, prato, headers);
    }
  }

  delete(idPrato: number) {
    return this.http.delete(this.api + idPrato)
  }

}
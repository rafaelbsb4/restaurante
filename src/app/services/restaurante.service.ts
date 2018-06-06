import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Restaurante } from '../model/restaurante';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RestauranteService {
    private api: string;
    constructor(private http: HttpClient, private httpService: HttpService) {
        this.api = httpService.getApi() + '/restaurante/'
    }

    getAll() {
        return this.http.get(this.api);
    }

    get(idRestaurante: number) {
        return this.http.get(this.api + idRestaurante);
    }

    create(restaurante: Restaurante) {
        const headers = this.httpService.getHeaders();
        return this.http.post(this.api, restaurante, headers);
    }

    update(idRestaurante: number, restaurante: Restaurante) {
        if (idRestaurante && idRestaurante > 0) {
            restaurante.idRestaurante = idRestaurante;
            const headers = this.httpService.getHeaders();
            return this.http.put(this.api + idRestaurante, restaurante, headers);
        }
    }

    delete(idRestaurante: number) {
        return this.http.delete(this.api + idRestaurante)
    }
}


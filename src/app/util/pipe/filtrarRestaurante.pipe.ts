import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filtrarRestaurante'
})
export class FiltrarRestaurante implements PipeTransform {

    transform(restaurantes: any[], filtro: any): any {
        if (restaurantes && restaurantes.length > 0) {
            return restaurantes.filter(item => {
                for (let key in item) {
                    if (key === "nomeRestaurante") {
                        if (("" + item[key].toLowerCase()).includes(filtro.toLowerCase())) {
                            return true;
                        }
                    } else {
                        if (("" + item[key]).includes(filtro)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
    }
}
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filtrarPratos'
})
export class FiltrarPratos implements PipeTransform {

    transform(pratos: any[], filtro: any): any {
        if (pratos && pratos.length > 0) {
            return pratos.filter(item => {
                for (let key in item) {
                    if (key === "nomeprato") {
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
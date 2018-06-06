import { PipeTransform, Pipe } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { NumberUtil } from "../NumberUtil";

@Pipe({
    name: 'formatarValor'
})
export class FormatarValorPipe implements PipeTransform {

    transform(valor: any): any {
        valor = NumberUtil.convertToFormattedNumber(valor, 2, true);
        return valor;
    }

}
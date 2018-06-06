export class NumberUtil {

    public static converteReal(n, tickSize, showCurrency = false) {
        const numero = n.toFixed(tickSize).split('.');
        const currencySymbol = showCurrency ? 'R$ ' : '';
        numero[0] = currencySymbol + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

}
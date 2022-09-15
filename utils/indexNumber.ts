export function prefixZeroBeforeNumber(number: number): string {
    return number < 10 ? "0" + number.toString() : number.toString();
}

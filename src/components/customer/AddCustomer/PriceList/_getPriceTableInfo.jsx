import { PriceTableColumns, PriceTableRows } from './data';

export async function _getPriceTableInfo () {
    return new Promise((resolve, reject) => {
        if (!PriceTableRows || !PriceTableColumns) reject(new Error('lol'));
        else resolve({ rows: PriceTableRows, cols: PriceTableColumns });
    });
}

import { PriceListTableColumns, PriceListTableRows } from './data.js';

export async function _getPriceListTableInfo () {
    return new Promise((resolve, reject) => {
        if (!PriceListTableRows || !PriceListTableColumns) reject(new Error('lol'));
        else resolve({ rows: PriceListTableRows, cols: PriceListTableColumns });
    });
}

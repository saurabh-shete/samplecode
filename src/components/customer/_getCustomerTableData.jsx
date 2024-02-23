import { CustomerTableColumns, CustomerTableRows } from './data.js';

export async function _getCustomerTableData () {
    return new Promise((resolve, reject) => {
        if (!CustomerTableRows || !CustomerTableColumns) reject(new Error('lol'));
        else resolve({ rows: CustomerTableRows, cols: CustomerTableColumns });
    });
}

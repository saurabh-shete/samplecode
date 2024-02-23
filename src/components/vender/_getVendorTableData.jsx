import { VendorTableColumns, VendorTableRows } from './data.js';

export async function _getVendorTableData () {
    return new Promise((resolve, reject) => {
        if (!VendorTableRows || !VendorTableColumns) reject(new Error('lol'));
        else resolve({ rows: VendorTableRows, cols: VendorTableColumns });
    });
}

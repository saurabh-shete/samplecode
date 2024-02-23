import { AddressTableColumns, AddressTableRows } from './data.js';

export async function _getAddressTableInfo () {
    return new Promise((resolve, reject) => {
        if (!AddressTableRows || !AddressTableColumns) reject(new Error('lol'));
        else resolve({ rows: AddressTableRows, cols: AddressTableColumns });
    });
}

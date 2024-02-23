import { BankAccountTableColumns, BankAccountTableRows } from './data.js';

export async function _getBankAccountTableInfo () {
    return new Promise((resolve, reject) => {
        if (!BankAccountTableRows || !BankAccountTableColumns) reject(new Error('lol'));
        else resolve({ rows: BankAccountTableRows, cols: BankAccountTableColumns });
    });
}

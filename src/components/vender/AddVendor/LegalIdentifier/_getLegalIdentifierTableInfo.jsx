import { LegalIdentifierTableColumns, LegalIdentifierTableRows } from './data.js';

export async function _getLegalIdentifierTableInfo () {
    return new Promise((resolve, reject) => {
        if (!LegalIdentifierTableRows || !LegalIdentifierTableColumns) reject(new Error('lol'));
        else resolve({ rows: LegalIdentifierTableRows, cols: LegalIdentifierTableColumns });
    });
}

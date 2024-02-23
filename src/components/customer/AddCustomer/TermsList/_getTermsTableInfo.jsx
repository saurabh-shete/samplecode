import { TermsListTableColumns, TermsListTableRows } from './data.js';

export async function _getTermsTableInfo () {
    return new Promise((resolve, reject) => {
        if (!TermsListTableRows || !TermsListTableColumns) reject(new Error('lol'));
        else resolve({ rows: TermsListTableRows, cols: TermsListTableColumns });
    });
}

import { PartnerTableColumns, PartnerTableRows } from './data.js';

export async function _getPartnerTableData () {
    return new Promise((resolve, reject) => {
        if (!PartnerTableRows || !PartnerTableColumns) reject(new Error('lol'));
        else resolve({ rows: PartnerTableRows, cols: PartnerTableColumns });
    });
}

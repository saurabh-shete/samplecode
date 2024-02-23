import { GroupTableColumns, GroupTableRows } from './data.js';

export async function _getGroupTableInfo () {
    return new Promise((resolve, reject) => {
        if (!GroupTableRows || !GroupTableColumns) reject(new Error('lol'));
        else resolve({ rows: GroupTableRows, cols: GroupTableColumns });
    });
}

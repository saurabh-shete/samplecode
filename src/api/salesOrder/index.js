import {salesOrderTableColumns, salesOrderTableRows} from "./data.js";

export async function _getSalesOrderTableInfo() {
	return new Promise((resolve, reject) => {
		if (!salesOrderTableRows || !salesOrderTableColumns) reject(new Error("lol"));
		else resolve({rows: salesOrderTableRows, cols: salesOrderTableColumns})
	})
}

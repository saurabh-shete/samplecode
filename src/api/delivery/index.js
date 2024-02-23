import {
	deliveryProductList,
	deliveryTableColumns,
	deliveryTableRows, vendorBillProductList,
	vendorBillTableColumns,
	vendorBillTableRows,
} from './data.js';

export async function _getDeliveryTableInfo() {
	return new Promise((resolve, reject) => {
		if (!deliveryTableRows || !deliveryTableColumns) reject(new Error("lol"));
		else resolve({rows: deliveryTableRows, cols: deliveryTableColumns});
	})
}

export async function _getDeliveryProducts() {
	return new Promise((resolve, reject) => {
		if (!deliveryProductList) reject(new Error("lol"));
		else resolve(deliveryProductList);
	})
}

export async function _getVendorBillTableInfo() {
	return new Promise((resolve, reject) => {
		if (!vendorBillTableRows || !vendorBillTableColumns) reject(new Error("lol"));
		else resolve({rows: vendorBillTableRows, cols: vendorBillTableColumns});
	})
}

export async function _getVendorBillProducts() {
	return new Promise((resolve, reject) => {
		if (!vendorBillProductList) reject(new Error("lol"));
		else resolve(vendorBillProductList);
	})
}

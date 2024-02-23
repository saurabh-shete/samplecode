import {
  createInvoicePackingDetails,
  createInvoiceStandardTerms,
  createInvoiceTableCols,
  createInvoiceTableRows,
  invoiceTableCols,
  invoiceTableRows
} from "./data.js";

export async function _getInvoiceTableInfo() {
  return new Promise((resolve, reject) => {
    if (!invoiceTableRows || !invoiceTableCols) {
      reject(new Error("An error occurred while fetching invoice data."));
    } else {
      resolve({cols: invoiceTableCols, rows: invoiceTableRows});
    }
  });
}

export async function _createInvoiceTableInfo() {
  return new Promise((resolve, reject) => {
    if (!createInvoiceTableCols || !createInvoiceTableRows) reject(new Error("Error"));
    else resolve({cols: createInvoiceTableCols, rows: createInvoiceTableRows});
  })
}

export async function _getStandardTerms() {
  return new Promise((resolve, reject) => {
    if (!createInvoiceStandardTerms) reject(new Error("lol"));
    else resolve(createInvoiceStandardTerms);
  })
}

export async function _getPackingDetails() {
  return new Promise((resolve, reject) => {
    if (!createInvoicePackingDetails) reject(new Error("lol"));
    else resolve(createInvoicePackingDetails);
  })
}

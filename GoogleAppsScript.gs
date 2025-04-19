// Configuration
const ACCESS_TOKEN = 'pankajsethi2388';
const SHEET_NAME = 'Products';

// Web app configuration
function doGet(e) {
  return handleRequest(e, 'GET');
}

function doPost(e) {
  return handleRequest(e, 'POST');
}

function handleRequest(e, method) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Verify access token
  const token = e.parameter.token;
  if (token !== ACCESS_TOKEN) {
    return jsonResponse_({ error: 'Unauthorized' }, 401, headers);
  }

  try {
    const action = e.parameter.action;
    
    // Handle both GET and POST actions through parameters
    if (action === 'getProducts') {
      return handleGetProducts(e, headers);
    } else if (action === 'addProduct') {
      return handleAddProduct(e, headers);
    } else if (action === 'updateProduct') {
      return handleUpdateProduct(e, headers);
    } else if (action === 'deleteProduct') {
      return handleDeleteProduct(e, headers);
    } else {
      return jsonResponse_({ error: 'Invalid action' }, 400, headers);
    }
  } catch (error) {
    return jsonResponse_({ error: error.toString() }, 500, headers);
  }
}

function handleGetProducts(e, headers) {
  const category = e.parameter.category;
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const [headers_, ...data] = sheet.getDataRange().getValues();
  
  // Find the index of the ID column
  const idColumnIndex = headers_.findIndex(header => header.trim().toLowerCase() === 'id');
  
  let products = data.map((row, index) => {
    let product = {};
    headers_.forEach((header, colIndex) => {
      const headerName = header.trim();
      if (headerName.toLowerCase() === 'id') {
        // If ID is empty, use row number + 1
        product[headerName] = row[colIndex] || (index + 1);
      } else if (headerName === 'customizationOptions' && row[colIndex]) {
        product[headerName] = row[colIndex].split(';');
      } else {
        product[headerName] = row[colIndex];
      }
    });
    return product;
  });
  
  if (category) {
    products = products.filter(p => p.category === category);
  }
  
  return jsonResponse_({ products }, 200, headers);
}

function handleAddProduct(e, headers) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const [headers_, ...data] = sheet.getDataRange().getValues();
  
  // Get product data from parameters
  const product = {
    name: e.parameter.name,
    description: e.parameter.description,
    category: e.parameter.category,
    price: parseFloat(e.parameter.price),
    imageUrl: e.parameter.imageUrl,
    minQuantity: parseInt(e.parameter.minQuantity),
    customizationOptions: e.parameter.customizationOptions ? e.parameter.customizationOptions.split(';') : []
  };
  
  // Validate required fields
  if (!product.name || !product.category || !product.price) {
    return jsonResponse_({ error: 'Missing required fields' }, 400, headers);
  }
  
  // Generate new ID (row number + 1)
  const newId = data.length + 1;
  
  // Prepare new row
  const newRow = headers_.map(header => {
    const headerName = header.trim();
    if (headerName.toLowerCase() === 'id') return newId;
    if (headerName === 'customizationOptions' && product[headerName]) {
      return product[headerName].join(';');
    }
    return product[headerName] || '';
  });
  
  // Add new row
  sheet.appendRow(newRow);
  return jsonResponse_({ success: true, id: newId }, 200, headers);
}

function handleUpdateProduct(e, headers) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const [headers_, ...data] = sheet.getDataRange().getValues();
  
  const id = parseInt(e.parameter.id);
  if (!id) {
    return jsonResponse_({ error: 'Missing product ID' }, 400, headers);
  }
  
  // Find the index of the ID column
  const idColumnIndex = headers_.findIndex(header => header.trim().toLowerCase() === 'id');
  const rowIndex = data.findIndex(row => parseInt(row[idColumnIndex]) === id);
  
  if (rowIndex === -1) {
    return jsonResponse_({ error: 'Product not found' }, 404, headers);
  }
  
  // Update row with new values from parameters
  const updatedRow = headers_.map((header, colIndex) => {
    const headerName = header.trim();
    if (headerName.toLowerCase() === 'id') return id;
    if (e.parameter[headerName]) {
      if (headerName === 'customizationOptions') {
        return e.parameter[headerName].split(';').join(';');
      }
      if (headerName === 'price' || headerName === 'minQuantity') {
        return parseFloat(e.parameter[headerName]);
      }
      return e.parameter[headerName];
    }
    return data[rowIndex][colIndex];
  });
  
  sheet.getRange(rowIndex + 2, 1, 1, headers_.length).setValues([updatedRow]);
  return jsonResponse_({ success: true }, 200, headers);
}

function handleDeleteProduct(e, headers) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const [headers_, ...data] = sheet.getDataRange().getValues();
  
  const id = parseInt(e.parameter.id);
  if (!id) {
    return jsonResponse_({ error: 'Missing product ID' }, 400, headers);
  }
  
  // Find the index of the ID column
  const idColumnIndex = headers_.findIndex(header => header.trim().toLowerCase() === 'id');
  const deleteRowIndex = data.findIndex(row => parseInt(row[idColumnIndex]) === id);
  
  if (deleteRowIndex === -1) {
    return jsonResponse_({ error: 'Product not found' }, 404, headers);
  }
  
  sheet.deleteRow(deleteRowIndex + 2);
  return jsonResponse_({ success: true }, 200, headers);
}

function jsonResponse_(data, statusCode, headers) {
  const response = {
    status: statusCode,
    data: data,
    timestamp: new Date().toISOString()
  };
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
} 
function addItem(){
    var customerName=document.getElementById('customerName').value;
    var addresss=document.getElementById('address').value;
    var itemDescription=document.getElementById('itemDescription').value; 
    var quantity=document.getElementById('quantity').value; 
    var pricePerUnit=document.getElementById('pricePerUnit').value; 
    var taxRate=document.getElementById('taxRate').value; 
    var total=pricePerUnit*quantity;

    var table = document.getElementById('invoicetable');
    var row=table.insertRows(-1);
    var customerNameCell = row.insertCell(0);
    var addressCell=row.insertCell(1);
    var itemDescriptionCell=row.insertCell(2);
    var quantityCell=row.insertCell(3);
    var pricePerUnitCell=row.insertCell(4);
    var taxRateCell=row.insertCell(5);
    
    customerNameCell.innerHTML=customerName;
    addressCell.innerHTML=addresss;
    itemDescriptionCell.innerHTML=itemDescription;
    quantityCell.innerHTML=quantity;
    pricePerUnitCell.innerHTML=pricePerUnit;
    taxRateCell.innerHTML=taxRate;
    
    var customerName=document.getElementById('customerName').value="";
    var addresss=document.getElementById('address').value="";
    var itemDescription=document.getElementById('itemDescription').value=""; 
    var quantity=document.getElementById('quantity').value=""; 
    var pricePerUnit=document.getElementById('pricePerUnit').value=""; 
    var taxRate=document.getElementById('taxRate').value=""; 
    
    updateTotalAmount();
}
function deleteItem(row) {
    var table=document.getElementById('invoicetable');
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex);
    updateTotalAmount();
}  
function updateTotalAmount(){
    var table= document.getElementById('invoicetable');
    var rowcount = table.row.length;
    var totalAmount = 0;

    for(var i=1;i<rowcount;i++){
        var row  = table.row[i];
        var tableCell = row.cells[3];
        totalAmount +=  parseFloat(totalCell.innerHTML);
    }
    document.getElementById("totalAmount").innerHTML = totalAmount;


}

  
  
  
  //---------------Current----------------//
  function calculate()
{
    
    var Vvalue = parseFloat(document.getElementById("V").value);


    var Vline =  Vvalue; 

    var Vphase = Vline / 1.732;

    var cal = Vline / Vphase;

    // take Zphase = 8+10j = 12.81 angle 53.34 ohm
    // so take only scalar value as 12.81

    var current =  Vphase / 12.81;

    document.getElementById("VL").value = parseFloat(Vline);
    document.getElementById("VP").value = parseFloat(Vphase).toFixed(3);
    document.getElementById("Vlp").value = parseFloat(cal).toFixed(3);
    document.getElementById("A").value = parseFloat(current).toFixed(2);
    
    

    

}



//-----------------Add Table--------------------//


function addHTMLTableRow()
{
    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),

        V = document.getElementById("V").value,
        A = document.getElementById("A").value,
        VL = document.getElementById("VL").value,
        VP = document.getElementById("VP").value,
        Vlp = document.getElementById("Vlp").value;
      
   
    cell1.innerHTML = V;
    cell2.innerHTML = A;
    cell3.innerHTML = VL;
    cell4.innerHTML =  VP;
    cell5.innerHTML = Vlp;

}


  
  
//-------------------------Clear-------------------------//  

function clearRow(){
   location.reload()
    // var tableHeaderRowCount = 1;
    // var table = document.getElementById("table");
    // var rowCount = table.rows.length;
    // for (var i = tableHeaderRowCount; i < rowCount; i++) {
    // table.deleteRow(tableHeaderRowCount);
    // volt.pop();
    // current.pop();
    // }

}
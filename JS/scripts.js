
"use strict";

function switch_elems(i, j) {

    
    const table = document.querySelector("table");
    
    const val1 = table.rows[i].cells[j].innerHTML;
    
    let k = j + 1;
    
    let numRows = table.rows.length; 
    
    if (k > table.rows[i].cells.length-1) {
    
    k = 0;
    }
    
    const val2 = table.rows[i].cells[k].innerHTML;
    
    table.rows[i].cells[j].innerHTML = val2.toString();
    
    table.rows[i].cells[k].innerHTML = val1.toString();

    if(i==2 && val2[0]==8){
      window.confirm("Solved!");
      
    }else{
      
    }


  }


function sortTable() {
        //get the parent table for convenience
        let table = document.getElementById("table");
      
        //1. get all rows
        let rowsCollection = table.querySelectorAll("tr");
      
        //2. convert to array
        let rows = Array.from(rowsCollection)
          .slice(1); //skip the header row
      
        //3. shuffle
        shuffleArray(rows);
      
        //4. add back to the DOM
        for (const row of rows) {
          table.appendChild(row);
        }
      }
      
      
      
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

window.onload = function () {
   
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
      
        cell.addEventListener('click', () =>
            switch_elems(cell.closest('tr').rowIndex, cell.cellIndex));
            
});


}


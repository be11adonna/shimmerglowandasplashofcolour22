import {parse} from './node-csv/index.js';
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      parse(httpRequest.responseText, {columns:true}, (err, data) => {
        console.info(data)
        if (err) {
          console.error (err);
        }
      });
    }
  }

}
httpRequest.open ('GET', 'https://be11adonna.github.io/shimmerglowandasplashofcolour22/Recipes/Recipes-sparkle-22.csv', true);
httpRequest.send();

export function myFunction(column) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput"+column);
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[column];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
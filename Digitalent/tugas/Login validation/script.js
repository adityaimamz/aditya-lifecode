var grndTotal = 0;
var total1 = 0;
var total2 = 0;

window.totalIt= function(name) {
        if(name == "minuman"){

            var input = document.getElementsByName("minuman");
            var total = 0;
            for (var i = 0; i < input.length; i++) {
              if (input[i].checked) {
                total += parseFloat(input[i].value);
              }
            }
            
            total2 =  total.toFixed(2);
            }
            grndTotal = parseInt(total2) + parseInt(total1);
            document.getElementById("total").value = "Rp"+grndTotal ;
          }
        
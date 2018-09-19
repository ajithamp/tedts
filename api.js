// (function(jquery,undefined){
//     function callin(){  
//         console.log("123");
//         alert("hai");
//     }
// })

alert("thanks123");

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
      // Typical action to be performed when the document is ready:
      //    document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://demo8830156.mockable.io/getsample", true);
  xhttp.send();

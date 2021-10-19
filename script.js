var clearScreen=()=>result.value="";
var display=(value)=>result.value+=value;
   
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

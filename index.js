function selectTip(x,id){
    var tip = x;
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    console.log(tip, bill, people);

    var totaltipAmount = (tip*100)/bill;
    var total = (bill/people)+totaltipAmount;

    totaltipAmount=totaltipAmount.toFixed(2);
    total=total.toFixed(2);


    if(bill != "" && people != "" && people !=0){
        document.getElementById("tipAmount").innerHTML = "$" + totaltipAmount;
        document.getElementById("total").innerHTML = "$" + total;
    }
}

window.addEventListener('load', function(){
    var customTip = document.getElementById("customtip").value;

    if(customTip != 0){
        selectTip(customTip,"customtip");
    }
   
});

function reset(){
    document.getElementById("tipAmount").innerHTML = "$" + "0.00";
    document.getElementById("total").innerHTML = "$" + "0.00";
    document.getElementById('bill').value = 0.00;
    document.getElementById('people').value = 0.00;
    document.getElementById('customtip').value = "Custom";

}
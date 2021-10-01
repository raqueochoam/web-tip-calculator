function selectTip(x,id){
    var tip = x;
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    console.log(tip, bill, people);

    document.getElementById("customtip").value = "";

    var totaltipAmount = (tip*100)/bill;
    var total = (bill/people)+totaltipAmount;

    totaltipAmount=totaltipAmount.toFixed(2);
    total=total.toFixed(2);


    if(bill != "" && people != "" && people !=0){
        document.getElementById("tipAmount").innerHTML = "$" + totaltipAmount;
        document.getElementById("total").innerHTML = "$" + total;
    }

}



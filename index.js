function CalculateTip(event){
    event.preventDefault();
    const billAmount=parseFloat(document.getElementById("BillAmount").value);
    const percentageTip=parseFloat(document.getElementById("PercentageTip").value);
    const error=document.getElementById("errorMessage");
    const totalTip=document.getElementById("TotalTip");
    const tottalAmount=document.getElementById("TotalAmount");



if(isNaN(billAmount) || isNaN(percentageTip) || billAmount<0 || percentageTip<0) {

    error.textContent="Plesae enter valid number for Billing Amount and Tip Percentage.";
    totalTip.value="";
    tottalAmount.value="";
    return;
}


const tip=(billAmount*percentageTip)/100;
const taotal=billAmount+tip;

totalTip.value=tip;
tottalAmount.value=taotal;
errorMessage.textContent="";
}
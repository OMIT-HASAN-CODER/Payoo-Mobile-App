document.getElementById("addmoney-btn").addEventListener("click", function(event){
    event.preventDefault();
    const amount = document.getElementById("addmoney-amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("addmoney-pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount > 0 && pin){
        if(convertedPin === 1234){
            const newBalance = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = newBalance;
            alert("Money added successfull");
        }
        else{
            alert("Pin is invalid");
        }
    }
    else{
        alert("Amount is invalid");
    }
})
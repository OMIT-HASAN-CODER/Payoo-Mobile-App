document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount > 0 && pin){
        if(convertedPin === 1234){
            const newBalance = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = newBalance;
            alert("Money added successfully");
        }
        else{
            alert("Pin is invalid");
        }
    }
    else{
        alert("Amount is invalid");
    }
})
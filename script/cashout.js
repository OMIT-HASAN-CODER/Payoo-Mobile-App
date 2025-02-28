// document.getElementById("cashout-btn").addEventListener("click", function(event){
//     event.preventDefault();
//     const amount = document.getElementById("cashout-amount").value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById("cashout-pin").value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);
//     if(amount > 0 && pin){
//         if(convertedPin === 1234){
//             const newBalance = convertedMainBalance - convertedAmount;
//             document.getElementById("main-balance").innerText = newBalance;
//             alert("Cashout successfull");
//         }
//         else{
//             alert("Pin is invalid");
//         }
//     }
//     else{
//         alert("Amount is invalid");
//     }
// })

document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("cashout-amount");
    const pin = getInputValueById("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");
    if(accountNumber.length === 11){
        if(amount > 0 && pin){
            if(pin === 1234){
                const newBalance = mainBalance - amount;
                setInnerTextByIdandValue("main-balance", newBalance);
                alert("Cashout successfull");
            }
            else{
                alert("Pin is invalid");
            }
        }
        else{
            alert("Amount is invalid");
        }
    }
    else{
        alert("Account number is invalid");
    }
})
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
    if(amount > mainBalance){
        alert("Insufficient balance");
        return;
    }
    if(accountNumber.length === 11){
        if(amount > 0 && pin){
            if(pin === 1234){
                const newBalance = mainBalance - amount;
                setInnerTextByIdandValue("main-balance", newBalance);
                alert("Cashout successfull");
                const container = document.getElementById("transaction-container");
                const div = document.createElement("div");
                div.innerHTML = `
                <h1>Cashout</h1>
                <h3>amount: ${amount}</h3>
                <p>from account number ${accountNumber}</p>
                <p>on ${new Date()}</p>
                <p>transaction id: ${Math.floor(Math.random() * 1000000000)}</p>
                `;
                container.appendChild(div);
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
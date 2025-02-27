// document.getElementById("addmoney-btn").addEventListener("click", function(event){
//     event.preventDefault();
//     const amount = document.getElementById("addmoney-amount").value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById("addmoney-pin").value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);
//     if(amount > 0 && pin){
//         if(convertedPin === 1234){
//             const newBalance = convertedMainBalance + convertedAmount;
//             document.getElementById("main-balance").innerText = newBalance;
//             alert("Money added successfull");
//         }
//         else{
//             alert("Pin is invalid");
//         }
//     }
//     else{
//         alert("Amount is invalid");
//     }
// })

document.getElementById("addmoney-btn").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueById("addmoney-amount");
    const pin = getInputValueById("addmoney-pin");
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank = document.getElementById("all-bank").value;
    if(accountNumber.length === 11){
        if(amount > 0 && pin){
            if(pin === 1234){
                const newBalance = mainBalance + amount;
                setInnerTextByIdandValue("main-balance", newBalance);
                alert("Money added successfull");
                const container = document.getElementById("transaction-container");
                const div = document.createElement("div");
                div.innerHTML = `
                <h1>Added Money</h1>
                <h3>amount: ${amount}</h3>
                <p>to account number ${accountNumber}</p>
                <p>from ${selectedBank}</p>
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
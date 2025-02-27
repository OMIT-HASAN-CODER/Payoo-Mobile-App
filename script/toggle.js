document.getElementById("cashout").style.display = "none";
document.getElementById("add-money-btn").addEventListener("click", function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("add-money").style.display = "block";
})
document.getElementById("cashout-btn").addEventListener("click", function(){
    document.getElementById("cashout").style.display = "block";
    document.getElementById("add-money").style.display = "none";
})
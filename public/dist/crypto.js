let balance = 0;
function buyCrypto(amount) {
    balance += amount;
    document.getElementById("balance").textContent = balance;
    profitOrNot()
};

function sellCrypto(amount) {
    balance -= amount;
    document.getElementById("balance").textContent = balance;
    profitOrNot()
};

function profitOrNot() {
    bal = document.getElementById("baldiv");
if (balance > 0) {
    bal.classList.remove("text-black", "text-red-400");
    bal.classList.add("text-green-400");
    }
else if (balance < 0) {
    bal.classList.remove("text-black", "text-green-400");
    bal.classList.add("text-red-400");
    }
else if (balance = 0) {
    bal.classList.remove("text-green-400", "text-red-400")
    bal.classList.add("text-black");
}
}


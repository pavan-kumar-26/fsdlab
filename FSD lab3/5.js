const Name = document.getElementById('name');
const pass = document.getElementById('pass');
const amt = document.getElementById('amount');
const submit = document.getElementById('submit'); 
const NAME = "abc";
const PASS = "abc";
const AMT = 100;
const verifyDetails = (name, pass, amt, callback) => {
        setTimeout(() => {
            if (NAME !== name || PASS !== pass || amt > AMT) {
                console.log("Name and password are incorrect or amount exceeds limit");
            } else {
                callback(amt);
            }
        }, 5000);
    };

    function payment(amt) {
        setTimeout(() => {
            console.log("Payment is Done");
            console.log("Amount in the account is");
            console.log(AMT - amt);
        }, 5000);
    }

    submit.addEventListener("click", (e) => {
            e.preventDefault()
        const name = Name.value;
        const passValue = pass.value;
        const amtValue = parseInt(amt.value, 10);
        verifyDetails(name, passValue, amtValue, payment);
    });


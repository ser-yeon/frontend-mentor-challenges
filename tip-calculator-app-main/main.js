const tipRadio = document.querySelectorAll('input[type="radio"]');
const customTip = document.getElementById("custom-tip");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const bill = document.getElementById("bill");
const people = document.getElementById("number-of-people");


let tipSelected = false;
let tipValue = 0;
tipRadio.forEach((tip) => {
    tip.addEventListener("click", () => {
        customTip.value = "";
        resetTipSelectedStyle();
        if (tip.checked) {
            tip.parentElement.classList.add("tip-checked");
            tipSelected = true;
            tipValue = parseInt(tip.value.replace('%', ''));

        }
    
    })
    
})

customTip.addEventListener("input", () => {
    resetTipSelectedStyle();
    resetSelectTip();

    if (!isNaN(parseInt(customTip.value))) {
        tipSelected = true;
        tipValue = parseInt(customTip.value);
        console.log(customTip.value)
        console.log(tipValue);
    }
})

form.addEventListener("input", () => {
    people.value = people.value.replace(/\D/g, '');
    if (people.value === "0") {
        const peopleError = document.querySelector(".error");
        if (!peopleError) {
            const peopleError = document.createElement("p");
            peopleError.append("Can't be zero");
            peopleError.classList.add("error");
            people.classList.add("error-outline");
            people.parentElement.parentElement.appendChild(peopleError);
        }
        
    } else {
        const peopleError = document.querySelector(".error");
        if (peopleError) {
            peopleError.remove();
        }
        people.classList.remove("error-outline");
        if (bill.value !== "" && tipSelected === true && people.value !== "") {
            const billValue = parseFloat(bill.value);
            const peopleValue = parseInt(people.value);
            const calculatedTipAmount = billValue*tipValue/100/peopleValue;
            const claculatedTotal = billValue/peopleValue + calculatedTipAmount;

            tipAmount.textContent = calculatedTipAmount.toFixed(2);
            total.textContent = claculatedTotal.toFixed(2);

            btn.classList.add("button-enable");    
        } else {
            btn.classList.remove("button-enable");
        }
    }
})

btn.addEventListener("click", () => {
    if (btn.className === "button-enable") {
        resetTipSelectedStyle();
        resetSelectTip();

        btn.classList.remove("button-enable");
        
        bill.value = "";
        people.value = "";
        customTip.value = "";
        tipAmount.textContent = "0.00";
        total.textContent = "0.00";
    
    }
    
})

function resetTipSelectedStyle() {
    tipRadio.forEach((tip) => {
        tip.parentElement.classList.remove("tip-checked");
    })
}

function resetSelectTip() {
    tipRadio.forEach((radio) => {
        radio.checked = false;
        tipSelected = false;
    })
}
// Kalkulator za inflaciju
function inflationCalculator() {
    //Dohvacanje inputa iz html-a
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    // parseFloat sluzi za pretvaranje stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years);
    
    // Formula za izracunavanje inflacije.
    let worth = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    // Zaokruzuje broj na dvije decimale
    worth = worth.toFixed(2);

    // Dodavanje novog div elementa
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`;

    document.querySelector('.container').appendChild(newElement);
   
}

// Brisanje unetih podataka i izracuna.
function resetButton() {
    document.getElementById("form").reset();
    let remove = document.querySelector('.new-value');
    remove.remove();
   
}

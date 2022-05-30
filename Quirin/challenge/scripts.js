let atm = {
    availableNotes: {
        '10': 5,
        '20': 10,
        '50': 20,
        '100': 13
    },
    showBalance() {
        let message = 'Your balance is: <br/>';
        message += `You have ${this.getAvailable('100')} 100-bills. <br>`;
        message += `You have ${this.getAvailable('50')} 50-bills. <br>`;
        message += `You have ${this.getAvailable('20')} 20-bills. <br>`;
        message += `You have ${this.getAvailable('10')} 10-bills. <br>`;
        message += `Your balance is ${this.budget()}`;
        return message;
    },
    budget: function() {
        return this.availableNotes['10'] * 10 + this.availableNotes['20'] * 20 + this.availableNotes['50'] * 50 + this.availableNotes['100'] * 100;
    },
    withdraw: function(bill, amount) {
        if (this.getAvailable(bill) < amount) return `Not enough ${bill}-bills available`;
        else this.availableNotes[bill] -= amount;
        return true;
    },
    getAvailable(bill) {
        return Number(this.availableNotes[bill]);
    },
    tryWithdrawing: function(amount) {
        if (!Number.isInteger(amount)) return 'Not a number';
        if (amount % 10 != 0) return 'Not a multiple of 10';
        if (amount > this.budget()) return 'Not enough money in the bank';
        let str = '' + amount;
        let digits = str.length;
        let currDigit = digits;
        let amountNeeded = amount;

        let hundreds = Number(str.slice(0, -2));
        let tens = Number(str.charAt(digits - 2));

        let availableNotes_copy = structuredClone(this.availableNotes);

        tens = Number(str.slice(0, digits - 1));

        let withdraw100 = 0;
        let withdraw50 = 0;
        let withdraw20 = 0;
        let withdraw10 = 0;

        while (tens > 0) {
            if (tens >= 10 && availableNotes_copy['100'] > 0) {
                withdraw100++;
                tens -= 10;
                availableNotes_copy['100']--;
                continue;
            }
            if (tens >= 5 && availableNotes_copy['50'] > 0) {
                withdraw50++;
                tens -= 5;
                availableNotes_copy['50']--;
                continue;
            }
            if (tens >= 2 && availableNotes_copy['20'] > 0) {
                withdraw20++;
                tens -= 2;
                availableNotes_copy['20']--;
                continue;
            }
            if (tens >= 1 && availableNotes_copy['10'] > 0) {
                withdraw10++;
                tens--;
                availableNotes_copy['10']--;
            } else {
                break;
            }
        }

        console.log('Withdrawing 100: ', withdraw100);
        console.log('Withdrawing 50: ', withdraw50);
        console.log('Withdrawing 20: ', withdraw20);
        console.log('Withdrawing 10: ', withdraw10);

        this.availableNotes = structuredClone(availableNotes_copy);

        return 'Withdrew ' + amount + '!';
    }

};

const output = document.getElementById('output');

document.getElementById('submit').onclick = () => {
    let withdraw = document.getElementById('withdraw').value;
    let result = atm.tryWithdrawing(Number(withdraw));
    output.innerHTML = result;
}
document.getElementById('balance').onclick = () => {
    let result = atm.showBalance();
    output.innerHTML = result;
}

// console.log(atm.tryWithdrawing(1460));
// console.log(atm.showBalance());
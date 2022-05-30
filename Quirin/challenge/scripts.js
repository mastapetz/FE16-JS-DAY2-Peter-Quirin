let atm = {
    availableNotes: {
        '10': 10,
        '20': 8,
        '50': 12,
        '100': 4
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
        return this.getAvailable['10'] * 10 +
            this.getAvailable['20'] * 20 +
            this.getAvailable['50'] * 50 +
            this.getAvailable['100'] * 100;
    },
    withdraw: function(bill, amount) {
        if (this.getAvailable(bill) < amount)
            return `Not enough ${bill}-bills available`;
        else this.availableNotes[bill] -= amount;
        return true;
    },
    getAvailable(bill) {
        return Number(this.availableNotes['' + bill]);
    },
    tryWithdrawing: function(amount) {
        if (!Number.isInteger(amount))
            return 'Not a number';
        if (amount % 10 != 0)
            return 'Not a multiple of 10';
        if (amount > this.budget())
            return 'Not enough money in the bank';

        let amountNeeded = Number(amount);

        let withdraw100 = Math.floor(amountNeeded / 100) > this.getAvailable('100') ? this.getAvailable('100') : Math.floor(amountNeeded / 100);
        amountNeeded -= withdraw100 * 100;

        let withdraw50 = Math.floor(amountNeeded / 50) > this.getAvailable('50') ? this.getAvailable('50') : Math.floor(amountNeeded / 50);
        amountNeeded -= withdraw50 * 50;

        let withdraw20 = Math.floor(amountNeeded / 20) > this.getAvailable('20') ? this.getAvailable('20') : Math.floor(amountNeeded / 20);
        amountNeeded -= withdraw20 * 20;

        let withdraw10 = Math.floor(amountNeeded / 10) > this.getAvailable('10') ? this.getAvailable('10') : Math.floor(amountNeeded / 10);
        amountNeeded -= withdraw10 * 10;

        console.log('Trying to withdraw ...');
        console.log('Withdrawing 100: ', withdraw100);
        console.log('Withdrawing 50: ', withdraw50);
        console.log('Withdrawing 20: ', withdraw20);
        console.log('Withdrawing 10: ', withdraw10);

        if (amountNeeded == 0) {
            this.availableNotes['100'] -= withdraw100;
            this.availableNotes['50'] -= withdraw50;
            this.availableNotes['20'] -= withdraw20;
            this.availableNotes['10'] -= withdraw100;
            return 'Withdrew ' + amount + '!';
        } else return 'Not withdrawable!';
    }

};

const output = document.getElementById('output');

document.getElementById('submit').onclick = () => {
    let withdraw = document.getElementById('withdraw').value;
    output.innerHTML = atm.tryWithdrawing(Number(withdraw));
}
document.getElementById('balance').onclick = () => {
    output.innerHTML = atm.showBalance();
}
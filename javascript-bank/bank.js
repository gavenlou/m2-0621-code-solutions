/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (isNaN(balance) || balance <= 0 || !Number.isInteger(balance)) return null;
  var newAcc = new Account(this.nextAccountNumber, holder);
  newAcc.deposit(balance);
  this.accounts.push(newAcc);
  this.nextAccountNumber++;
  return newAcc.number;
}

Bank.prototype.getAccount = function (number) {
  if (number > this.accounts.length || isNaN(number) || !Number.isInteger(number)) return null;
  return this.accounts[number - 1];
}

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (this.accounts.length === 0) return 0;
  for (let i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
}

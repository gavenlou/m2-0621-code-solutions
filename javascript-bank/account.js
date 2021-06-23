/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount) ) return false;
  this.transactions.push(new Transaction('deposit', amount));
  return true;
}

Account.prototype.withdraw = function (amount) {
  if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount)) return false;
  this.transactions.push(new Transaction('withdrawal', amount));
  return true;
}

Account.prototype.getBalance = function () {
  var result = 0;
  var transact = this.transactions;
  if (transact.length === 0) return 0;
  else {
    for (let i = 0; i < transact.length; i++) {
      if (transact[i].type === 'withdrawal') result -= transact[i].amount;
      else result += transact[i].amount;
    }
    return result;
  }

}

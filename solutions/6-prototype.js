// BEGIN
class Money {
    constructor(value, currency = 'usd') {
      this.value = value;
      this.currency = currency;
    }
  
    getValue() {
      return this.value;
    }
  
    getCurrency() {
      return this.currency;
    }
  
    exchangeTo(cur) {
      if (this.currency === cur) {
        return new Money(this.value, this.currency);
      }
  
      const exchangeRates = {
        eur: 0.7,
        usd: 1.2,
      };
  
      const newValue = this.value * exchangeRates[cur];
      return new Money(newValue, cur);
    }
  
    add(money) {
      if (this.currency === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.currency);
      }
  
      const newValue = money.exchangeTo(this.currency);
      return new Money(this.value + newValue.getValue(), this.currency);
    }
  
    format() {
      return Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: this.currency,
      }).format(this.value);
    }
}
  
export default Money;
// END

import currencyFormatter from 'currency-formatter';

class Utils {
  static currencyFormat(value, code) {
    if (!value) {
      return value;
    }
    return currencyFormatter.format(value, { code });
  }
}

export default Utils;

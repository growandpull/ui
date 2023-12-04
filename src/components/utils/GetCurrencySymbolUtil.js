const GetCurrencySymbolUtil = (currency) => {
  switch (currency) {
    case "USD":
      return "$";
    case "UAH":
      return "₴";
    case "EUR":
      return "€";
    default:
      return "";
  }
};

export default GetCurrencySymbolUtil;

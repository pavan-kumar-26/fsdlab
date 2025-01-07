const temp = {
    toCelsius: function (f) {
      return (f - 32) * 5 / 9;
    },
    toFahrenheit: function (c) {
      return (c * 9 / 5) + 32;
    }
  };
  let F = 100;
  let C = 37.78;
  
  console.log(`${tempF}F is ${temp.toCelsius(F).toFixed(2)}°C`);
  console.log(`${tempC}C is ${temp.toFahrenheit(C).toFixed(2)}°F`);
  
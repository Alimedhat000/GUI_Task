$(document).ready(function () {
  // Initial values
  let data = {
    speed: 10,
    temperature: 25,
    battery: 100,
    cpuUsage: 18,
    ramUsage: 30,
  };

  function updateSpeed() {
    data.speed += (Math.random() - 0.5) * 10;
    data.speed = Math.min(Math.max(data.cpuUsage, 5), 30);
    $("#speed").text(`Speed: ${data.speed.toFixed(1)} m/s`);
  }

  function updateTemperature() {
    let change = (Math.random() - 0.5) * 0.5;
    data.temperature = Math.min(Math.max(data.temperature + change, 20), 35);
    $("#temp").text(`Temperature: ${data.temperature.toFixed(2)}°C`);
  }

  // Battery simulation with slow random fluctuations
  function updateBattery() {
    if (data.battery > 0) {
      data.battery -= 0.1 * (1 + Math.random() * 0.5);
      data.battery = Math.max(0, data.battery);
    }
    $("#battery").text(`Battery Level: ${Math.round(data.battery)}%`);
  }

  function updateSystemResources() {
    data.cpuUsage += (Math.random() - 0.5) * 10;
    data.cpuUsage = Math.min(Math.max(data.cpuUsage, 5), 95);

    data.ramUsage += (Math.random() - 0.5) * 5;
    data.ramUsage = Math.min(Math.max(data.ramUsage, 20), 90);

    $("#cpu").text(`CPU Usage: ${Math.round(data.cpuUsage)}%`);
    $("#ram").text(`RAM Usage: ${Math.round(data.ramUsage)}%`);
  }

  setInterval(updateSpeed, 100);
  setInterval(updateTemperature, 1000);
  setInterval(updateBattery, 500);
  setInterval(updateSystemResources, 2000);
});

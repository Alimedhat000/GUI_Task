import { loadComponent } from "./loader.js";

loadComponent("status-component", "#status-component").catch((error) => {
  //   console.error(error);
  $("#status-component").html(
    `<div class="error"><div class="error-title">Failed to load component:</div><span>Please Refresh ${error.message}</span></div>`
  );
});
loadComponent("control-component", "#controls-component").catch((error) => {
  //   console.error(error);
  $("#controls-component").html(
    `<div class="error"><div class="error-title">Failed to load component:</div><span>Please Refresh ${error.message}</span></div>`
  );
});
loadComponent("camera-component", "#camera-component").catch((error) => {
  //   console.error(error);
  $("#camera-component").html(
    `<div class="error"><div class="error-title">Failed to load component:</div><span>Please Refresh ${error.message}</span></div>`
  );
});
loadComponent("emergency-component", "#emergency-component").catch((error) => {
  //   console.error(error);
  $("#emergency-component").html(
    `<div class="error"><div class="error-title">Failed to load component:</div><span>Please Refresh ${error.message}</span></div>`
  );
});
loadComponent("data-component", "#data-component").catch((error) => {
  //   console.error(error);
  $("#data-component").html(
    `<div class="error"><div class="error-title">Failed to load component:</div><span>Please Refresh ${error.message}</span></div>`
  );
});

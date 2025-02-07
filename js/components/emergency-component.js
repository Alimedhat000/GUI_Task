let isEmergencyStop = false;

$(document).ready(function () {
  $("#emergencyStop").on("click", function () {
    isEmergencyStop = !isEmergencyStop;

    if (isEmergencyStop) {
      $(".emergency-popup").addClass("active").removeClass("hidden").html(`
                    <div class="emergency-popup-container">
                      <h2 class="emergency-popup-title">Emergency Stop!</h2>
                      <p>System has been stopped.</p>
                      <button id="acknowledgeBtn">Continue</button>
                    </div>
                `);

      $("#acknowledgeBtn").on("click", function () {
        $(".emergency-popup").removeClass("active").addClass("hidden");
        isEmergencyStop = false;
      });
    } else {
      $(".emergency-popup").removeClass("active").addClass("hidden");
    }
  });
});

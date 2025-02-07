$(document).ready(function () {
  $("#toggleCamera").on("click", function () {
    if ($(".camera-feed").hasClass("shutting-down")) {
      $(".camera-feed").removeClass("shutting-down");
      $(".camera-feed").addClass("starting-up");
    } else {
      $(".camera-feed").removeClass("starting-up");
      $(".camera-feed").addClass("shutting-down");
    }
  });
});

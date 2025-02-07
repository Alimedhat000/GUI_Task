$(document).ready(function () {
  $(document).on("click", "#status-component #toggleStatus", function (e) {
    e.preventDefault();
    $(".status-indicator").toggleClass("online");
    if ($(".status-indicator").hasClass("online")) {
      $(".status-text").text("Online");
    } else {
      $(".status-text").text("Offline");
    }
  });
});

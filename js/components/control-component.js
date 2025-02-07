$(document).ready(function () {
  atttachControlHandlers();
});

function atttachControlHandlers() {
  $("#btn-up").on("click", function () {
    moveUp();
  });

  $("#btn-down").on("click", function () {
    moveDown();
  });

  $("#btn-left").on("click", function () {
    moveLeft();
  });

  $("#btn-right").on("click", function () {
    moveRight();
  });
  const KEY_CODES = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  $(document).on("keydown", function (e) {
    switch (e.which) {
      case KEY_CODES.LEFT:
        moveLeft();
        break;
      case KEY_CODES.UP:
        moveUp();
        break;
      case KEY_CODES.RIGHT:
        moveRight();
        break;
      case KEY_CODES.DOWN:
        moveDown();
        break;
      default:
        return;
    }
    e.preventDefault();
  });
}

function moveUp() {
  console.log("Moving up");
  $(".moving-status").text("Moving up");
}

function moveDown() {
  console.log("Moving down");
  $(".moving-status").text("Moving down");
}

function moveLeft() {
  console.log("Moving left");
  $(".moving-status").text("Moving left");
}

function moveRight() {
  console.log("Moving right");
  $(".moving-status").text("Moving right");
}

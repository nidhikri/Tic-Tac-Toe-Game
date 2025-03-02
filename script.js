var board = document.getElementById("board");
var cells = board.getElementsByTagName("td");
var player = "1";

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.innerHTML === "") {
      this.innerHTML = player;

      if (player === "1") {
        player = "O";
      } else {
        player = "1";
      }
    }
  });
}
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    player = "1";
});
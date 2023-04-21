var board = document.getElementById("board");

for(var i=1; i<=800; i++)
{
	var square = document.createElement("div");
    square.className = "box";
    board.appendChild(square);
}
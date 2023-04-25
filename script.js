var board = document.getElementById("board");
for(var i=1; i<=800; i++)
{
	var box = document.createElement("div");
    box.className = "square";
    board.appendChild(box);
}
let color = 1
let pattern = [
    [0,0,0],
    [0,0,0],
    [0,0,0]];
function main(){
    console.log("1")
    show(pattern)
}

function show(){
    let board = document.getElementById("board")
    board.innerHTML = "";
    for (let i = 0; i < 3; i++){
        for (let j = 0;j < 3; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = 
                pattern[i][j] == 2 ? "X":
                pattern[i][j] == 1 ? "O": "";
            cell.addEventListener("click",() => move(i,j));
            board.appendChild(cell)
        }
        board.appendChild(document.createElement("br"))
    }
}

function move(x,y){
    pattern[x][y] = color;
    if (check()){
        alert(color == 2 ? "X is winner" : "O is winner");
    }
    color = 3 - color;
    
    show()
}
function check(){
    for (let i = 0; i < 3; i++){
        let isWin = true
        for (let j = 0;j < 3; j++){
            if (pattern[j][i] !== color){
                isWin = false;
            }
        }
        if (isWin)
            return true;
    } 
    for (let i = 0; i < 3; i++){
        let isWin = true;
        for (let j = 0;j < 3; j++){
            if (pattern[i][j] !== color){
                isWin = false;
            }
        }
        if (isWin)
            return true;
    {
        let isWin = true;
        for (let i = 0; i < 3; i++){
            if (pattern[i][i] !== color){
                isWin = false; 
            }
        } 
        if (isWin)
            return true;
    }
    {
        let isWin = true;
        for (let i = 0; i < 3; i++){
            if (pattern[2-i][i] !== color){
                isWin = false; 
            }
        } 
        if (isWin)
            return true;
    }
    return false;
    } 
}

main()

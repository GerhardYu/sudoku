$(document).ready(function(){
    var boardData = [
        -1,  1, -1, -1, -1, -1, -1,  9, -1,
        -1, -1,  4, -1, -1, -1,  2, -1, -1,
        -1, -1,  8, -1, -1,  5, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1,  3, -1,
         2, -1, -1, -1,  4, -1,  1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1,  1,  8, -1, -1,  6, -1, -1,
        -1,  3, -1, -1, -1, -1, -1,  8, -1,
        -1, -1,  6, -1, -1, -1, -1, -1, -1
     ];
    var image = document.createElement("img");
    image.src = "images/undo.png";
    
    let board = $('#board');
    for(let y = 0; y < 9; y++){
        let tr = $('<tr>')
        for (let x = 0; x < 9; x++){
            let td = $('<td>');
            td.attr('id', '' + x + y)
            td.text(' ');
            if(boardData[y*9+x] == -1){
                td.click(function(){
                    $(this).text(paletteValue)
                    for(let z = x; z < 9 - x; z++){
                        if(paletteValue == boardData[y*9+z]){
                            $(this).addClass('error');
                        }
                        for(let j = y; j < 9 - y; j++){
                            if(paletteValue == boardData[j*9+x]){
                                $(this).addClass('error');
                            }
                        }
                    } //another for loop which cells are in violation
                    for(let z = 0; z < x; z++){
                        if(paletteValue == boardData[y*9+z]){
                            $(this).addClass('error');
                        }
                        for(let j = 0; j < y; j++){
                            if(paletteValue == boardData[j*9+x]){
                                $(this).addClass('error');
                            }
                        }
                    }
                    if(y == 0 || y == 3 || y== 6){
                        for(let a = y; a < y + 2; a++){
                            if(x == 0 || x == 3 || x == 6){
                                for(let b = x; b < x+2; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 1 || x == 4 || x == 7){
                                for(let b = x; b < x +1; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                                for(let c = x; c > x - 1; c--){
                                    if(paletteValue == boardData[a*9+c]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 2 || x == 5 || x == 8){
                                for(let b = x; b > x - 2; b--){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error')
                                    }
                                }
                            }
                        }
                    }
                    else if(y == 1 || y == 4 || y==7){
                        for(let a = y; a < y + 1; a++){
                            if(x == 0 || x == 3 || x == 6){
                                for(let b = x; b < x+2; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 1 || x == 4 || x == 7){
                                for(let b = x; b < x +1; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                                for(let c = x; c > x - 1; c--){
                                    if(paletteValue == boardData[a*9+c]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 2 || x == 5 || x == 8){
                                for(let b = x; b > x - 2; b--){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error')
                                    }
                                }
                            }
                        }
                        for(let a = y; a > y -1; a--){
                            if(x == 0 || x == 3 || x == 6){
                                for(let b = x; b < x+2; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 1 || x == 4 || x == 7){
                                for(let b = x; b < x +1; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                                for(let c = x; c > x - 1; c--){
                                    if(paletteValue == boardData[a*9+c]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 2 || x == 5 || x == 8){
                                for(let b = x; b > x - 2; b--){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error')
                                    }
                                }
                            }
                        }
                    }
                    else if(y == 2 || y== 5 || y==8){
                        for(let a = y; a > y - 2; a--){
                            if(x == 0 || x == 3 || x == 6){
                                for(let b = x; b < x+2; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 1 || x == 4 || x == 7){
                                for(let b = x; b < x +1; b++){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error');
                                    }
                                }
                                for(let c = x; c > x - 1; c--){
                                    if(paletteValue == boardData[a*9+c]){
                                        $(this).addClass('error');
                                    }
                                }
                            }
                            else if(x == 2 || x == 5 || x == 8){
                                for(let b = x; b > x - 2; b--){
                                    if(paletteValue == boardData[a*9+b]){
                                        $(this).addClass('error')
                                    }
                                }
                            }
                        }
                    }
                    lastCell = $(this);
                    boardData[y*9+x] = paletteValue;
                })
            }
            else{
                td.text(boardData[y*9+x])
            }
            tr.append(td);
        }
        board.append(tr);
    }
    let palette = $('#palette');
    for(let y = 0; y < 1; y++){
        let tr = $('<tr>')
        for (let x = 0; x < 9; x++){
            let td = $('<td>');
            td.text(x+1);
            td.click(paletteClick)
            tr.append(td)
        }
        tr.append(image);
        palette.append(tr);
    }
    var paletteValue = ''
    function paletteClick(){
        paletteValue = $(this).text()
        alert(paletteValue)
    }

    $('img').click(function(){
        lastCell.removeClass('error')
        lastCell.text('')
    })

    function sameBlock(x1, y1, x2, y2) {
        let firstRow = Math.floor(y1 / 3) * 3;
        let firstCol = Math.floor(x1 / 3) * 3;
        return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
    }
     
    function sameRow(x1, y1, x2, y2) {
        return y1 == y2;
    }
     
    function sameColumn(x1, y1, x2, y2) {
        return x1 == x2;
    }

    //cell.addClass('error');
    //lastCell = $(this);
    //errorCells[index].removeClass('error');
})
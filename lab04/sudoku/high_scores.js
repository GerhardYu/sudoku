$(document).ready(function(){

    var scoreData = [
        '2021/01/17 3:41', '2021/01/21 4:01', '2021/02/01 2:52', '2021/02/17 3:08', '2021/03/02 2:51'
    ];

    let highscore = $('#highscore')
    for(let x = 0; x < 1; x++){
        let tr = $('<tr>')
        for (let x = 0; x < 1; x++){
            let td = $('<td>');
            td.text("Date Duration");
            tr.append(td)
        }
        highscore.append(tr);
    }

    let scores = $('#scores')
    for(let x = 0; x < 6; x++){
        let tr = $('<tr>')
        for(let y = 0; y < 1; y++){
            let td = $('<td>');
            td.text(scoreData[x]);
            tr.append(td)
        }
        scores.append(tr)
    }
})
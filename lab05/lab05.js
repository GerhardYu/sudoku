$(document).ready(function(){


    var deselect = document.getElementsByClassName('selected')
    let column = $('tr:first-child th')
    column.click(selectColumn);

    function selectColumn(){
        let index = $(this).index()
        let a = $('tr td:nth-child(' + (index+1) + ')')
        a.addClass('selected')
    }

    let row = $('tr td:first-child')
    row.click(selectRow);

    function selectRow(){
        let index = $(this).parent().index()
        $('tr:nth-child(' + (index + 1) + ') td').addClass('selected');
    }

    function deselectAll(){
        while(deselect.length() > 0){
            deselect[0].classList.remove('selected')
        }
    }

    row.click(selectLastindex);
})
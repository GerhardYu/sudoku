$(document).ready(function(){

    $('#MovieForm').submit(function(event){
        event.preventDefault();
        let ML = $('#MovieLocation').val()
        alert(ML)
        $.ajax({
            type: 'GET',
            //url: "https://www.omdbapi.com/?apikey=" + '716ed730' + '&t=' + MN,
            url: 'showtimes.json',
            success: function(data){
                console.log(data)
                //$('#results').html('')
                //console.log('check')
                $.each(data, function(key, value){
                    if(value.location == ML){
                        $('#results').append(value.title + '<br>')
                    }
                })
            }
        })
    })
})
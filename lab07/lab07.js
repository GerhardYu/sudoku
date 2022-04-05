$(document).ready(function(){
let table = $('#spreadsheet')
    $.ajax({
        type:'GET',
        url: "grades.csv",
        datatype: "text",
        success: function(response){
            let lines = response.split('\n')
            for (let i=0; i<lines.length; i++){
                let tr = $('<tr>')
                let data = lines[i].split(',');
                for (let j=0; j<data.length; j++){
                    let td = $('<td>')
                    td.text(data[j])
                    tr.append(td)
                }
                table.append(tr)
            }

        $('td').dblclick(cellClick)
        function cellClick(){
            let textfield = $('<input type="text">')
            textfield.val($(this).text())
            textfield.keypress(function(event){
                if (event.which == 13){
                    // alert(event.which)
                    // alert($(event.target).val())
                    // $(event.target).parent().text('Hello')
                    let newValue = $(event.target).val();
                    $(event.target).parent().html(newValue)
                }
                
            })

            $(this).html(textfield)
            // alert($(this).text())
        }
        var deselect = document.getElementsByClassName('selected')
        let column = $('tr:first-child td')
        column.click(selectColumn);

        function getRowValues(rowIndex) {
            let marks = [];
            $('tr:nth-child(' + (rowIndex + 1) + ') td').each(function(index, element){
                marks.push(parseFloat($(element).text()))
            });
            return marks;
        }

        function getColumnValues(colIndex) {
            let marks = [];
            $('tr td:nth-child('+ (colIndex + 1) + ')').each(function(index, element) {
                marks.push(parseFloat($(element).text()));
            });
            return marks;
        }

        function selectColumn(){
            let index = $(this).index()
            let a = $('tr td:nth-child(' + (index+1) + ')')
            a.addClass('selected')
            let b = document.getElementsByClassName('selected')
            array_length = b.length - 1
            c = getColumnValues(index)
            c.shift();
            //gradeAvg(b,d)
            drawChart(c, array_length)   
        }

        let row = $('tr td:first-child')
        row.click(selectRow);

        function selectRow(){
            let index = $(this).parent().index()
            console.log(index)
            $('tr:nth-child(' + (index + 1) + ') td').addClass('selected');
            let b = document.getElementsByClassName('selected')
            array_length = b.length - 1
            c = getRowValues(index)
            c.shift()
            //gradeAvg(b,d)
            drawChart(c, array_length)  
        }

        function deselectAll(){
            while(deselect.length() > 0){
                deselect[0].classList.remove('selected')
            }
        }

        row.click(selectLastindex);
        var sum = 0;
        function gradeAvg(gradeList, length){
            for(let a = 0; a < length; a++){
                console.log(gradeList[a])
            }
            console.log(sum)
        }
        function drawChart(data, data_length){
            let excellent = 0
            let good = 0
            let satisfactory = 0
            let barely = 0
            let fail = 0
            for(let a = 0; a < data_length; a++){
                if(data[a] >= 90){
                    excellent += 1
                }
                else if(80 <= data[a] && data[a] < 90){
                    good += 1
                }
                else if(60 <= data[a] && data[a] < 80){
                    satisfactory += 1
                }
                else if(50 <= data[a] && data[a] < 60){
                    barely += 1
                }
                else{
                    fail += 1
                }
            }
            let Dummy_Data = [ 
                {"grade": 'A', "frequency": excellent},
                {"grade": 'B', "frequency": good},
                {"grade": 'C', "frequency": satisfactory},
                {"grade": 'D', "frequency": barely},
                {"grade": 'F', "frequency": fail},
                ];
            
            
            // set the dimensions and margins of the graph
            const margin = {top: 30, right: 30, bottom: 70, left: 60},
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
            
            // append the svg object to the body of the page
            const svg = d3.select("#chart")
              .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`);
            
            // Parse the Data
            // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then ( function(data) {
            
              // sort data
            //   data.sort(function(b, a) {
            //     return a.Value - b.Value;
            //   });
            
              // X axis
              const x = d3.scaleBand()
                .range([ 0, width ])
                .domain(Dummy_Data.map(d => d.grade))
                .padding(0.2);
              svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x))
                // .selectAll("text")
                //   .attr("transform", "translate(-10,0)rotate(-45)")
                //   .style("text-anchor", "end");
            
              // Add Y axis
              const y = d3.scaleLinear()
                .domain([0, 9])
                .range([ height, 0]);
              svg.append("g")
                .call(d3.axisLeft(y));
            
              // Bars
              svg.selectAll("mybar")
                .data(Dummy_Data)
                .enter()
                .append("rect")
                  .attr("x", d => x(d.grade))
                  .attr("y", d => y(d.frequency))
                  .attr("width", x.bandwidth())
                  .attr("height", d => height - y(d.frequency))
                  .attr("fill", "#69b3a2")
                  .attr('class', 'bar')
            
            svg.append('text')
                .attr('x', width/2 - 20)
                .attr('y', 1.1 * height)
                .text('Grade Distribution')
            // })   
        }

        }       
    })





})
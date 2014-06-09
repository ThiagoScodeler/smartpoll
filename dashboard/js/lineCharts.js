$(function () {
    $.ajax({
        url: 'includes/getDataLineChart.php',
        type: 'POST',
        data: 'month='+6,
        dataType: 'json',
        success: function(json) {

           var series = new Array();

        var lastDay = (new Date(2014, 6, 0)).getDate();

        var categories = new Array();

        for (var i = 1; i <= lastDay; i++) {
            categories.push(i);
        };
        //console.log(categories);

           for (var i = 0; i < json.length; i++) {
                series[i] = new Object();
                series[i].name=json[i].title;
                series[i].data = json[i].data;
            };

           //console.log(series);


            $('#lineChart').highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                x: -20 //center
                },
                xAxis: {
                     title: {
                        text: 'Day'
                    },
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: 'Votes'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ' votes'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: series
            });
        }
    });
});

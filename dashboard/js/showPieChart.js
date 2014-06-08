$( document ).on('click', '.btnShowChart', function() {

  //show Modal
  $('#modalPieChart').modal('show');

  //get Poll id
  var id = $(this).attr('id');

  $.ajax({
    url: 'includes/getDataQuestionById.php',
    type: 'POST',
    data: 'id='+id,
    dataType: 'json',
    success: function(jsonQuestion) {

      var title = jsonQuestion[0].title;
      var question = jsonQuestion[0].question;

      $.ajax({
        url: 'includes/getDataResult.php',
        type: 'POST',
        data: 'id='+id,
        dataType: 'json',
        success: function(json) {

          var total=0;

          for (var i = 0; i < json.length; i++) {
            total = total + parseInt(json[i].total);
          };

          var answers = [];

          for (var i = 0; i < json.length; i++) {
            totalAnswer = parseInt(json[i].total);

            var percent = Math.round((totalAnswer/total)*100);

            answers.push([json[i].answer , percent]);
          };

        // Build the chart
        $('#pieChart').highcharts({
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: question
          },
          tooltip: {
           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            },
            showInLegend: true
          }
        },
        series: [{
          type: 'pie',
          name: title,
          data: answers
        }]
      });      

      } 
    });
}
});
});
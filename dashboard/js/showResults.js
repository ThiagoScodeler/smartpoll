function loadData(){
  $(function () 
  {
    //-----------------------------------------------------------------------
    // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
    //-----------------------------------------------------------------------
    $.ajax({                                      
      url: 'includes/getPolls.php',    //the script to call to get data          
      data: '',                        //you can insert url argumnets here to pass to getPolls.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(json)          //on recieve of reply
      {

        //check if have one poll registered
        if (json.length>0) {

        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
        
          //accordion
          accordion= $('<div>',{
            'class' : 'panel-group',
            'id' : 'accordion'
          }).appendTo($('#output'));

          //panel
          panel= $('<div>',{
            'class' : 'panel panel-primary'
          }).appendTo($(accordion));

          //panel-heading
          linkTitle = $('<h4>',{
            'class' : 'panel-title',
            'html' : $('<a>',{
              'data-toggle' : 'collapse',
              'data-parent' : '#accordion',
              'href' : '#collapse'+0,
              'text' : json[0].title
            })
          });

          pHeading=document.createElement('div');
          $(pHeading).addClass('panel-heading') 
          .html($(linkTitle))
          .appendTo($(panel));


          //panel-body
          divCollapseBody = $('<div>',{
            'id' : 'collapse'+0,
            'class' : 'panel-collapse collapse in',
          }).appendTo($(panel));


          pBody=document.createElement('div'); 
          $(pBody).addClass('panel-body')
          .html('<h4>'+json[0].question+'</h4>')
          .appendTo($(divCollapseBody));

          //function for show result with progress bar
          showResult(pBody, json[0].id);


          //Repet panels
          for (var i = 1; i < json.length; i++) {
              //panel
              panel= $('<div>',{
                'class' : 'panel panel-primary'
              }).appendTo($(accordion));


               //panel-heading
               linkTitle = $('<h4>',{
                'class' : 'panel-title',
                'html' : $('<a>',{
                  'data-toggle' : 'collapse',
                  'data-parent' : '#accordion',
                  'href' : '#collapse'+i,
                  'text' : json[i].title
                })
              });

               pHeading=document.createElement('div');
               $(pHeading).addClass('panel-heading') 
               .html($(linkTitle))
               .appendTo($(panel));


              //panel-body
              divCollapseBody = $('<div>',{
                'id' : 'collapse'+i,
                'class' : 'panel-collapse collapse',
              }).appendTo($(panel));
              

              pBody=document.createElement('div'); 
              $(pBody).addClass('panel-body')
              .html('<h4>'+json[i].question+'</h4>')
              .appendTo($(divCollapseBody));

              //function for show result with progress bar
              showResult(pBody, json[i].id);

            };
          };        
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      } 
    });
}); 
};


//load Polls 
$(function () {
  loadData();
});

function showResult(elementToAppend ,id) {

  $.ajax({
    url: 'includes/getDataResult.php',
    type: 'POST',
    data: 'id='+id,
    dataType: 'json',
    success: function(data) {

      var total=0;
      
      for (var i = 0; i < data.length; i++) {
        total = total + parseInt(data[i].total);
      };
      
      for (var i = 0; i < data.length; i++) {
        divProgressAnswer = ($('<div>',{
        }).appendTo(elementToAppend));

        textAnswer = ($('<span>',{
          'class': 'text-result',
          'text': data[i].answer+" ("+data[i].total+" votes)"
        }).appendTo(divProgressAnswer));

        progress = $('<div>',{
          'class' : 'progress'
        }).appendTo(elementToAppend);

        totalAnswer = parseInt(data[i].total);
        var percent = ((totalAnswer/total)*100);
        progress.append(
          $('<div>',{
            'class' : 'progress-bar',
            'role' : 'progressbar',
            'aria-valuenow' : percent,
            'aria-valuemin' : '0',
            'aria-valuemax' :'100',
            'style' : 'width: '+percent+'%',
            'text': Math.round(percent)+'%'
          }));
      };

      //button
      divBtn=$('<div>',{
        'class' : 'group-btn'
      }).appendTo(elementToAppend);

      btnRemove = ($('<button>', {
        'type': 'button', 
        'class': 'btn btn-warning btnShowChart', 
        'id' : id,
        'html': 'Show Pie Chart'}).button()
      );
      btnRemove.appendTo($(divBtn));

    } 
  });
};
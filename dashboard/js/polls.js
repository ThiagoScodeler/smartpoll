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
            'class' : 'panel panel-info'
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
          .html(json[0].question)
          .appendTo($(divCollapseBody));

          //buttons
          divBtn=$('<div>',{
            'class' : 'group-btn'
          }).appendTo($(pBody));

        //btnEdit = ($('<button>', {
        //  'type' : 'button', 
        //  'class' : 'btn btn-warning btn-xs btnEdit',
        //  'data-toggle' : 'modal',
        //  'data-target' : '#modal',
        //  'html' : '<span class="glyphicon glyphicon-edit"></span> Edit'}).button()
        //);
        //btnEdit.appendTo($(divBtn));

          btnRemove = ($('<button>', {
            'type': 'button', 
            'class': 'btn btn-danger btn-xs btnRemove', 
            'id' : json[0].id,
            'html': '<span class="glyphicon glyphicon-remove"></span> Remove'}).button()
          );
          btnRemove.appendTo($(divBtn));

          //Repet panels
          for (var i = 1; i < json.length; i++) {
              //panel
              panel= $('<div>',{
                'class' : 'panel panel-info'
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
              .html(json[i].question)
              .appendTo($(divCollapseBody));

              //buttons
              divBtn=$('<div>',{
                'class' : 'group-btn'
              }).appendTo($(pBody));

            //btnEdit = ($('<button>', {
            //  'type' : 'button', 
            //  'class' : 'btn btn-warning btn-xs btnEdit',
            //  'data-toggle' : 'modal',
            //  'data-target' : '#myModal',
            //  'html' : '<span class="glyphicon glyphicon-edit"></span> Edit'}).button()
            //);
            //btnEdit.appendTo($(divBtn));

              btnRemove = ($('<button>', {
                'type': 'button', 
                'class': 'btn btn-danger btn-xs btnRemove', 
                'id' : json[i].id,
                'html': '<span class="glyphicon glyphicon-remove"></span> Remove'}).button()
              );
              btnRemove.appendTo($(divBtn));

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


$( document ).on('click', '.btnRemove', function() {

  //show Modal
  $('#modalRemove').modal('show');

  //get Poll id
  var id = $(this).attr('id');

  $( document ).on('click', '.btnConfirmRemove', function() {
    $.ajax({
      url:'includes/removePoll.php',
      type: 'POST',
      data: 'id='+id,
      success: function( data ) {
        if(data == 'true'){
          //reload Polls
          $('#output').html('');
          loadData();
          
          //close Modal
          $('#modalRemove').modal('hide');
        };
      }
    });

  });

});
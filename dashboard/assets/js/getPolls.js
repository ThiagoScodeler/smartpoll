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
      success: function(data)          //on recieve of reply
      {

        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
        for (var i = 0; i < data.length; i++) {
          $('#output').append("<br>"+data[i].question); //Set output element html
        };
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      } 
    });
  }); 



var user={};
$(document).ready(function() 
	{

		//login.html
		


		//profile.html

	  

	    $("#uploadPhotoProfile").click(function() 
            {
                $('input[name="uploadFile"]').each(function(index, value) 
                { 
                    var file = value.files[0];
                    if(file) 
                    {
                        var formData = new FormData();
                        formData.append('file', file);
                        $.ajax({
                          url : '',
                          type : 'Put',
                          data : formData,
                          cache : false,
                          contentType : false,
                          processData : false,
                          success : function(data, textStatus, jqXHR) {
                                var message = jqXHR.responseText;
                                $("#messages").append("<li>" + message + "</li>");
                          },
                          error : function(jqXHR, textStatus, errorThrown) {
                                $("#messages").append("<li style='color: red;'>" + textStatus + "</li>");
                          }
                        });
                    }
                });
            });




	    //myFiles.html

	    $("#filterMyFiles").click(function() 
	    {
	    	var option = $("#option").val();

      		var sendInfo = {
           		option: option
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: JSON.stringify(sendInfo),
	                  success : function(data, textStatus, jqXHR) {
	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.confidentiality + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });



	    //withFreinds.html

	    $("#filterWithFreinds").click(function() 
	    {
	    	var option = $("#option").val();

      		var sendInfo = {
           		option: option
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: JSON.stringify(sendInfo),
	                  success : function(data, textStatus, jqXHR) {

	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });



	    //photo.html



	    //video.html



	    //freinds.html

	   


	});
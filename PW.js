     $(document).ready(function(){
         $("#postme").click(function() {
             if($("#checky").prop("checked")==false)
        alert("Please accept the terms and conditions");
             else
                 loadBooks();
             
             function loadBooks(){
                 $.ajax({
	                   type: "GET",
	                   url: "Book.xml",
	                   dataType: "xml",
	                   success: function(xml) {
		
		$(xml).find('book').each(function(){
			var title = $(this).find('title').text();
    		var price = $(this).find('price').text();
            var year = $(this).find('year').text();
    		var authorlist = $(this).find('author');
    		var author = "", a = "";

    		if(authorlist.length > 1){
    				for (i = 0 ; i <authorlist.length; i++) {
						a = a + authorlist[i].childNodes[0].nodeValue + ", ";
    				}

    			author = a.substring(0, a.length-2);
   			 }
    		else{
    			author = $(this).find('author').text();
    		}

    var year = $(this).find('year').text();
    var price = $(this).find('price').text();
				
				 $('#Table').append('<tr><td>' + title + '</td><td>'+ author + '</td><td>' + price + '</td> <td>' + year + '</td></tr>');
  
			});
		},
	error: function() {
		alert("The XML File could not be loaded.");
		}
	});
             }
             
           });
     });



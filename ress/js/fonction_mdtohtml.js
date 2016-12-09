
  function mdtohtml(fichier,id){
	var content = " ";
	var url = "http://rawgit.com/"+creator+"/"+project+"/"+branch+"/"+fichier
  	//get content 
  	  $.ajax({
	    type:     "GET",
	    url:      url,
            contentType: "text/plain; charset=utf-8",
	    dataType: "text",
	    success: function(data){
	    	//pour chague linge
	        var lignes = data.split('\n');
			for(var i = 0;i < lignes.length;i++){
				var converter = new showdown.Converter();
			    content = content.concat(converter.makeHtml(lignes[i]));
			}	    	
			document.getElementById(id).innerHTML = content;
	   	 }
	});
	
  }

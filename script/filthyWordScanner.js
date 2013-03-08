(function($){
/*
* filthyWordScanner : It's a jQuery plugin to scan filthy words.
* version 			: 0.1
* Author 			: Sadik Rupani
* Website			: http://webuntudro.com
*/
	
var methods = {
		read : function(file){
			console.log("json file reading process" + file);
			var request = new XMLHttpRequest();
			request.open("GET",file,false);
			request.setRequestHeader('X-Requested-with', 'XMLHttpRequest');
			request.send(null);
			
			try{
				return JSON.parse(request.responseText);
			}catch(e){
				console.log(e)
			}
			
		},
		
	};	
	

$.fn.filthyWordScanner = function( options ){
	console.log("filthyWordScanner starts");
	var scan;
	var id = options.wordScanToApply;
	var words = $("#"+id).val().split(" ");
	
	/* 
	 * Custom settings for filthyWordScanner.
	 * jsonFileLocationToRead -> Location of the json file.
	 * characterToReplaceWith -> Character to replace like '*','#'
	 * 
	 * */
	var settings = $.extend({
		'jsonFileLocationToRead'	: '',
		'wordScanToApply'			: '',
		'characterToReplaceWith'	: '*'
	},options);
	if(options.jsonFileLocationToRead){
		scan = methods.read(options.jsonFileLocationToRead);
	}
	for(var i=0;i< scan.length;i++){
		
	}

	
}
}(jQuery));
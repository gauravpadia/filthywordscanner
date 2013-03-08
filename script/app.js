/**
 * 
 * 
 * 
 */
$(function(){
	$("#btnClick").click(function(){
		$("#scanWords").filthyWordScanner({
			'jsonFileLocationToRead' : 'json/filthyWords.json',
			'wordScanToApply'			 : 'scanWords'
		});
	});
});
	
	


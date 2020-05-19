
$(document).ready(function(){
	
	$("#globalsearchform").submit(function(){
		if($("#globalsearchform_key")[0].value==""){
			alert("璇疯緭鍏ユ悳绱㈠叧閿瘝");
			return false;
		}
		return true;
	});
}); 

function restoreFieldValue(field){
    var loc = document.location;
    var cookieName = loc.pathname.replace(/[/]/g,".").substr( 1, loc.pathname.length )+ '.' + $(field).attr("name");
    $(field).val( $.cookie( cookieName ) );
}

function rememberFieldValue(field) {
    var loc = document.location;
    var cookieName = loc.pathname.replace(/[/]/g,".").substr( 1, loc.pathname.length )+ '.' + $(field).attr("name");
    if( 	field.value !== null 
         || field.value  !==  undefined 
         || field.value.length !== 0 
         || field.value !=="" ){
    
	if (navigator.userAgent.search("MSIE") >= 0) {
	    $.cookie( cookieName, field.value, {expires: 7});
	} else{
	    $.cookie( cookieName, field.value, { path: loc.pathname , expires: 7, SameSite: 'Lax' });	
	}	
    }
    
}

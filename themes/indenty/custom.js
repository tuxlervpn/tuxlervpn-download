function basename(path) 
{
  	let separator = '/';
  
  	const windowsSeparator = '\\';
  
  	if (path.includes(windowsSeparator)) 
  	{    
  		separator = windowsSeparator;
  	}  
  
  	return path.slice(path.lastIndexOf(separator) + 1);
}

function fileChanged()
{
	var fullPath = jQuery('#fileid').val();
	
	if (fullPath) 
	{
		var fname = basename(fullPath);
		var max_fname = 20;
		
		if(fname.length >  max_fname)
			fname = fname.substring(0,  max_fname) + "...";
		
    	jQuery('#spanfilename').html(fname);
	}
}

jQuery(document).ready(function() 
{
	jQuery("#fileid").on("change", fileChanged);
	
	checkBanned();
    //faq
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(function(el) {
        el.addEventListener('click', function(){
            if(el.classList.contains('exp')){
                el.classList.remove('exp')
            }
            else {
                el.classList.add('exp')
            }
        })
    })
});

function checkBanned()
{
	jQuery.ajax(
	{
		cache: false,
		url : "https://api.tuxlervpn.com/check_banned.php",
        	
		success : function(response) 
		{
			if(response == "YES")
				jQuery("body").html("Our service is not available in your country.");
		},

		error : function() 
		{
			console.log("couldn't get ip status");
		}
	});
}
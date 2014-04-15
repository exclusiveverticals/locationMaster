// JavaScript Document
	jQuery(function () 
 {
	 jQuery("#locationSearch").autocomplete({
		source: function (request, response) {
		 jQuery.getJSON(
			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
			function (data) {
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 jQuery("#locationSearch").val(selectedObj.value);
		     var option_result = document.getElementById("locationSearch").value;
   var option_array=option_result.split(",");
    document.getElementById('city').value = option_array[0];
    document.getElementById('state').value = option_array[1];
		 return false;
		},
		open: function () {
		 jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
		 jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
	 jQuery("#locationSearch").autocomplete("option", "delay", 100);
	});
	
function is_int(value){ 
       if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
       return true;
    } else { 
       return false;
        } 
    }
    $(function() {
      // Set up
      $("#locationSearch").keyup(function() {
        // Cache 
        var el = $(this);
        // Did they type five integers?
        if ((el.val().length == 5) && (is_int(el.val())))  {
          // Call Ziptastic for information
          $.ajax({
            url: "http://zip.elevenbasetwo.com",
            cache: false,
            dataType: "json",
            type: "GET",
            data: "zip=" + el.val(),
            success: function(result, success) {
              $("#city").val(result.city);
              $("#state").val(result.state);   
           }
         });
       } 
      });
    }); 
	
	var getLocation = "http://api.hostip.info/get_json.php";
    $.getJSON(getLocation, function (json) {
    // Set the variables from the results array
    var location = json.city;
    // Set the table td text
    $('#locationFromIP').text(location);
    });

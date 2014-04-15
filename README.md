locationMaster
==============

Populate City, State from Zip - Ajax Autocomplete  City and State - Ajax Autocomplete City and State (populate separate inputs) - Get Location from IP - 

Include the following JS files
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
 
CSS for autocomplete
<style type="text/css">
.ui-menu .ui-menu-item a,.ui-menu .ui-menu-item a.ui-state-hover, .ui-menu .ui-menu-item a.ui-state-active {
	font-weight: normal;
	margin: -1px;
	text-align:left;
	font-size:14px;
	}
.ui-autocomplete-loading { background: white url("/images/ui-anim_basic_16x16.gif") right center no-repeat; }
</style>

How to use
1) Make 3 inputs, with the ID's of locationSearch, city, state (city and state can be hidden)
2) For geting location from IP address add. <div id="locationFromIP"></div>

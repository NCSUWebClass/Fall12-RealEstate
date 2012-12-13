function topNav(){
document.getElementById("topNav").innerHTML = "\
<div class=\"navbar navbar-inverse navbar-fixed-top\">\
    <div class=\"navbar-inner\">\
		<div class=\"container-fluid\">\
          <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\
            <span class=\"icon-bar\"></span>\
            <span class=\"icon-bar\"></span>\
            <span class=\"icon-bar\"></span>\
          </a>\
          <a class=\"brand\" href=\"./index.html\">George Properties</a>\
          <div class=\"nav-collapse collapse\">\
            <ul class=\"nav\">\
              <li><a href=\"./index.html\">Home</a></li>\
              <li><a href=\"./About.html\">About</a></li>\
               <li class=\"dropdown\">\
                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Owners<b class=\"caret\"></b></a>\
                <ul class=\"dropdown-menu\">\
                   <li><a href=\"./Investors.html\">Investors</a></li>\
                  <li><a href=\"./MultiOwners.html\">Multi-Unit Owners</a></li>\
                  <li><a href=\"./Landlords.html\">Landlords </a></li>\
                </ul>\
				<li><a href=\"./Tenants.html\">Tenants</a></li>\
              </li>\
			  <li><a href=\"./Services.html\">Services</a></li>\
			  <li><a href=\"./Vendors.html\">Vendors</a></li>\
			  <li><a href=\"./Listings.html\">Listings</a></li>\
            </ul>\
          </div><!--/.nav-collapse -->\
		  <div class=\"nav-collapse collapse\">\
		  <ul class=\"nav pull-right\">\
		  <li><a href=\"./Contact.html\">Contact</a></li>\
		  <li><a href=\"./Careers.html\">Careers</a></li>\
		  </ul>\
          </div>\
        </div>\
      </div>\
    </div>"
	
	//<li><a href=\"./Applications.html\">Apply</a></li>\
	
;}


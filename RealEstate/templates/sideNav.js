 function sideNav(){
 original = document.getElementById("sideNav").innerHTML;
document.getElementById("sideNav").innerHTML = "\
<div class=\"row-fluid\">\
        <div class=\"span2\">\
	<div class=\"accordion span2\" id=\"accordion\">\
  <div class=\"accordion-group\">\
    <div class=\"accordion-heading\">\
      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\
        <ul class=\"nav nav-list\"><li>Investors</li></ul>\
      </a>\
    </div>\
    <div id=\"collapseOne\" class=\"accordion-body collapse\">\
      <div class=\"accordion-inner\">\
	  <ul class=\"nav nav-list\">\
        <li><a href=\"./InvestorPrices.html\">Prices</a></li>\
        <li><a href=\"./InvestorServices.html\">Services</a></li>\
        </ul>\
      </div>\
    </div>\
  </div>\
  <div class=\"accordion-group\">\
    <div class=\"accordion-heading\">\
      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\
        <ul class=\"nav nav-list\"><li>Multi-Unit Owners</li></ul>\
      </a>\
    </div>\
    <div id=\"collapseTwo\" class=\"accordion-body collapse\">\
      <div class=\"accordion-inner\">\
	  <ul class=\"nav nav-list\">\
        <li><a href=\"./MUServices.html\">Services</a></li>\
	  </ul>\
      </div>\
    </div>\
  </div>\
  <div class=\"accordion-group\">\
    <div class=\"accordion-heading\">\
      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\
        <ul class=\"nav nav-list\"><li>Landlords</li></ul>\
      </a>\
    </div>\
    <div id=\"collapseThree\" class=\"accordion-body collapse\">\
      <div class=\"accordion-inner\">\
	  <ul class=\"nav nav-list\">\
         <li><a href=\"./SFLPrices.html\">Prices</a></li>\
         <li><a href=\"./SFLServices.html\">Services</a></li>\
         <li><a href=\"./SFLCapabilities.html\">Capabilities</a></li>\
		 <li><a href=\"./pm_agreement.pdf\">Agreement</a></li>\
	  </ul>\
      </div>\
    </div>\
  </div>\
  <div class=\"accordion-group\">\
    <div class=\"accordion-heading\">\
      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">\
       <ul class=\"nav nav-list\"><li> Tenants</li></ul>\
      </a>\
    </div>\
    <div id=\"collapseFour\" class=\"accordion-body collapse\">\
      <div class=\"accordion-inner\">\
	  <ul class=\"nav nav-list\">\
         <li><a href=\"./TenantPR.html\">Pay Rent</a></li>\
		 <li><a href=\"./TenantPF.html\">Pay Fines</a></li>\
		 <li><a href=\"./TenantDep.html\">Deposits</a></li>\
		 <li><a href=\"./LeaseAgreement.pdf\">Agreement</a></li>\
	  </ul>\
      </div>\
    </div>\
  </div>\
  <div class=\"logo\">\
  <img src=\"./img/GeorgeProperties.png\" />\
  </div>\
  </div>\
          </div><!--/.span -->\
		  " + original
		  //<p> Test Text </p>\ 
		  //second div the bottom
		  ;}
		  
		  
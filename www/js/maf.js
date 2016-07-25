var URL = "http://apps.zambientsystems.com:8080"

function previewMenu(){
	var previewUrl = URL+"/MAF/android/registerAppUser.json?appcode=clinic2&email=kiran@gmail.com";
	//$.ajaxSetup({ cache: false });
	$.ajax ({
       url: previewUrl,
       type: "GET",
       success: function(data){
    	   console.log("JSON.stringify===>main"+JSON.stringify(data));
		    if(data.length<1){
	 		   location.reload(true);
	    	}
			 var homehtml="<div class=\"landingPageimageviewpreview\" id=\"person_data\">"
    		   			+"<img id=\"output\" src=\""+URL+data.appDetailsBean.businessDetails.bgImage+"\" style=\"width: 100%; height: 100%;\" /></div>"
    	   				+"<div class=\"home_persondata\">"
    	   				+"<div class=\"Persondetails\" id=\"person_details\">"
    	   				+"<div class=\"menulist_lp\">";
			 $.each(data.appDetailsBean.featuresList,function(key,content){
    		   homehtml=homehtml +"<div class=\"Home\" style=\"background: "+content.color+"!important;\" onclick=\"preview"+content.featureId+"()\">"+content.displayTitle+"</div>";
    	   });
			homehtml=homehtml +"</div></div></div>";
			 $("#pagetitle").text(data.appDetailsBean.businessDetails.appName);
		   $("#infoPhone1_lp").html(homehtml);	
    	   
		   //$("#infoPhone1_lp").html(JSON.stringify(data));
       }
   });
}
function preview1(){
	var previewUrl = URL+"/MAF/android/aboutUs.json?businessId=3&templateId=5&featureId=1&userId=1";
	//$.ajaxSetup({ cache: false });
	$.ajax ({
       url: previewUrl,
       type: "GET",
       success: function(data){
    	   if(data.length<1){
	 		   location.reload(true);
	    	}
    	   //console.log("JSON.stringify1===>"+JSON.stringify(data));
    	   var homehtml="<div class=\"landingPageimageviewpreview\" id=\"person_data\">"
    		   			+"<img id=\"output\" src=\""+URL+data.homeBean.bgImage+"\" style=\"width: 100%; height: 100%;\" /></div>"
    	   				+"<div class=\"home_persondata\">"
    	   				+"<div class=\"Persondetails\" id=\"person_details\">"
    	   				+"<div class=\"glass\"></div><div class=\"aboutusPreview scrollbarview\"><p id=\"aboutUsDiv\"></p></div>"
    	   				+"</div></div>";
    	   //$("#pagetitle").text(data.homeBean.title);
    	   $("#infoPhone1_lp").html(homehtml);
    	   $("#aboutUsDiv").text(data.homeBean.description);
       }
   });
}

function preview3(){
	var previewUrl = URL+"/MAF/android/getServicesList.json?businessId=3&templateId=5&featureId=1&userId=1";
	//$.ajaxSetup({ cache: false });
	$.ajax ({
       url: previewUrl,
       type: "GET",
       success: function(data){
    	   if(data.length<1){
	 		   location.reload(true);
	    	}
    	   //console.log("JSON.stringify===>"+JSON.stringify(data));
    	   var homehtml="<div class=\"mobileviewSerlist\">"
						+"<div id=\"mobileContent\" class=\"content scrollbarview\">"
						+"<ul class=\"mobileviewSerlistul\"></ul></div>"
						+"<div id=\"mobileContentDetail\" class=\"mobileContentDetail\"	style=\"display: none;\" onclick=\"showServiceDescription();\"></div>"
						+"</div>";
    	   //$("#pagetitle").text("Services");
    	   $("#infoPhone1_lp").html(homehtml);
    	   $.each(data.androidServicesList.serviceList,function(key,content){
    		   //var serviceListMobileView ="asdasdasdasd";
    		   var serviceListMobileView ="<li class=\"serviceli\"><div id=\"mobf1_container\"><div class=\"imagefirstser\"><img src=\""+URL+content.image+"\" onclick=\"showServiceDescription('descDiv_"+content.serviceId+"')\" style=\"width:100%;height:100%;\"></div><div class=\"mobsertext1\">"+content.title+"</div> </div></li><div id=\"descDiv_"+content.serviceId+"\" style=\"display: none;\">"+JSON.stringify(content)+"</div>";
    		   $(".mobileviewSerlistul").append(serviceListMobileView);
    	   });
    	   
       }
   });
}

function preview11(){
	var previewUrl = URL+"/MAF/android/getDoctorsList.json?businessId=3&templateId=5&featureId=1&userId=1";
	$.ajaxSetup({ cache: false });
	$.ajax ({
       url: previewUrl,
       type: "GET",
       success: function(data){
    	   if(data.length<1){
	 		   location.reload(true);
	    	}
    	   //console.log("JSON.stringify===>"+JSON.stringify(data));
    	   var homehtml="<div id=\"mobileContent\" class=\"mobilepreviewDrlist scrollbarview\">"
    		   			+"<ul class=\"mobileviewDrlistul\"></ul></div>"
    		   			+"<div id=\"mobileContentDetail\" class=\"mobileContentDetail\" style=\"display: none;\" onclick=\"showDoctorDescription();\"></div>";
    	   $("#pagetitle").text("Our Doctors");
    	   $("#infoPhone1_lp").html(homehtml);
    	   $.each(data.androidDoctorsList.doctorsList,function(key,content){
    		  // doctorListMobileView ="<li class=\"doctorsli\"><div id=\"f1_container\"><div id=\"f1_card\" class=\"shadow\"><div class=\"front face\"><div class=\"firstdoctor\"><div class=\"imagefirstdoc\"><img src=\""+content.image+"\" onclick=\"showDoctorDescription('descDiv_"+content.drId+"')\" style=\"width:100%;height:100%;\"></div><div class=\"doctext1Preview\">"+content.name+"</div> <div class=\"doctext2\">"+content.qualification+"</div></div></div><div class=\"back face\"><div class=\"backimage\"><img src=\"resources/images/PlusImage.jpg\" style=\"width:100%;height:100%;\"/></div><div class=\"backmain\"><div class=\"editdelete\" style=\"background:"+featureColor+"!important;\"><div class=\"edit\" onclick=\"editDoctor("+content.drId+")\">Edit</div><div class=\"delete\" onclick=\"deleteDoctor("+content.drId+")\">Delete</div></div></div></div></div></li><div id=\"descDiv_"+content.drId+"\" style=\"display: none;\">"+JSON.stringify(content)+"</div>";
    		   //doctorListMobileView ="<li class=\"doctorsli\"><div id=\"f1_container\"><div id=\"f1_card\" class=\"shadow\"><div class=\"front face\"><div class=\"firstdoctor\"><div class=\"imagefirstdoc\"><img src=\""+content.image+"\" onclick=\"showDoctorDescription('descDiv_"+content.drId+"')\" style=\"width:100%;height:100%;\"></div><div class=\"doctext1Preview\">"+content.name+"</div> <div class=\"doctext2\">"+content.qualification+"</div></div></div><div class=\"back face\"><div class=\"backimage\"><img src=\"resources/images/PlusImage.jpg\" style=\"width:100%;height:100%;\"/></div><div class=\"backmain\"><div class=\"editdelete\"><div class=\"edit\" onclick=\"editDoctor("+content.drId+")\">Edit</div><div class=\"delete\" onclick=\"deleteDoctor("+content.drId+")\">Delete</div></div></div></div></div></li><div id=\"descDiv_"+content.drId+"\" style=\"display: none;\">"+JSON.stringify(content)+"</div>";
    		   doctorListMobileView ="<li class=\"doctorsli\"><div id=\"f1_container_drliprev\"><img src=\""+URL+content.image+"\" onclick=\"showDoctorDescription('descDiv_"+content.drId+"')\" style=\"width:100%;height:100%;\"><div class=\"doctext1Preview\">"+content.name+"</div> <div class=\"doctext2Preview\">"+content.qualification+"</div></li><div id=\"descDiv_"+content.drId+"\" style=\"display: none;\">"+JSON.stringify(content)+"</div>";
    		   $(".mobileviewDrlistul").append(doctorListMobileView);
    	   });
    	   
       }
   });
}
function preview8(){
	//contact us
	var previewUrl = URL+"/MAF/android/contactUs.json?businessId=3&templateId=5&featureId=1&userId=1";
	$.ajaxSetup({ cache: false });
	$.ajax ({
       url: previewUrl,
       type: "GET",
       success: function(data){
    	   if(data.length<1){
	 		   location.reload(true);
	    	}
    	   //console.log("Contactus data===>"+JSON.stringify(data));
    	   //var color = $("#featureColor").text();
    	   var homehtml="<div class=\"landingPageimageviewpreview\" id=\"person_data\">"
	   			+"<img id=\"output\" src=\""+URL+data.contactUsBean.image+"\" style=\"width: 100%; height: 100%;\" /></div>"
	   			+"<div class=\"persondata_contact\">"
    	   		+"<div class =\"previewbackImg\" style=\"height: 100%!important;\">"
    	   		+"<div id=\"map\" style=\"height: 64%; width: 100%;\"></div>"
    	   		+"<div class=\"glassprecontact\"></div><div class=\"scrollbarview\" style=\"background:transparent;height: 30%; width: 100%;text-align: left;font-size: 14px;padding: 6px;overflow: auto;color: white;position:absolute;\">"
    	   		+"<div class=\"previewcontactcontent\"><span class=\"glyphicon glyphicon-envelope\" style=\"padding: 5px;\"></span>"+data.contactUsBean.email+"</div>"
    	   		+"<div class=\"previewcontactcontent\"><span class=\"glyphicon glyphicon-phone-alt\" style=\"padding: 5px;\"></span>"+data.contactUsBean.mobileNumber+"</div>"
    	   		+"<div class=\"previewcontactcontent\"><span class=\"glyphicon glyphicon-map-marker\" style=\"padding: 5px;\"></span>"+data.contactUsBean.addressLine1+"</div>"
    	   		+"<div class=\"previewcontactcontent\"><span class=\"\" style=\"padding: 5px;\"></span>"+data.contactUsBean.addressLine2+"</div>"
			    +"</div></div>"
			    +"</div>";
    	   //$("#pagetitle").text(data.contactUsBean.title);
    	   $("#infoPhone1_lp").html(homehtml);
    	   //generateGoogleMap(data.contactUsBean.message);
       }
   });
}

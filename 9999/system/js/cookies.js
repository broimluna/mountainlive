//THEMES COOKIES
// *** TO BE CUSTOMISED ***

var style_cookie_name = "mOSTheme" ;
var style_cookie_duration = 30 ;
var style_domain = "" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie_style( style_cookie_name, css_title,
      style_cookie_duration, style_domain );

	localStorage.setItem(style_cookie_name, css_title)
  }
}
function set_style_from_cookie()
{
  var css_title_ls = localStorage.getItem( style_cookie_name )
  if (localStorage.hasOwnProperty('mOSTheme') != -1)  {
	switch_style( css_title_ls );
  }

}
function set_cookie_style ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie_style ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}
//cookies 
function createCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function eraseCookie(name) {
	document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }



  
  function checkBGCookie() {
	if (localStorage.hasOwnProperty('mOSBG') != -1)  {
		var mOSBGLS = localStorage.getItem("mOSBG");
		var base64uncom0 = mOSBGLS.replaceAll("%", "A");
		var base64uncom1 = base64uncom0.replace("ebubjnbhf", "data:image");
		var base64uncom2 = base64uncom1.replace("moslssecurity", "base64");
		var base64uncompressed = base64uncom2.replaceAll("'", "F");
		$('.desktop').css('background', 'url(' + base64uncompressed + ')');

	} else {
		return;		
	}
  }



  function mOSLeftBarCookie() {
  if (localStorage.getItem('mOSLeftBar') === "true")  {
	var taskbar = document.getElementById("taskbar");
	var checkBox = document.getElementById("centrdAppsChk");
	var checkSetup = document.getElementById("centrdAppsChkSetup");
	var appsmenu = document.getElementById("appsmenu");
	var timedate = document.getElementsByClassName("timedate")[0];
	appsmenu.style.margin = "unset";
	taskbar.style.margin = "unset";
	taskbar.style.borderTopLeftRadius = "0px";
	taskbar.style.borderBottomLeftRadius = "0px";
	taskbar.style.borderBottomRightRadius = "0px";
	taskbar.style.bottom = "0px";
	appsmenu.style.bottom = "58px";
	checkBox.checked = "true"
	checkSetup.checked = "true"
  }
}

  function setColorCookie() {
	var cpcolor = localStorage.getItem("mOSColor");
	const winhead = document.getElementsByClassName('windowHeader');
    $(winhead).css('background', cpcolor);
	$('#taskbar').css('background', cpcolor);
	$('.quickfeatures').css('background', cpcolor);
	$('#appsmenu').css('background', cpcolor);
	$('#quickweanews').css('background', cpcolor);
	$('#timedateflyout').css('background', cpcolor);
	$('#htmltemp').css('color', cpcolor);
	$('#watermark').css('color', cpcolor);
	$('#abranding a').css('color', cpcolor);
	$('button').css('border-color', cpcolor);
	$('.checkBox').css('color', cpcolor);
	$('input').css('border-color', cpcolor);
  }
  
  function defaultColorsCookies() {
	localStorage.removeItem("mOSColor")
   };

   

	function CheckFTUEandUsername() {
		if (localStorage.getItem('FTUEStatus') === null)  {
			$("#firstexperience").css("display", "block");
		}
		else {
			void(0);
		}
		if (localStorage.hasOwnProperty('mOSpfp'))  {
			var output = document.getElementsByClassName('pfpimage')[0];
			var setoutput = document.getElementsByClassName('pfpimageset')[0];
			var mOSpfpLS = localStorage.getItem("mOSpfp");
			var base64uncom0 = mOSpfpLS.replaceAll("%", "A");
			var base64uncom1 = base64uncom0.replace("ebubjnbhf", "data:image");
			var base64uncom2 = base64uncom1.replace("moslssecurity", "base64");
			var base64uncompressed = base64uncom2.replaceAll("'", "F");
			output.src = base64uncompressed;
			setoutput.src = base64uncompressed;		
		} else {
			return;		
		}
		var username = localStorage.getItem("mOSUsername");
		document.getElementsByClassName("userProfileTxt")[0].innerText = username;
		document.getElementsByClassName("userProfileTxt")[0].textContent = username;
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = username;
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = username;
	}

	function checkAppTitleOnTskBarCook() {
		if (localStorage.getItem('mOSAppTitleOnTskBar') === "true")  {
			var checkBoxSettings = document.getElementById("AppTitleOnTaskBarPanelChk");
			$(".taskbarPanel").each(function() {
				$(".taskbarPanel").css("fontSize", "17px");
				$(".taskbarPanel img").addClass("taskpanelimg");
				checkBoxSettings.checked = true
			})
		}
	}

	function checkRemoveWidgetStatusTxtCook() {
		if (localStorage.getItem('mOSRemoveWidgetStatusTxt') === "true")  {
			var checkBoxSettings = document.getElementById("RemoveWidgetStatusTxtChk");
			$(".quickweanewsap").css("fontSize", "0px");
			$(".quickweanewsap").css("left", "unset");
			$(".quickweanewsap").css("position", "relative");
			$(".quickweanewsap").css("top", "calc(0% + -27px)");     
			$("#quickweanews").css("margin", "0 auto");                      
			$("#quickweanews").css("left", "0");                    
		checkBoxSettings.checked = true
		}
	}

  function startCookies() {
	mOSLeftBarCookie();
	checkRemoveWidgetStatusTxtCook();
	checkAppTitleOnTskBarCook();
	setColorCookie();
	set_style_from_cookie();
	CheckFTUEandUsername();
	checkBGCookie();

  }

  function resetAllCookies() {
	localStorage.removeItem("mOSColor");
	localStorage.removeItem("mOSUsername");
	localStorage.removeItem("mOSpfp");
	localStorage.removeItem("FTUEStatus");
	localStorage.removeItem("mOSLeftBar");
	localStorage.removeItem("mOSBG");
	localStorage.removeItem("mOSAppTitleOnTskBar");
	localStorage.removeItem("mOSTheme");
	alert("Settings have been deleted.")
  }


   

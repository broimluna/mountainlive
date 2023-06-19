function openTab(tabName) {
	var i;
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

	window.addEventListener('load', function () {

		// Get the container element
var btnContainer = document.getElementById("tabsettings");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("settingsbutton");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("currentst");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" currentst", "");
    }

    // Add the active class to the current/clicked button
    this.className += " currentst";
  });
}
});
setInterval(function() {
	$(".currentst").each(function() {
	var datatitle = $(this).attr("data-title") + " - Settings";
	document.getElementsByClassName("cpapptitle")[0].innerText = datatitle;
	});
}, 1);
 



	//var changeBG = function(event) {
	//	var output = document.getElementsByClassName('desktop')[0];
	//	output.style.background= "url("+URL.createObjectURL(event.target.files[0])+")";
	//  };

	var changeBG = function(event) {
        var output = document.getElementsByClassName('desktop')[0];
        var blob = event.target.files[0]

var reader = new FileReader();

reader.readAsDataURL(blob); 
reader.onloadend = function() {
    var base64data = reader.result;                
	var base64com0 = base64data.replaceAll("A", "%");
	var base64com1 = base64com0.replace("data:image", "ebubjnbhf");
	var base64com2 = base64com1.replace("base64", "moslssecurity");
	var base64fullcom = base64com2.replaceAll("F", "'");
    console.log(base64fullcom);
    output.style.background= "url("+base64data+")";
    localStorage.setItem("mOSBG", base64fullcom);
    return;
}
      };

	  var changePFP = function(event) {
        var output = document.getElementsByClassName('pfpimage')[0];
		var setoutput = document.getElementsByClassName('pfpimageset')[0];
        var blob = event.target.files[0]

var reader = new FileReader();

reader.readAsDataURL(blob); 
reader.onloadend = function() {
    var base64data = reader.result;                
	var base64com0 = base64data.replaceAll("A", "%");
	var base64com1 = base64com0.replace("data:image", "ebubjnbhf");
	var base64com2 = base64com1.replace("base64", "moslssecurity");
	var base64fullcom = base64com2.replaceAll("F", "'");
    output.src = base64data;
	setoutput.src = base64data;
    localStorage.setItem("mOSpfp", base64fullcom);
    return;
}
      };
	
	  var resetBG = function(event) {
		var output = document.getElementsByClassName('desktop')[0];
		output.style.background= "";
		localStorage.removeItem("mOSBG");
	  }
	  function localBG() {
		document.getElementsByClassName('desktop')[0].style.background = "url('https://bing.biturl.top/?resolution=3840&format=image&index=0&mkt=en-CA')";
		localStorage.setItem("mOSBG", "https://bing.biturl.top/?resolution=3840&format=image&index=0&mkt=en-CA");
	}
	
	
	  function defaultColors() {
		const winhead = document.getElementsByClassName('windowHeader');
		$(winhead).css('background', '');
		$('#taskbar').css('background', '');
		$('.quickfeatures').css('background', '');
		$('#appsmenu').css('background', '');
		$('#quickweanews').css('background', '');
		$('#timedateflyout').css('background', '');
		$('#htmltemp').css('color', '');
		$('#watermark').css('color', '');
		$('#abranding a').css('color', '');
		$('button').css('border-color', '');
		$('.checkBox').css('color', '');
		$('input').css('border-color', '');
	  }


	  

	  function setUsrSet() {
		var usrInpt = document.getElementById("usrsetinpt").value;
		if ( $('#usrsetinpt').val() === "" ) 
	{
		localStorage.setItem("mOSUsername", "User")
		document.getElementsByClassName("userProfileTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileTxt")[0].textContent = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = "User";
		document.getElementsByClassName("qwnheader")[0].innerText = "User";
		document.getElementsByClassName("qwnheader")[0].textContent = "User";
	}
	else {
	document.getElementsByClassName("userProfileTxt")[0].innerText = usrInpt;
	document.getElementsByClassName("userProfileTxt")[0].textContent = usrInpt;
	document.getElementsByClassName("userProfileSetTxt")[0].innerText = usrInpt;
	document.getElementsByClassName("userProfileSetTxt")[0].textContent = usrInpt;
	document.getElementsByClassName("qwnheader")[0].innerText = usrInpt;
	document.getElementsByClassName("qwnheader")[0].textContent = usrInpt;
	
	
	localStorage.setItem("mOSUsername", usrInpt)
	  }
	}
	function addAppTitleTaskbar() {
		var checkBox = document.getElementById("AppTitleOnTaskBarPanelChk");
		
		if(checkBox.checked == true) {
		$(".taskbarPanel").each(function() {
			$(".taskbarPanel").css("fontSize", "17px");
			$(".taskbarPanel img").addClass("taskpanelimg");
			localStorage.setItem("mOSAppTitleOnTskBar", "true")
		})
	}
		else {
			$(".taskbarPanel").each(function() {
				$(".taskbarPanel").css("fontSize", "0px");
				$(".taskbarPanel img").removeClass("taskpanelimg");
				localStorage.setItem("mOSAppTitleOnTskBar", "false")
			})
		}
	}
	function addAppTitleTaskbarStp() {
		var checkBox = document.getElementById("AppTitleOnTaskBarPanelStp");
		var checkBoxSettings = document.getElementById("AppTitleOnTaskBarPanelChk");
		
		if(checkBox.checked == true) {
		$(".taskbarPanel").each(function() {
			$(".taskbarPanel").css("fontSize", "17px");
			$(".taskbarPanel img").addClass("taskpanelimg");
			localStorage.setItem("mOSAppTitleOnTskBar", "true")
			checkBoxSettings.checked = true
		})
	}
		else {
			$(".taskbarPanel").each(function() {
				$(".taskbarPanel").css("fontSize", "0px");
				$(".taskbarPanel img").removeClass("taskpanelimg");
				localStorage.setItem("mOSAppTitleOnTskBar", "false")
				checkBoxSettings.checked = false
			})
		}
	}
	
	function RemoveWidgetStatusTxt() {
		var checkBox = document.getElementById("RemoveWidgetStatusTxtChk");
		
		if(checkBox.checked == true) {
			$(".quickweanewsap").css("fontSize", "0px");
			$(".quickweanewsap").css("left", "unset");
			$(".quickweanewsap").css("position", "relative");
			$(".quickweanewsap").css("top", "calc(0% + -27px)");     
			$("#quickweanews").css("margin", "0 auto");                      
			$("#quickweanews").css("left", "0");                      
			localStorage.setItem("mOSRemoveWidgetStatusTxt", "true")
	}
		else {
			$(".quickweanewsap").css("fontSize", "");
			$(".quickweanewsap").css("left", "");
			$(".quickweanewsap").css("position", "");
			$(".quickweanewsap").css("top", "");   
			$("#quickweanews").css("margin", "");                      
			$("#quickweanews").css("left", ""); 
			localStorage.setItem("mOSRemoveWidgetStatusTxt", "false")
			
		}
	}
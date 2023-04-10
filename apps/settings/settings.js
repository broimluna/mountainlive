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
	var datatitle = $(this).attr("data-title") + " - Control Panel";
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
    console.log(base64fullcom);
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
		document.getElementsByClassName('desktop')[0].style.background = "url('system/img/bg.png')";
		localStorage.setItem("mOSBG", "system/img/bg.png");
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
	  }
	  

	  function setUsrSet() {
		var usrInpt = document.getElementById("usrsetinpt").value;
		if ( $('#usrsetinpt').val() === "" ) 
	{
		document.cookie = "mOSUsername=User"
		localStorage.setItem("mOSUsername", "User")
		document.getElementsByClassName("userProfileTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileTxt")[0].textContent = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = "User";
	}
	else {
	document.getElementsByClassName("userProfileTxt")[0].innerText = usrInpt;
	document.getElementsByClassName("userProfileTxt")[0].textContent = usrInpt;
	document.getElementsByClassName("userProfileSetTxt")[0].innerText = usrInpt;
	document.getElementsByClassName("userProfileSetTxt")[0].textContent = usrInpt;
	
	
	document.cookie = "mOSUsername=" + usrInpt
	localStorage.setItem("mOSUsername", usrInpt)
	  }
	}
	
	
	
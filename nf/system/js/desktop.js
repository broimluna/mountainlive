
window.addEventListener('load', function () {
    $("#startup").fadeOut();
	var kernelver = document.getElementsByClassName("kernelver")[0];
	kernelver.innerText = kernel_version;
	var buildnumb = document.getElementsByClassName("buildnumb")[0];
	buildnumb.innerText = kernel_version + "." + build_number;
})
function startupLoad() {
    startDate();
    quiloadWeather();
	startCookies();
}


//right click menu huh
document.oncontextmenu = rightClick;
  
  function rightClick(clickEvent) {
	  clickEvent.preventDefault();
	  // return false;
  }
  document.onclick = hideMenu;
  document.oncontextmenu = rightClick;
	
  function hideMenu() {
	  document.getElementById("contextMenu")
			  .style.display = "none"
  }

  function rightClick(e) {
	  e.preventDefault();

	  if (document.getElementById("contextMenu")
			  .style.display == "block")
		  hideMenu();
	  else{
		  var menu = document.getElementById("contextMenu")

		  menu.style.display = 'block';
		  menu.style.left = e.pageX + "px";
		  menu.style.top = e.pageY + "px";
	  }
  }

  function activatefull(ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	}
}

// Function for full screen activation
function deactivatefull() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
}
//

function finishFTUE() {
	var usrInpt = document.getElementById("usrinpt").value;
	$("#firstexperiencewindow").fadeOut(200);
	$(".backgroundftue").fadeOut(200);
	document.getElementsByClassName("FTUEtext")[0].innerText = "Let's begin.";
	setTimeout(function() {$("#firstexperience").fadeOut(200);}, 2000);
	if ( $('#usrinpt').val() === "" ) 
	{
		document.cookie = "FTUEStatus=completed"
		localStorage.setItem("FTUEStatus", "completed")
		document.cookie = "mOSUsername=User"
		localStorage.setItem("mOSUsername", "User")
		document.getElementsByClassName("userProfileTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileTxt")[0].textContent = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = "User";
	}
	else {
		document.cookie = "mOSUsername=" + usrInpt
		localStorage.setItem("mOSUsername", usrInpt)
		document.cookie = "FTUEStatus=completed"
		localStorage.setItem("FTUEStatus", "completed")
		document.getElementsByClassName("userProfileTxt")[0].innerText = usrInpt;
		document.getElementsByClassName("userProfileTxt")[0].textContent = usrInpt;
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = usrInpt;
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = usrInpt;
	}
}

//Alerts
window.alert = function(msg){
	$('.alertxt').text(msg);
	$('.window12').css('animation', 'fadeIn 0.3s linear');
	$('.window12').css('display', 'inline');
	setTimeout(function(){
	  $('.window12').css('animation', 'none');
	}, 300);
  }
  
  $(function(){
	
	// add listener for when our confirmation button is clicked
	  $('.confirmButton').click(function(){
	  $('.window12').css('animation', 'fadeOut 0.3s linear');
	  setTimeout(function(){
	  $('.window12').css('animation', 'none');
	  $('.window12').css('display', 'none');
	  }, 300);
	})
  });

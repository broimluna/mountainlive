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
	$("#firstexperience").fadeOut(200);
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
	$('#window11').css('animation', 'fadeIn 0.3s linear');
	$('#window11').css('display', 'inline');
	setTimeout(function(){
	  $('#window11').css('animation', 'none');
	}, 300);
  }
  
  $(function(){
	
	// add listener for when our confirmation button is clicked
	  $('.confirmButton').click(function(){
	  $('#window11').css('animation', 'fadeOut 0.3s linear');
	  setTimeout(function(){
	  $('#window11').css('animation', 'none');
	  $('#window11').css('display', 'none');
	  }, 300);
	})
  });

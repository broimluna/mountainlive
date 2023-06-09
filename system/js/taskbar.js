$(document).ready(function(){
	var appsearch = document.getElementById("appSearch");
	$("#appicons").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
		document.getElementById("appsmenu").classList.toggle("openedtop");
		appsearch.value = '';
		$("#appicons li").css('display', 'block')
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
		document.getElementById("appsmenu").classList.remove("openedtop");
		document.getElementById("appsBtn").classList.remove("active");
		appsearch.value = '';
		tasksearch.value = '';
		$("#appicons li").css('display', 'block')

	});
  $("#settingsUP").click(function(){
    document.getElementById("appsmenu").classList.toggle("opened");
	document.getElementById("appsmenu").classList.toggle("openedtop");
	appsearch.value = '';
	tasksearch.value = '';
    }, function(){
    document.getElementById("appsmenu").classList.remove("opened");
	document.getElementById("appsmenu").classList.remove("openedtop");
	document.getElementById("appsBtn").classList.remove("active");
	appsearch.value = '';

  });
  });




function appSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("appSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("appicons");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
	document.getElementById("appsmenu").classList.add("opened");

}
function taskSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("taskSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("appicons");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
	document.getElementById("appsmenu").classList.add("openedtop");

}



function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
	document.getElementById("appsBtn").classList.toggle("active");
}
function quickweanewstoggle() {
	document.getElementById("quickweanews").classList.toggle("opened");
	document.getElementsByClassName("quickweanewsap")[0].classList.toggle("active");
}
function timedatetoggle() {
	document.getElementById("timedateflyout").classList.toggle("opened");
	document.getElementsByClassName("timedatetext")[0].classList.toggle("active");
}

function startDate(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    var date = new Date();
	var d = date.getDate();
	var mOld = date.getMonth() + 1;
  var m = monthNames[date.getMonth()];
	var y = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
	d = (d < 10) ? "0" + d : d;
  m = (m < 10) ? "0" + m : m;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

    var date = hour + ":" + minute + " • " + m + " " + d + ", " + y
    document.getElementsByClassName("timedatetext")[0].innerText = date;
    document.getElementsByClassName("timedatetext")[0].textContent = date;
	var quidate = hour + ":" + minute + ":" + seconds + " on " + m + " " + d + ", " + y
	document.getElementById("quitime").innerText = quidate;
    document.getElementById("quitime").textContent = quidate;
    setTimeout(startDate, 1000);
}

//Quick Features
function quiloadWeather() {
		var weather = $('.quickweanewsap')
		var quiweather = $('#quiweather')
		var quiweathertxt = $('.quiweathertxt')
		var api = 'https://api.weatherapi.com/v1/current.json' // OpenWeather API url
		var apikey = "8fa374a51e304822a0132755230906"; 
	
	
		
		$.getJSON(api + "?key=" + apikey + "&q=auto:ip&aqi=no", function(data) {
		// JSON result in `data` variable
		console.log(data)
	
		var iconurl = "https:" + data.current.condition.icon;
	
	
		if (data.current.temp_c < -10) {
			var weatherstatus = "Very cold outside."
		}
		else {
			if (data.current.temp_c < -0 ) {
				var weatherstatus = "Cooling down."
			} 
		else {
			if (data.current.temp_c < 0 ) {
				var weatherstatus = "Cold outside."
			}
		
		else {
			if (data.current.temp_c < 5 ) {
				var weatherstatus = "Cold, but heating up."
			}
		else {
			if (data.current.temp_c < 10 ) {
				var weatherstatus = "Good temperature."
			}
		else {
			if (data.current.temp_c < 15 ) {
				var weatherstatus = "Heating up."
			}
		else {
			if (data.current.temp_c < 20 ) {
				var weatherstatus = "Hot outside."
			}
			else {
				if (data.current.temp_c < 30 ) {
					var weatherstatus = "Getting even hotter."
				}
				
		
		else {
			if (data.current.temp_c < 35 ) {
				var weatherstatus = "Hot outside, go in a pool!"
			}
		}
	}
	}
	}
	}
	} 
	}
	}
		weather.html(
			'<a><img src='+iconurl+' style="vertical-align: middle;" width="46" height="46"></img></a>' + Math.round(data.current.temp_c) + '°C, ' + data.current.condition.text
		)
		quiweather.html(
		 Math.round(data.current.temp_c) + '°C, ' + data.current.condition.text
		)
	}
		)
	
	
	
	
	
	
	
	}
	

function quiloadDate() {
    var currentDate = new Date()
    var dateString = currentDate
        .toString()
        .split(' ')
        .splice(0, 4)
        .join(' ')

    $('#quidate').text(dateString)
}

function addAppTitleTaskbar() {
	var checkBox = document.getElementById("AppTitleOnTaskBarPanelChk");
	
	if(checkBox.checked == true) {
	$(".taskbarPanel").each(function() {
		$(".taskbarPanel").css("fontSize", "17px");
		$(".taskbarPanel img").addClass("taskpanelimg");
		document.cookie = "mOSAppTitleOnTskBar=true" +
		localStorage.setItem("mOSAppTitleOnTskBar", "true")
	})
}
	else {
		$(".taskbarPanel").each(function() {
			$(".taskbarPanel").css("fontSize", "0px");
			$(".taskbarPanel img").removeClass("taskpanelimg");
			document.cookie = "mOSAppTitleOnTskBar=false" +
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
		document.cookie = "mOSAppTitleOnTskBar=true" +
		localStorage.setItem("mOSAppTitleOnTskBar", "true")
		checkBoxSettings.checked = true
	})
}
	else {
		$(".taskbarPanel").each(function() {
			$(".taskbarPanel").css("fontSize", "0px");
			$(".taskbarPanel img").removeClass("taskpanelimg");
			document.cookie = "mOSAppTitleOnTskBar=false" +
			localStorage.setItem("mOSAppTitleOnTskBar", "false")
			checkBoxSettings.checked = false
		})
	}
}


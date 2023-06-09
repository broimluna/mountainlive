$(document).ready(function(){
	var appsearch = document.getElementById("appSearch");
	$(".applist").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
		appsearch.value = '';
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
		document.getElementById("appsBtn").classList.remove("active");
		appsearch.value = '';

	});
  $("#settingsUP").click(function(){
    document.getElementById("appsmenu").classList.toggle("opened");
	appsearch.value = '';
    }, function(){
    document.getElementById("appsmenu").classList.remove("opened");
	document.getElementById("appsBtn").classList.remove("active");
	appsearch.value = '';

  });
  });





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
function appSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("appSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementsByClassName("applist")[0];
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

function newWeatherAPI() {
	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fa374a51e304822a0132755230906',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
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




function quiloadWeather2() {
		var weather = $('.quickweanewsap')
		var quiweather = $('#quiweather')
		var quiweathertxt = $('.quiweathertxt')
		var weaurl = 'https://api.weatherapi.com/v1/current.json' // OpenWeather API url

		const apikeys = "8fa374a51e304822a0132755230906"; 
		console.log(apikeys);


		function success() {


			$.getJSON(
				weaurl + '?key=' + apikeys + '&q=auto:ip&aqi=no',
            function(data) {
				
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
                    "<a><img src='system/img/icons/widgets.png' style='vertical-align: middle;' width='46' height='46'></img></a>" + Math.round(data.current.temp_c) + '°C, ' + weatherstatus
                )
				quiweather.html(
                 Math.round(data.current.temp_c) + '°C outside, ' + weatherstatus
                )
            }
        )
    }

    function error() {
		weather.html("<a><img src='system/img/icons/widgets.png' style='vertical-align: middle;' width='46' height='46'></img></a>" +"Couldn't fetch weather...")
		quiweathertxt.html('Unable to retrieve your location for weather')
	}


    navigator.geolocation.getCurrentPosition(success, error)

    weather.html("<a><img src='system/img/icons/widgets.png' style='vertical-align: middle;' width='46' height='46'></img></a>" + 'Fetching current weather...')
	quiweather.html('fetching the weather...')
	
}






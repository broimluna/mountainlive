var kernelver = "4.0";
var buildnumb = "8000";
var iframei = 0
var i = 0,
minimizedWidth = new Array,
minimizedHeight = new Array,
windowTopPos = new Array,
windowLeftPos = new Array,
panel,
id;


	window.addEventListener('load', function () {
		$("#startup").fadeOut();
		//Kernel Write
		var kerver = document.getElementsByClassName("kernelver")[0];
		kerver.innerText = kernelver;
		//Build write
		var buildnumber = document.getElementsByClassName("buildnumb")[0];
		buildnumber.innerText = buildnumb;
		//Watermark Stamp
		let nLastModif = document.lastModified;
		var watermark = document.getElementById("watermark")
		watermark.innerText = "Luna's mountainOS\n Build " + buildnumb + "\nCompiled on " + nLastModif;
		
})

//Startup Functions 
function startupFunctions() {
	startDate();
	quiloadWeather();
	quiloadDate();
	startCookies();
}

if (/^h/.test(document.location)) {
	setInterval(function() {
		// method to be executed;
		$(".iframe").each(function() {
			var dataId = $(this).attr("data-id");
			var datatitle = document.getElementsByClassName("iframe")[dataId].contentDocument.title;
			document.getElementsByClassName("winheadstrongtitle")[dataId].innerText = datatitle;
	
		});
	  }, 1500);
  } else {
	void(0);
  }




function adjustFullScreenSize() {
	$(".fullSizeWindow .wincontent").css("width", (window.innerWidth - 32));
	$(".fullSizeWindow .wincontent").css("height", (window.innerHeight - 98));
	setTimeout(adjustFullScreenSize, 10);
}
function makeWindowActive(thisid) {
	$(".window").each(function() {      
		$(this).css('z-index', $(this).css('z-index') - 1);
	});
	$("#window" + thisid).css('z-index',1000);
	$(".window").removeClass("activeWindow");
	$("#window" + thisid).addClass("activeWindow");
	
	$(".taskbarPanel").removeClass('activeTab');
	
	$("#minimPanel" + thisid).addClass("activeTab");
}

function minimizeWindow(id){
	windowTopPos[id] = $("#window" + id).css("top");
	windowLeftPos[id] = $("#window" + id).css("left");
	
	$("#window" + id).animate({
		opacity: 0
	}, 200, function() {		//animation complete
		$("#window" + id).addClass('minimizedWindow');
		$("#minimPanel" + id).addClass('minimizedTab');
		$("#minimPanel" + id).removeClass('activeTab');
	});	
}

function openWindow(id) {
	if ($('#window' + id).hasClass("minimizedWindow")) {
		$("#window" + id).animate({
			opacity: 1
		}, 200, function() {
		openMinimized(id);
		})
	} else {
		$("#window" + id).animate({
			opacity: 1
		}, 1, function() {	
		makeWindowActive(id);
		$("#window" + id).removeClass("closed");
		$("#minimPanel" + id).removeClass("closed");
		});
	}
}
function closeWindow(id) {
	$("#window" + id).animate({
		opacity: 0
	}, 200, function() {
	$("#window" + id).addClass("closed");
	$("#minimPanel" + id).addClass("closed");
	});
}

function openMinimized(id) {
	$('#window' + id).removeClass("minimizedWindow");
	$('#minimPanel' + id).removeClass("minimizedTab");
	makeWindowActive(id);
		
	$('#window' + id).animate({
		top: windowTopPos[id],
		left: windowLeftPos[id],
		opacity: 1
	}, 200, function() {
	});				
}

$(document).ready(function(){
	$(".window").each(function() {      		// window template
		$(this).css('z-index',1000)
		$(this).attr('data-id', i);
		minimizedWidth[i] = $(this).width();
		minimizedHeight[i] = $(this).height();
		windowTopPos[i] = $(this).css("top");
		windowLeftPos[i] = $(this).css("left");
		$("#taskbar").append('<div class="taskbarPanel" id="minimPanel' + i + '" data-id="' + i + '">' + $(this).attr("taskicon") + $(this).attr("data-title") + '</div>');
		if ($(this).hasClass("closed")) {	$("#minimPanel" + i).addClass('closed');	}		
		$(this).attr('id', 'window' + (i++));
		$(this).wrapInner('<div class="wincontent"></div>');
		$(this).prepend('<div class="windowHeader"><strong>' + $(this).attr("headicon") + $(this).attr("data-title") + '</strong><span title="Minimize" class="winminimize"><span></span></span><span title="Maximize" class="winmaximize"><span></span><span></span></span><span title="Close" class="winclose">x</span></div>');
	});

	$(".iframe").each(function() {
		$(this).attr('data-id', iframei);
		iframei++;
	});
	
	$("#minimPanel" + (i-1)).addClass('activeTab');
	$("#window" + (i-1)).addClass('activeWindow');
	
	$( ".wincontent" ).resizable();			// resizable
	
	$( ".window" ).draggable({ cancel: ".wincontent", iframeFix: true});	// draggable
	

    $(".window").mousedown(function(){		// active window on top (z-index 1000)
		makeWindowActive($(this).attr("data-id"));
    });
	

	$(".winclose").click(function(){
		var dataId = $(this).parent().parent().attr("data-id");
		closeWindow(dataId);
		setTimeout(function() {
			document.getElementsByClassName('iframe')[dataId].src = document.getElementsByClassName('iframe')[dataId].src;
		}, 500);
	});
	
	

    $(".winminimize").click(function(){		// minimize window
		minimizeWindow($(this).parent().parent().attr("data-id"));
    });	
	
    $(".taskbarPanel").click(function(){		// taskbar click
		id = $(this).attr("data-id");
		if ($(this).hasClass("activeTab")) {	// minimize if active
			minimizeWindow($(this).attr("data-id"));
		} else {
			if ($(this).hasClass("minimizedTab")) {	// open if minimized
				openMinimized(id);
			} else {								// activate if inactive
				makeWindowActive(id);
			}
		}
    });	
	
    $(".openWindow").click(function(){		// open closed window
		openWindow($(this).attr("data-id"));
    });
	$(".reloadWindow").click(function(){	
		var dataId = $(this).attr("data-id");
		var window = document.getElementsByClassName('wincontent')[dataId].innerHTML;
        document.getElementsByClassName('wincontent')[dataId].innerHTML = window;
    });

	
    $(".winmaximize").click(function(){
		if ($(this).parent().parent().hasClass('fullSizeWindow')) {			// minimize
			
			$(this).parent().parent().removeClass('fullSizeWindow');
			$(this).parent().parent().children(".wincontent").height(minimizedHeight[$(this).parent().parent().attr("data-id")]);	
			$(this).parent().parent().children(".wincontent").width(minimizedWidth[$(this).parent().parent().attr("data-id")]);
		} else {															// maximize
			$(this).parent().parent().addClass('fullSizeWindow');
			
			minimizedHeight[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").height();
			minimizedWidth[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").width();
			
			adjustFullScreenSize();
		}
	
    });		
	adjustFullScreenSize();	
});
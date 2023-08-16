var dataid = 0
var windowid = 1
window.addEventListener('load', function () {
    $("#startup").fadeOut();
})
function startupLoad() {
    startDate();
    quiloadWeather();
}

$(document).ready(function(){
	$("window").each(function() {   
        $(this).attr('data-id', dataid + 1);
        $(this).attr('class', 'window' + windowid);
        dataid++
        windowid++
        $(this).draggable({ cancel: ".wincontent", iframeFix: true});	// draggable
		$("taskbar").append('<taskbarapp onclick="toggletb('+dataid+')" id="minimPanel' + dataid + '" data-id="' + dataid + '">' + $(this).attr("data-title") + '</taskbarapp>');
        $(this).wrapInner('<div class="wincontent"></div>');
        $(this).prepend('<windowHeader><strong>' + $(this).attr("data-title") + '</strong><span title="Minimize" class="winminimize">_</span><span title="Maximize" class="winmaximize">&#9634;</span><span title="Close" class="winclose">x</span></windowheader><br>');
    })
    $(".wincontent").each(function() {
        $(this).resizable();			// resizable
    })
    $("window").each(function() {   
        $(".winclose").click(function(){
            var window = this.parentElement.parentElement;
            this.parentElement.parentElement.style.display = "none";
            var dataidtb = $(window).attr("data-id");
            $("#minimPanel" + dataidtb).css("display", "none");
        });

        $(".winminimize").click(function(){
            var window = this.parentElement.parentElement;
            var dataidmin = $(window).attr("data-id");
            $(window).addClass("closed")
            $("#minimPanel" + dataidmin).removeClass("active")

        });

    })
     
    $(document).ready(function(){  
        if ($(window).hasClass('fullSizeWindow')) {
            $(".winmaximize").click(function(){
            var window = this.parentElement.parentElement;
            $(window).removeClass('fullSizeWindow');
            });
          }
        else {
            $(".winmaximize").click(function(){
                var window = this.parentElement.parentElement;
                $(window).toggleClass('fullSizeWindow');
            })

        }

    });
})

    



function toggletb(dataiddd) {
        $(".window" + dataiddd).toggleClass("closed")
        $("#minimPanel" + dataiddd).toggleClass("active")
}

function openWindow(id) {
    $("#minimPanel" + id).css("display", "inline");
    $("#minimPanel" + id).addClass("active");
    $(".window" + id).css("display", "block");
}










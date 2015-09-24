// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
    hcaSetPosition();

});

$(window).resize(function() {
    hcaSetPosition();

});

function hcaSetPosition()
{
    if($(document).width() < 768)
    {
        $(".hcw-responsive-swap .hcw-image-block").each(function() {
            $ia = $(this).parent().find(".hcw-text-block")
            $(this).remove().insertAfter($ia);
        });
    } else {

         $(".hcw-responsive-swap .hcw-image-block").each(function() {
            $ia = $(this).parent().find(".hcw-text-block")
            $(this).remove().insertBefore($ia);
        });
        //$("#hca-secondrow .hcw-image-block").remove().insertBefore($("#hca-secondrow .hcw-text-block"));
    }  
}

$('#request-invite').click(function(){
    var mail = $('#signupemail').val();

    if(isValidEmailAddress(mail))
    {  
        $('#request-invite').val('Requesting...');
        $.get("dynamic/invite.php?mail=" + mail, function (data)
            {
                // lets discard the data for now since its not useful to the user
                $('#request-invite').val('Requested, Thanks!').removeClass('btn-default').addClass('btn-success');
            });
    }
    else
    {
        alert("Please enter a valid e-mail address!");
    }


});


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};
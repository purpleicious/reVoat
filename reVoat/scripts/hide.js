// add hide/unhide buttons
$( ".flat-list.buttons" ).append("<li><span class='option main active'><a href='javascript:void(0)' class='togglebutton savelink' onclick='hideOn(this)'>hide</a></span></li>");

$( "<span class='separator'>|</span><a href='javascript:void(0)' onclick='hideOff()' title='Unhide all hidden things'>unhide</a>" ).insertAfter($(".user").first());
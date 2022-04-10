function slide2down_arrow1_hide(){
    document.getElementById("drop_down_arrow1_hide_id").style.display="none";
    document.getElementById("drop_down_arrow1_show_id").style.display="block";
    document.getElementById("slide2_subwrapper1_div2").style.display="none";
}
function slide2down_arrow1_show(){
    document.getElementById("drop_down_arrow1_hide_id").style.display="block";
    document.getElementById("drop_down_arrow1_show_id").style.display="none";
    document.getElementById("slide2_subwrapper1_div2").style.display="block";
}
/*--------------------------------------------*/

function slide2down_arrow2_show(){
    document.getElementById("drop_down_arrow2_hide_id").style.display="block";
    document.getElementById("drop_down_arrow2_show_id").style.display="none";
    document.getElementById("slide2_subwrapper2_div2").style.display="block";
}
function slide2down_arrow2_hide(){
    document.getElementById("drop_down_arrow2_hide_id").style.display="none";
    document.getElementById("drop_down_arrow2_show_id").style.display="block";
    document.getElementById("slide2_subwrapper2_div2").style.display="none";
}

/*----------------------------------NAV BAR---------------------------*/

function menu_show(){
    document.getElementById("menu_show").style.display="none";
    document.getElementById("menu_hide").style.display="block";
    document.getElementById("nav_wrapper_links").style.display="block";
}
function menu_hide(){
    document.getElementById("menu_show").style.display="block";
    document.getElementById("menu_hide").style.display="none";
    document.getElementById("nav_wrapper_links").style.display="none";
}
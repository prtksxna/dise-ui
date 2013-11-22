$(function(){
    $(".filter-icon").tooltip();
    $("table.filter-icon-set td").click(function(){
	    $(this).toggleClass("selected");
    });

    $("#presets li").click(function(){
	    $("#presets li").removeClass("active");
	    $(this).addClass("active");
    });
});

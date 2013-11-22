$(function(){
    $(".filter-icon").tooltip();
    $("table.filter-icon-set td").click(function(){
	    $(this).toggleClass("selected");
    });

    $("#presets li").click(function(){
	    $("#presets li").removeClass("active");
	    $(this).addClass("active");
    });

    $(".reset_preset").tooltip();

    $(".reset_preset").click(function(e){
        if(!confirm("Are you sure? This action cannot be undone!")) return false;
    });
});

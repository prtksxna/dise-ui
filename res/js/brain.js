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

    $("#presets li .glyphicon-cog").click(function(){
        $("#preset-editor").toggleClass("activate");
    });

    $("#control_toggle").click(function(e){
        $("#controls").toggleClass("hidden_controls");
        $("#control_toggle").toggleClass("flip");
    });


    // Breadcrumbs coloring and z-index
    var class_array = ["a", "b", "c", "d", "e"]
    $("ol.top-breadcrumbs li").each(function(i, e){
        $(e).addClass(class_array[i]);
    });

    // Sliders
    $(".range-slider").slider({
        range: true,
        min: 0,
        max: 30,
        values: [10,20]
    });
});

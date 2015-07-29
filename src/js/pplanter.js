
/**********************************************

Title: JS file for pplanter
Author: AV, JS
Date: July 2015

Check PPlanter git repository for more details

***********************************************/


// Patch snap to provide toBack & toFront
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype;
    elproto.toFront = function () {
        this.prependTo(this.paper);
    };
    elproto.toBack = function () {
        this.appendTo(this.paper);
    };
});

// Utility functions




function showOverlay( overlay_id ){
    var overlays = $('#overlays').children()
    overlays.each( function( i, overlay ){
        if( overlay.id != overlay_id){
            $(overlay).addClass('hidden');
        }
        else{
            $(overlay).removeClass('hidden');
        }
    });
}

function mouseoverHandler(e){
    Snap(e.target).animate({fill: "red", opacity: 0.5}, 500);
}

function mouseoutHandler(e){
    Snap(e.target).animate({ fill: "#FFFFFF", opacity: 0}, 500);
}

function clickHandler(e){
    // console.log(e.target)
    showOverlay( e.target.id+"_overlay" );
}

function makeProjectDiagram(){
    // Oooooohh snap!
    var s = Snap("#project_diagram");

    // Resize svg to fit div container
    s.attr({"width": "100%", "height": "100%" , "viewBox": "0 0 1280 1020"});

     areas = s.select('#areas');
    // Elements in the back of the SVG intercept click events
    areas.toBack();
    areas.selectAll("*").forEach( function(area){
        // Elements only intercept click events if they're filled
        area.attr({ fill: "#FFFFFF", opacity: 0});
        // Assign handlers
        area.mouseover( mouseoverHandler );
        area.mouseout( mouseoutHandler );
        area.click( clickHandler );

    })
}

// OnLoad functions

function indexReady(){
    $( "div.site-wrapper" ).toggleClass( "img-bk" );
    console.log("index ready!!!!")
}

function contactReady(){
    console.log("contact ready!!!!")
}

function projectReady(){
    console.log("project ready!!!!")
    // Hide all overlays
    showOverlay( null );
    // Colors the site
    $( "div.site-wrapper" ).toggleClass( "project-color" );
    // Colors the footer
    $( "footer.mastfoot" ).parent().toggleClass( "project-color" );
    makeProjectDiagram();
}

function storyReady(){
    console.log("story ready!!!!")
}
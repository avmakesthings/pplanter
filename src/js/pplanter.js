
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

// Globals for diagram animation
var showAtts = {fill: "red", opacity: 0.5 , stroke: "#FFF", strokeWidth: 10}
var hideAtts = {fill: "#FFFFFF", opacity: 0 , stroke: "#FFF", strokeWidth: 10}
var keyframe = 500

function diagramIntroAnimation( areas ){
    var delay = 1000;

    // Sequentially reveal each overlay and highlight each area
    areas.selectAll("*").forEach( function(area, i){
        setTimeout( function(){ 
            console.log("area #" + i);
            area.animate(showAtts, keyframe*4, null, function(){
                // showOverlay( area.node.id+"_overlay" );
                $( '#overlays' ).children( "#" + area.node.id + "_overlay" ).removeClass('hidden');
                area.animate(hideAtts, keyframe*4);
            });
        }, i*delay)
    });

    // Hide all at the end
    var finalDelay = 10000//areas.length * delay + 2000
    setTimeout( function(){ 
        $( '#overlays' ).children().addClass('hidden')
    }, finalDelay);
}

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
    Snap(e.target).animate(showAtts, keyframe);
}

function mouseoutHandler(e){
    Snap(e.target).animate(hideAtts, keyframe);
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

    diagramIntroAnimation( areas );
}

// OnLoad functions

function indexReady(){
    $( "div.site-wrapper" ).toggleClass( "img-bk" );
    console.log("index ready!!!!")
}

function contactReady(){
    console.log("contact ready!!!!")
    $( "footer.mastfoot" ).parent().toggleClass( "project-color" );    
}

function projectReady(){
    console.log("project ready!!!!")
    // Hide all overlays
    showOverlay( null );
    // Colors the site
    $( "div.site-wrapper" ).toggleClass( "project-color" );
    // Colors the footer
    // $( "footer.mastfoot" ).parent().toggleClass( "project-color" );
    makeProjectDiagram();
}

function storyReady1(){
    $( "div.site-wrapper" ).toggleClass( "img_story1" );
    console.log("story ready!!!!")
}

function storyReady2(){
    $( "div.site-wrapper" ).toggleClass( "img_story2" );
    console.log("story ready!!!!")
}

function storyReady3(){
    $( "div.site-wrapper" ).toggleClass( "img_story3" );
    console.log("story ready!!!!")
}


function storyReady4(){
    $( "div.site-wrapper" ).toggleClass( "img_story4" );
    console.log("story ready!!!!")
}


function storyReady5(){
    $( "div.site-wrapper" ).toggleClass( "img_story5" );
    console.log("story ready!!!!")
}

function storyReady6(){
    $( "div.site-wrapper" ).toggleClass( "img_story6" );
    console.log("story ready!!!!")
}


function storyReady7(){
    $( "div.site-wrapper" ).toggleClass( "img_story7" );
    console.log("story ready!!!!")
}

function systemReady(){
    $( "div.site-wrapper" ).toggleClass( "system" );
    console.log("story ready!!!!")
}

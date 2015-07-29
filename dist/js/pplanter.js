
/*

Title: JS file for pplanter
Author: AV
Date: July 2015

Check PPlanter git repository for more details

*/

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

function mouseoverHandler(e){
    Snap(e.target).animate({fill: "rgb(244, 255, 76)", opacity: 0.5}, 500);
}

function mouseoutHandler(e){
    Snap(e.target).animate({ fill: "#FFFFFF", opacity: 0}, 500);
}

function clickHandler(e){
    console.log(e.target)
}

function snapDemo(){
    // First lets create our drawing surface out of existing SVG element
    // If you want to create new surface just provide dimensions
    // like s = Snap(800, 600);
    var s = Snap("#svg");
    // Lets create big circle in the middle:
    var bigCircle = s.circle(150, 150, 100);
    // By default its black, lets change its attributes
    bigCircle.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
    });

    bigCircle.mouseover( mouseoverHandler );
    bigCircle.mouseout( mouseoutHandler );
    bigCircle.click( clickHandler );
}

function makeProjectDiagram(){
    var s = Snap("#project_diagram");
    // Snap.load("../src/content/img/pplanter_diagram3.svg", onSVGLoaded ) ;
    var areas = s.select('#areas');
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

    // Colors the site
    $( "div.site-wrapper" ).toggleClass( "project-color" );
    // Colors the footer
    $( "footer.mastfoot" ).parent().toggleClass( "project-color" );
    makeProjectDiagram();
    snapDemo();
}

function storyReady(){
    console.log("story ready!!!!")
}
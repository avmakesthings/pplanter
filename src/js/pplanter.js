
/*

Title: JS file for pplanter
Author: AV
Date: July 2015

Check PPlanter git repository for more details

*/

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

    // Assign handlers for interactive diagram
    // NOTE: I assigned an 'id' attribute of 'project_diagram' 
    // to the top level of the svg
    // Also, had to rearrange areas to come first because z-index
    // is determined by the order in which things appear in the document.
    // $("#urinal").click(function() {
    //    alert(console.log("selected!!!!!"));        
    // });
    // project_diagram.getElementById("urinal").addEventListener("click", function(e){ 
    //     e.target.setAttribute("fill", "lime");
    //     console.log("You clicked the sink!!!!");
    // }, false);

    // Assign click handlers for interactive diagram
    // $( "area[title='sink']").click( function(e){
    //     console.log("You clicked the sink!!!!");
    // })

}

function storyReady(){
    console.log("story ready!!!!")
}

//Change out background image for site wrapper 

// jquery( document ).ready(function('templates') {
//   // Handler for .ready() called.
//   if ('template'=='index.jade'){
//     $( "div.site-wrapper" ).toggleClass( "img-bk" )
//   }else {
//     $( "div.site-wrapper" )  
//     } 
// });



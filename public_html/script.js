

 $("document").ready(function() {

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);

    // $(' .yeah') .css('background-color' , 'yellow');

    $('#superHumans').accordion({header: "h3"});

    //$('superHumans').css('width', '400px');

    // $(' .2') .css({'visibility' : 'hidden' , 'position' : 'absolute'});

    // $('div:last p:nth-child(3)').css('backgroound-color', 'pink');

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('div').bind('mouseover', mouseOverMe());

    $('h1').bind('click', mouseClick);

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);
});

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText() {
}



function mouseOverMe() {

    $("p").html("ILL RAID YOUU");


}

function mouseOverMe() {

    $("h1").html("Unknown Lv1 Track Bike");
}

function mouseOutMe() {

    $("p").html('TRACK BIKES');
}

function mouseClick (){
    
}
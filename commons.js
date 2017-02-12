var selectedPlayer=1;
var selectedTeam = 'A';
var heightPlayer=0;
var widthPlayer=0
var expand=false;

$(function() {
    minimize_small_camp();
    resize_body();
    setTimeout(function() {
        poolFunc();
    }, 3000);
 });

 function resize_body(){
    write_players();
 }

function minimize_small_camp(){
    var canvas = document.getElementById('small_camp');
    canvas.height=$(document).height()/10;
    canvas.width=$(document).width()/10;
}

function maximize_small_camp(){
    var canvas = document.getElementById('small_camp');
    canvas.height=$(document).height();
    canvas.width=$(document).width();
}

function clickSmallCamp(){
    if(!expand){
        maximize_small_camp();
        expand=true;
    }
    else{
        minimize_small_camp();
        expand=false;
    }
    write_players();
}


 function write_player(team,num_player,vPos,oPos){
     var canvasId='palyer_' + team + '_' + num_player;
    $('#' + canvasId).remove();
    var canvas1 = $('<canvas/>', { id: canvasId, height: heightPlayer, width: widthPlayer});
    if(selectedTeam==team && selectedPlayer==num_player)
        canvas1.css('border', 'solid 2px black');
    else
        if(team == 'A') canvas1.css('border', 'solid 1px red' );
        else canvas1.css('border', 'solid 1px blue' );
    canvas1.css('position','absolute');
    canvas1.css('bottom','' +(((vPos-1)*heightPlayer)) +'px' );
    canvas1.css('right', '' +(((oPos-1)*widthPlayer)) +'px');

    $('body').append(canvas1);
    $("#" + canvasId).click(function(e){
        alert('Have you select player ' + e.target.id);
    })
 }

 function write_players(){
     var canvas = document.getElementById('small_camp');
     var nPlayers = 11;
     var vPlayers = nPlayers;
     var oPlayers = nPlayers * 2;
     var campHeight = canvas.clientHeight;
     var campoWidth = canvas.clientWidth;
     heightPlayer = campHeight / 11;
     widthPlayer = campoWidth / (nPlayers*2);
     var oPositions = [];
     var vPositions = [];
     for(i=1;i<=oPlayers;i++){
         oPositions[i] = -1;
     }
     for(i=1;i<=vPlayers;i++){
         vPositions[i] = -1;
     }
    for(i=1;i<=nPlayers;i++){
        var vPos = -1;
        var oPos = -1;
        while(true){
            vPos = randomIntFromInterval(1,vPlayers);
            if(vPositions[vPos]<0){
                vPositions[vPos]=1;
                break;
            }
        }
        while(true){
            oPos = randomIntFromInterval(1,oPlayers);
            if(oPositions[oPos]<0){
                oPositions[oPos]=1;
                break;
            }
        }
        write_player('A',i,vPos,oPos);
    }
     for(i=1;i<=vPlayers;i++){
         vPositions[i] = -1;
     }
    for(i=1;i<=nPlayers;i++){
        var vPos = -1;
        var oPos = -1;
        while(true){
            vPos = randomIntFromInterval(1,vPlayers);
            if(vPositions[vPos]<0){
                vPositions[vPos]=1;
                break;
            }
        }
        while(true){
            oPos = randomIntFromInterval(1,oPlayers);
            if(oPositions[oPos]<0){
                oPositions[oPos]=1;
                break;
            }
        }
        write_player('B',i,vPos,oPos);
    }
 }

 function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function poolFunc( ) {
    resize_body();
    setTimeout(function() {
        poolFunc();
    }, 3000);
}

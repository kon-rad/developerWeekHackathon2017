$(function() {
    resize_body();
    setTimeout(function() {
        poolFunc();
    }, 1000);    
 });

 function resize_body(){
    write_players();
 }

 var selectedPalyer=1; 

 function write_players(){
     var canvas = document.getElementById('small_camp');
     var nPlayers = 11;
     var vPlayers = nPlayers;
     var oPlayers = nPlayers * 2;
     var campHeight = canvas.clientHeight;
     var campoWidth = canvas.clientWidth;
     var heightPlayer = campHeight / 11;
     var widthPlayer = campoWidth / (nPlayers*2);
     var oPositions = [];
     var vPositions = [];
     for(i=1;i<=oPlayers;i++){
         oPositions[i] = -1;
     }
     for(i=1;i<=vPlayers;i++){
         vPositions[i] = -1;
     }     
    for(i=1;i<=nPlayers;i++){
        $('#palyer_A_' + i).remove();
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
        var canvas1 = $('<canvas/>', { id: 'palyer_A_' + i, height: heightPlayer, width: widthPlayer});
        canvas1.css('border', 'solid 1px red');
        canvas1.css('position','absolute');
        canvas1.css('bottom','' +(((vPos-1)*heightPlayer)) +'px' );
        canvas1.css('right', '' +(((oPos-1)*widthPlayer)) +'px');
        $('body').append(canvas1); 
    }
     for(i=1;i<=vPlayers;i++){
         vPositions[i] = -1;
     }    
    for(i=1;i<=nPlayers;i++){
        $('#palyer_B_' + i).remove();
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
        var canvas1 = $('<canvas/>', { id: 'palyer_B_' + i, height: heightPlayer, width: widthPlayer});
        canvas1.css('border', 'solid 1px blue');
        canvas1.css('position','absolute');
        canvas1.css('bottom','' +(((vPos-1)*heightPlayer)) +'px' );
        canvas1.css('right', '' +(((oPos-1)*widthPlayer)) +'px');
        $('body').append(canvas1); 
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
    }, 1000);
}

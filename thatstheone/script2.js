let data,Player;

  async function init(){
  let link = "https://reimagined-space-rotary-phone-r464rpr65vw93x9wx-8500.app.github.dev";
  let route= "/Player"
  info = await fetch(link+route);
  data = await info.json();
  console.log(data);
  generatecards(data);
}

function generatecards(Player){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<Player.length; i++){
    let play = Player[i]
    build += `<div class="card" >`
    build += `<h3> Players : ${play.Players}</h3>`;
    build += `<div> Clubs  : ${play.Clubs}</div>`;
    build += `<div> Max Contracts : ${play.MaxContracts}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}


function filter(){
  let club = document.getElementById("club").value;
  console.log(club);
  Player = data;
  let playerlist = []; 
  
  for(let i=0; i<Player.length; i++){
    let Play = Player[i] 
    
    if( Play.Clubs == club) {
        
          playerlist.push(Play);
       }
  }
  console.log(`number found ${playerlist.length}`)
  generatecards(playerlist);
  
}
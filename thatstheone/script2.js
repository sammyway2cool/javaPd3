let data,Members;

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
    build += `<h3> Member Name : ${play.Players}</h3>`;
    build += `<div> amount of games bought  : ${play.Clubs}</div>`;
    build += `<div> Age : ${play.MaxContracts}</div>`;
    build += `<div> Payment type  : ${Member.Paymenttype}</div>`;
    build += `<p> Email : ${Member.Gmail}</p>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}


function filter(){
  let card = document.getElementById("card").value;
  console.log(card);
  Members = data;
  let cardlist = []; 
  
  for(let i=0; i<Members.length; i++){
    let Member = Members[i] 
    
    if( Member.Paymenttype == card) {
        
          cardlist.push(Member);
       }
  }
  console.log(`number found ${cardlist.length}`)
  generatecards(cardlist);
  
}
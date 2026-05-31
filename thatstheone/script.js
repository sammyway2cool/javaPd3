
let Data,Games;

async function init(){
  let link = "https://reimagined-space-rotary-phone-r464rpr65vw93x9wx-8500.app.github.dev";
  let route= "/Manager"
  info = await fetch(link+route);
  Data = await info.json();
  console.log(Data);
  generatecards(Data);
  }

 function generatecards(Manager){ 
  let back="";
  let front="";
  
  for(let i=0; i<Manager.length; i++){
    let Man = Manager[i];
    front = `<h2> Manager Name:  ${Man.Managers}</h2>`;
    front += `<img src='images/${Man.images}.png'>`

    back = `<p> Clubs: ${Man.Clubs}</p>`;
    back+= `<p> Net Worth: ${Man.NetWorth}</p>`;
    back+= `<hr>`;

    card = new FlipCard(front,back);
    card.render("flipcard_output");
  }
}

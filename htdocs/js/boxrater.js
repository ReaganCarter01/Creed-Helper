function boxRater(){
var x = document.getElementById("myTextarea").value.split(/\n|-|Level|:| |5|,/);
return x;
}
url = 'https://pokemoncreed.net/ajax/pokedex.php?pokemon='
async function totalC () {
const x = boxRater();
console.log(x);
let helper = {total: "Total: ", shadow:0, cursed:0, rainbow:0, glitter:0,
golden:0,luminous:0, amount:0};
let doNothing = {total: "Total: ", amount:0};
try{
for(let i =0; i <= x.length; i++){
let response = await fetch (url+x[i])
		let data = response.json()
		.then((data) => {
		if(data.success === false){
	throw new SyntaxError("Error");
 }
if(data.success === true){
   if(data.name === "GoldenGiratina"){
	   doNothing.amount = 850000;
	   helper.golden=helper.golden+doNothing.amount;
   }
	 else if(data.name === "ShadowRayquaza"){
	   doNothing.amount = 300000;
	   helper.shadow = helper.shadow+doNothing.amount;
   }
	 else if(data.name === "CursedGiratina"){
	   doNothing.amount = 600000;
	   helper.cursed = helper.cursed+doNothing.amount;
   }
	 else if(data.name === "CursedZapdos"){
	   doNothing.amount = 1000000;
	   helper.cursed = helper.cursed+doNothing.amount;
   }
	 else if(data.name === "CursedAbsol"){
	   doNothing.amount = 700000;
	   helper.cursed = helper.cursed+doNothing.amount;
   }
  else if(data.name.includes("Golden")){
    if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.golden = doNothing.amount + helper.golden;
    }
    if (data.rating.includes("k")){
			console.log(data.rating);
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.golden = doNothing.amount + helper.golden;
    }
}
else if(data.name.includes("Rainbow")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.rainbow = doNothing.amount + helper.rainbow;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.rainbow = doNothing.amount + helper.rainbow;
  }
}
else if(data.name.includes("Shadow")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.shadow = doNothing.amount + helper.shadow;
  }
  if (data.rating.includes("k")){
     doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.shadow = doNothing.amount + helper.shadow;
  }
}
else if(data.name.includes("Luminous")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.luminous = doNothing.amount + helper.luminous;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.luminous = doNothing.amount + helper.luminous;
  }
}
else if(data.name.includes("Cursed")){
    if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.cursed = doNothing.amount + helper.cursed;
    }
    if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating)*1000;
	  helper.cursed = doNothing.amount + helper.cursed;
    }
}
else if(data.name.includes("Glitter")){
  if (data.rating.includes("m")){
   doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.glitter = doNothing.amount + helper.glitter;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.glitter = doNothing.amount + helper.glitter;
  }
}
else if(data.rating.includes("Not rated")){
	console.log("Not rated");
}
}
helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
document.getElementById("golden").innerHTML = helper.golden;
document.getElementById("rainbow").innerHTML = helper.rainbow;
document.getElementById("shadow").innerHTML = helper.shadow;
document.getElementById("cursed").innerHTML = helper.cursed;
document.getElementById("glitter").innerHTML = helper.glitter;
document.getElementById("luminous").innerHTML = helper.luminous;
document.getElementById("cost").innerHTML = helper.amount ;
		})

}
}catch(err){console.error('Error');}

}


/*
let response = await fetch (url+x[1]);
		let data = response.json();
		.then((data


const  res = x;
var helper = {total: "Total: ", shadow:0, cursed:0, rainbow:0, glitter:0,
golden:0,luminous:0, amount:0};
var doNothing = {total: "Total: ", amount:0};

url = 'https://pokemoncreed.net/ajax/pokedex.php?pokemon='

for(var i = 0; i <= res.length;i++){
fetch(url+res[i])
.then ((res) => res.json())
.then ((data) => {
 if(data.success === false){
	 doNothing.amount += doNothing.amount;
 }
 if(data.success === true){
  if(data.name.includes("Golden")){
    if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.golden = doNothing.amount + helper.golden;
    }
    if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.golden = doNothing.amount + helper.golden;
    }
}
if(data.name.includes("Rainbow")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.rainbow = doNothing.amount + helper.rainbow;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.rainbow = doNothing.amount + helper.rainbow;
  }
}
if(data.name.includes("Shadow")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.shadow = doNothing.amount + helper.shadow;
  }
  if (data.rating.includes("k")){
     doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.shadow = doNothing.amount + helper.shadow;
  }
}
if(data.name.includes("Luminous")){
  if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.luminous = doNothing.amount + helper.luminous;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.luminous = doNothing.amount + helper.luminous;
  }
}
if(data.name.includes("Cursed")){
    if (data.rating.includes("m")){
      doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.cursed = doNothing.amount + helper.cursed;
    }
    if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating)*1000;
	  helper.cursed = doNothing.amount + helper.cursed;
    }
}
if(data.name.includes("Glitter")){
  if (data.rating.includes("m")){
   doNothing.amount = parseFloat(data.rating) * 1000000;
	  helper.glitter = doNothing.amount + helper.glitter;
  }
  if (data.rating.includes("k")){
      doNothing.amount = parseFloat(data.rating) * 1000;
	  helper.glitter = doNothing.amount + helper.glitter;
  }
}
if (data.rating.includes("Not rated")){
	console.log("Not rated");
}
}


helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
document.getElementById("golden").innerHTML = helper.golden;
document.getElementById("rainbow").innerHTML = helper.rainbow;
document.getElementById("shadow").innerHTML = helper.shadow;
document.getElementById("cursed").innerHTML = helper.cursed;
document.getElementById("glitter").innerHTML = helper.glitter;
document.getElementById("luminous").innerHTML = helper.luminous;
document.getElementById("cost").innerHTML = helper.amount ;
})
if(i === res.length){
	console.log('Breaking....');
	break;
}
}
*/

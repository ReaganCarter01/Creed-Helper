function UserRater(){
const x = document.getElementById("myTextarea").value;
return x;
}
url ='https://pokemoncreed.net/ajax/box.php?user='
endpoint = 'https://pokemoncreed.net/ajax/pokedex.php?pokemon='

let helper = {total: "Total: ", shadow:0, cursed:0, rainbow:0, glitter:0,
    golden:0,luminous:0, amount:0};
let help = 0;
let name = [];
let name1 = [];
let name2 = [];
let name3 = [];
let name4 = [];
let name5 = [];

async function userShadow(){
    if (helper.shadow > 0 ) helper.shadow = 0;

  try{
         const x = UserRater ();
         const response = await fetch (url+x);
         var s = document.getElementById("ss");
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){
          if(data.data.pokemon[i].name === "ShadowRayquaza"){
            name3[i] = data.data.pokemon[i].name;
            if(data.data.pokemon[i].level=== 5){
              help = 300000;
              helper.shadow = help +helper.shadow;
            }else if(data.data.pokemon[i].level > 5){
              help = 225000;
              helper.shadow =help + helper.shadow;
            }else{
              help = 1000000;
              helper.shadow =help+helper.shadow;
            }
           }
           else if(data.data.pokemon[i].name.includes("Shadow")){
             const res = await fetch (endpoint+data.data.pokemon[i].name);
             name3[i] = data.data.pokemon[i].name;
             console.log(res);
             if(!res.ok){
               throw new Error(response.status);
             }
           const pokeRating = await res.json();
           if (pokeRating.rating==="Not rated"){
             help = help;
           }else if (pokeRating.rating==="N\/A"){
             help = help;
           }
           else if (data.data.pokemon[i].level===5){
           if(pokeRating.rating.includes('k')){
           helper.shadow = helper.shadow + parseFloat(pokeRating.rating)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.shadow = helper.shadow +  parseFloat(pokeRating.rating)*1000000;
           }
         }else if (data.data.pokemon[i].level===4){
           if(pokeRating.rating.includes('k')){
           helper.shadow = helper.shadow + (parseFloat(pokeRating.rating)*5)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.shadow= helper.shadow +  (parseFloat(pokeRating.rating)*5)*1000000;
           }

         }else if (data.data.pokemon[i].level===3){
           if(pokeRating.rating.includes('k')){
           helper.shadow = helper.shadow + (parseFloat(pokeRating.rating)*7)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.shadow = helper.shadow +  (parseFloat(pokeRating.rating)*7)*1000000;
           }

         }else if (data.data.pokemon[i].level===2){
           if(pokeRating.rating.includes('k')){
           helper.shadow = helper.shadow + (parseFloat(pokeRating.rating)*9)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.shadow = helper.shadow +  (parseFloat(pokeRating.rating)*9)*1000000;
           }

         }else if (data.data.pokemon[i].level===1){
           if(pokeRating.rating.includes('k')){
           helper.shadow = helper.shadow + (parseFloat(pokeRating.rating)*11)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.shadow= helper.shadow +  (parseFloat(pokeRating.rating)*11)*1000000;
           }}else if (data.data.pokemon[i].level>5){
               if(pokeRating.rating.includes('k')){
             helper.shadow += parseFloat(pokeRating.rating)*1000;
             }
             else if(pokeRating.rating.includes('m')){
               helper.shadow +=  parseFloat(pokeRating.rating)*1000000;
             }
           }else{
             help = help;
           }




         }
         if (s.checked === true ){
               let cleanarray = name3.filter(function(){
                 return true
               });
         console.log("im here");
         //for(let q = 0;q < newarray.length;q++) {
         //if(newarray.value[q].includes('Golden')){
         //  console.log("whateastesa");

         //    }}
         let cleanerarray = [];
         $.each(cleanarray,function(i,el){
           if($.inArray(el,cleanerarray)===-1)
           cleanerarray.push(el)
         });

         var na1 = display_array3(cleanarray,cleanerarray);

         }
         helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
         document.getElementById("cost").innerHTML = helper.amount ;

         document.getElementById("shadow").innerHTML = helper.shadow;
         }
}catch(err){console.error(err)}
}

async function userRainbow(){
    if (helper.rainbow > 0 ) helper.rainbow = 0;

  try{
         const x = UserRater ();
         var r = document.getElementById("rr");
         const response = await fetch (url+x);
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){

           if(data.data.pokemon[i].name === "RainbowMime Jr."){
             name4[i] = data.data.pokemon[i].name;
              help = 5000;
              helper.rainbow = helper.rainbow+help;
            }
           else if(data.data.pokemon[i].name.includes("Rainbow")){
             const res = await fetch (endpoint+data.data.pokemon[i].name);
             name4[i] = data.data.pokemon[i].name;
             console.log(res);
             if(!res.ok){
               throw new Error(response.status);
             }
           const pokeRating = await res.json();
           if (pokeRating.rating==="Not rated"){
             help = help;
           }else if (pokeRating.rating==="N\/A"){
             help = help;
           }
         else if (data.data.pokemon[i].level===5){
           if(pokeRating.rating.includes('k')){
           helper.rainbow += parseFloat(pokeRating.rating)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.rainbow +=  parseFloat(pokeRating.rating)*1000000;
           }
         }else if (data.data.pokemon[i].level===4){
           if(pokeRating.rating.includes('k')){
           helper.rainbow += (parseFloat(pokeRating.rating)*5)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.rainbow +=  (parseFloat(pokeRating.rating)*5)*1000000;
           }

         }else if (data.data.pokemon[i].level===3){
           if(pokeRating.rating.includes('k')){
           helper.rainbow +=  (parseFloat(pokeRating.rating)*7)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.rainbow += (parseFloat(pokeRating.rating)*7)*1000000;
           }

         }else if (data.data.pokemon[i].level===2){
           if(pokeRating.rating.includes('k')){
           helper.rainbow +=  (parseFloat(pokeRating.rating)*9)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.rainbow +=  (parseFloat(pokeRating.rating)*9)*1000000;
           }

         }else if (data.data.pokemon[i].level===1){
           if(pokeRating.rating.includes('k')){
           helper.rainbow += (parseFloat(pokeRating.rating)*11)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.rainbow +=   (parseFloat(pokeRating.rating)*11)*1000000;
           }}else if (data.data.pokemon[i].level>5){
               if(pokeRating.rating.includes('k')){
             helper.rainbow += parseFloat(pokeRating.rating)*1000;
             }
             else if(pokeRating.rating.includes('m')){
               helper.rainbow +=  parseFloat(pokeRating.rating)*1000000;
             }
           }else{
             help = help;
           }




         }if (r.checked === true ){
               let cleanarray = name4.filter(function(){
                 return true
               });
         console.log("im here");
         //for(let q = 0;q < newarray.length;q++) {
         //if(newarray.value[q].includes('Golden')){
         //  console.log("whateastesa");

         //    }}
         let cleanerarray = [];
         $.each(cleanarray,function(i,el){
           if($.inArray(el,cleanerarray)===-1)
           cleanerarray.push(el)
         });

         var na1 = display_array4(cleanarray,cleanerarray);

         }
         helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
         document.getElementById("cost").innerHTML = helper.amount
         document.getElementById("rainbow").innerHTML = helper.rainbow;
         }
}catch(err){console.error(err)}
}

async function userLuminous(){
    if (helper.luminous > 0 ) helper.luminous = 0;

  try{
         const x = UserRater ();
         var g = document.getElementById("ll");
         const response = await fetch (url+x);
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){
           if(data.data.pokemon[i].name.includes("Luminous")){
             const res = await fetch (endpoint+data.data.pokemon[i].name);
             name1[i] = data.data.pokemon[i].name;
             console.log(res);
             if(!res.ok){
               throw new Error(response.status);
             }
           const pokeRating = await res.json();
           if (pokeRating.rating==="Not rated"){
             help = help;
           }else if (pokeRating.rating==="N\/A"){
             help = help;
           }
           else if (data.data.pokemon[i].level===5){
           if(pokeRating.rating.includes('k')){
           helper.luminous += parseFloat(pokeRating.rating)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.luminous +=  parseFloat(pokeRating.rating)*1000000;
           }
         }else if (data.data.pokemon[i].level===4){
           if(pokeRating.rating.includes('k')){
           helper.luminous += (parseFloat(pokeRating.rating)*5)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.luminous +=  (parseFloat(pokeRating.rating)*5)*1000000;
           }

         }else if (data.data.pokemon[i].level===3){
           if(pokeRating.rating.includes('k')){
           helper.luminous +=  (parseFloat(pokeRating.rating)*7)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.luminous += (parseFloat(pokeRating.rating)*7)*1000000;
           }

         }else if (data.data.pokemon[i].level===2){
           if(pokeRating.rating.includes('k')){
           helper.luminous +=  (parseFloat(pokeRating.rating)*9)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.luminous +=  (parseFloat(pokeRating.rating)*9)*1000000;
           }

         }else if (data.data.pokemon[i].level===1){
           if(pokeRating.rating.includes('k')){
           helper.luminous += (parseFloat(pokeRating.rating)*11)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.luminous +=   (parseFloat(pokeRating.rating)*11)*1000000;
           }}else if (data.data.pokemon[i].level>5){
               if(pokeRating.rating.includes('k')){
             helper.luminous += parseFloat(pokeRating.rating)*1000;
             }
             else if(pokeRating.rating.includes('m')){
               helper.luminous +=  parseFloat(pokeRating.rating)*1000000;
             }
           }else{
             help = help;
           }


         }

         if (g.checked === true ){
               let cleanarray = name1.filter(function(){
                 return true
               });
         console.log("im here");
         //for(let q = 0;q < newarray.length;q++) {
         //if(newarray.value[q].includes('Golden')){
         //  console.log("whateastesa");

         //    }}
         let cleanerarray = [];
         $.each(cleanarray,function(i,el){
           if($.inArray(el,cleanerarray)===-1)
           cleanerarray.push(el)
         });

         var na1 = display_arrayl(cleanarray,cleanerarray);

         }

         helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
         document.getElementById("cost").innerHTML = helper.amount
         document.getElementById("luminous").innerHTML = helper.luminous;
         }
}catch(err){console.error(err)}

}

async function userTotal(){
    if (helper.cursed > 0 ) helper.cursed = 0;
  try{
         const x = UserRater ();
         var c = document.getElementById("cc");
         const response = await fetch (url+x);
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){
             
           if(data.data.pokemon[i].name === "CursedMime Jr."){
             name4[i] = data.data.pokemon[i].name;
              help = 2500;
              helper.rainbow = helper.rainbow+help;
            }
       else if(data.data.pokemon[i].name === "CursedGiratina"){
         name2[i] = data.data.pokemon[i].name;
            if(data.data.pokemon[i].level=== 5){
              help = 600000;
              helper.cursed = help +helper.cursed;
            }else if(data.data.pokemon[i].level > 5){
              help = 375000;
              helper.cursed =help + helper.cursed;
            }else{
              help = 1000000;
              helper.cursed =help+helper.cursed;
            }
           }
          else if(data.data.pokemon[i].name === "CursedZapdos"){
            name2[i] = data.data.pokemon[i].name;
            if(data.data.pokemon[i].gender==="M"){
            if(data.data.pokemon[i].level=== 5){
              help = 1100000;
              helper.cursed = help +helper.cursed;
            }else if(data.data.pokemon[i].level > 5){
              help = 900000;
              helper.cursed =help + helper.cursed;
            }else{
              help= 2000000;
              helper.cursed=help+helper.cursed;
            }
          }else if(data.data.pokemon[i].gender === ""){
            if(data.data.pokemon[i].level=== 5){
              help = 700000;
              helper.cursed = help +helper.cursed;
            }else if(data.data.pokemon[i].level > 5){
              help = 500000;
              helper.cursed =help + helper.cursed;
            }else{
              help= 1400000;
              helper.cursed=help+helper.cursed;
            }
          }
           }
          else if(data.data.pokemon[i].name === "CursedAbsol"){
            name2[i] = data.data.pokemon[i].name;
            if(data.data.pokemon[i].gender==="M"){
            if(data.data.pokemon[i].level=== 5){
              help = 700000;
              helper.cursed = help +helper.cursed;
            }else if(data.data.pokemon[i].level > 5){
              help = 700000;
              helper.cursed =help + helper.cursed;
            }else{
              help= 10000000;
              helper.cursed=help+helper.cursed;
            }
          }else if(data.data.pokemon[i].gender === "F"){
            if(data.data.pokemon[i].level=== 5){
              help = 800000;
              helper.cursed = help +helper.cursed;
            }else if(data.data.pokemon[i].level > 5){
              help = 800000;
              helper.cursed =help + helper.cursed;
            }else{
              help= 1400000;
              helper.cursed=help+helper.cursed;
            }
          }
           }
            else if(data.data.pokemon[i].name.includes("Cursed")){
              const res = await fetch (endpoint+data.data.pokemon[i].name);
              name2[i] = data.data.pokemon[i].name;
              console.log(res);
              if(!res.ok){
                throw new Error(response.status);
              }
            const pokeRating = await res.json();
            if (pokeRating.rating==="Not rated"){
              help = help;
            }else if (pokeRating.rating==="N\/A"){
              help = help;
            }
            else if (data.data.pokemon[i].level===5){
            if(pokeRating.rating.includes('k')){
            helper.cursed += parseFloat(pokeRating.rating)*1000;
            }
            else if(pokeRating.rating.includes('m')){
              helper.cursed +=  parseFloat(pokeRating.rating)*1000000;
            }
          }else if (data.data.pokemon[i].level===4){
            if(pokeRating.rating.includes('k')){
            helper.cursed += (parseFloat(pokeRating.rating)*5)*1000;
            }
            else if(pokeRating.rating.includes('m')){
              helper.cursed +=  (parseFloat(pokeRating.rating)*5)*1000000;
            }

          }else if (data.data.pokemon[i].level===3){
            if(pokeRating.rating.includes('k')){
            helper.cursed +=  (parseFloat(pokeRating.rating)*7)*1000;
            }
            else if(pokeRating.rating.includes('m')){
              helper.cursed += (parseFloat(pokeRating.rating)*7)*1000000;
            }

          }else if (data.data.pokemon[i].level===2){
            if(pokeRating.rating.includes('k')){
            helper.cursed +=  (parseFloat(pokeRating.rating)*9)*1000;
            }
            else if(pokeRating.rating.includes('m')){
              helper.cursed +=  (parseFloat(pokeRating.rating)*9)*1000000;
            }

          }else if (data.data.pokemon[i].level===1){
            if(pokeRating.rating.includes('k')){
            helper.cursed += (parseFloat(pokeRating.rating)*11)*1000;
            }
            else if(pokeRating.rating.includes('m')){
              helper.cursed +=   (parseFloat(pokeRating.rating)*11)*1000000;
            }}else if (data.data.pokemon[i].level>5){
                if(pokeRating.rating.includes('k')){
              helper.cursed += parseFloat(pokeRating.rating)*1000;
              }
              else if(pokeRating.rating.includes('m')){
                helper.cursed +=  parseFloat(pokeRating.rating)*1000000;
              }
            }else{
              help = help;
            }

          }
          if (c.checked === true ){
                let cleanarray = name2.filter(function(){
                  return true
                });
          console.log("im here");
          //for(let q = 0;q < newarray.length;q++) {
          //if(newarray.value[q].includes('Golden')){
          //  console.log("whateastesa");

          //    }}
          let cleanerarray = [];
          $.each(cleanarray,function(i,el){
            if($.inArray(el,cleanerarray)===-1)
            cleanerarray.push(el)
          });

          var na1 = display_array2(cleanarray,cleanerarray);

          }


 helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
 document.getElementById("cost").innerHTML = helper.amount
document.getElementById("cursed").innerHTML = helper.cursed;
         }
}catch(err){console.error(err)}
}

async function userGolden(){
    if (helper.golden > 0 ) helper.golden = 0;

  try{
         const x = UserRater ();
         var gg = document.getElementById("gg");
         const response = await fetch (url+x);
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){
           if(data.data.pokemon[i].name === "GoldenGiratina"){
             name[i] = data.data.pokemon[i].name;
             if(data.data.pokemon[i].gender==="M"){
               if(data.data.pokemon[i].level === 5){
                 help = 1000000;
                 helper.golden = help + helper.golden;
               }else if(data.data.pokemon[i].level > 5){
                 help = 800000;
                 helper.golden = help + helper.golden;
               }else{
                 help = 3000000;
                 helper.golden = help + helper.golden;
               }
             }else if(data.data.pokemon[i].gender==="F"){
               if(data.data.pokemon[i].level === 5){
                 help = 1200000;
                 helper.golden = help + helper.golden;
               }else if(data.data.pokemon[i].level > 5){
                 help = 850000;
                 helper.golden = help + helper.golden;
               }else{
                 help = 3000000;
                 helper.golden = help + helper.golden;
               }
             }
           }


         else if(data.data.pokemon[i].name.includes("Golden")){
           const res = await fetch (endpoint+data.data.pokemon[i].name);
           name[i] = data.data.pokemon[i].name;
           console.log(res);
           if(!res.ok){
             throw new Error(response.status);
           }
         const pokeRating = await res.json();
         if (pokeRating.rating==="Not rated"){
           help = help;
         }
         else if (pokeRating.rating==="N\/A"){
           help = help;
         }
         else if (data.data.pokemon[i].level===5){
         if(pokeRating.rating.includes('k')){
         helper.golden += parseFloat(pokeRating.rating)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.golden +=  parseFloat(pokeRating.rating)*1000000;
         }
       }else if (data.data.pokemon[i].level===4){
         if(pokeRating.rating.includes('k')){
         helper.golden += (parseFloat(pokeRating.rating)*5)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.golden +=  (parseFloat(pokeRating.rating)*5)*1000000;
         }

       }else if (data.data.pokemon[i].level===3){
         if(pokeRating.rating.includes('k')){
         helper.golden +=  (parseFloat(pokeRating.rating)*7)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.golden += (parseFloat(pokeRating.rating)*7)*1000000;
         }

       }else if (data.data.pokemon[i].level===2){
         if(pokeRating.rating.includes('k')){
         helper.golden +=  (parseFloat(pokeRating.rating)*9)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.golden +=  (parseFloat(pokeRating.rating)*9)*1000000;
         }

       }else if (data.data.pokemon[i].level===1){
         if(pokeRating.rating.includes('k')){
         helper.golden += (parseFloat(pokeRating.rating)*11)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.golden +=   (parseFloat(pokeRating.rating)*11)*1000000;
         }}
         else if (data.data.pokemon[i].level > 5){
           if(pokeRating.rating.includes('k')){
           helper.golden += parseFloat(pokeRating.rating)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.golden +=  parseFloat(pokeRating.rating)*1000000;
           }
         }else{
           help = help;
         }




       }
       if (gg.checked === true ){
             let cleanarray = name.filter(function(){
               return true
             });
       console.log("im here");
       //for(let q = 0;q < newarray.length;q++) {
       //if(newarray.value[q].includes('Golden')){
       //  console.log("whateastesa");

       //    }}
       let cleanerarray = [];
       $.each(cleanarray,function(i,el){
         if($.inArray(el,cleanerarray)===-1)
         cleanerarray.push(el)
       });

       var na1 = display_array(cleanarray,cleanerarray);

       }
       helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
       document.getElementById("cost").innerHTML = helper.amount
       document.getElementById("golden").innerHTML = helper.golden;
         }
}catch(err){console.error(err)}
}

async function userGlitter(){
    if (helper.glitter > 0 ) helper.glitter = 0;

  try{
         const x = UserRater ();
         var gl = document.getElementById("gl");
         const response = await fetch (url+x);
         if(!response.ok){
           throw new Error(response.status);
         }
         const data = await response.json();

         for(var i = 0; i < data.data.pokemon.length;i++){
         if(data.data.pokemon[i].name.includes("Glitter")){
           const res = await fetch (endpoint+data.data.pokemon[i].name);
           name5[i] = data.data.pokemon[i].name;
           console.log(res);
           if(!res.ok){
             throw new Error(response.status);
           }
         const pokeRating = await res.json();
         if (pokeRating.rating==="Not rated"){
           help = help;
         }else if (pokeRating.rating==="N\/A"){
           help = help;
         }
         else if (data.data.pokemon[i].level===5){
         if(pokeRating.rating.includes('k')){
         helper.glitter = helper.glitter + parseFloat(pokeRating.rating)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.glitter = helper.glitter +  parseFloat(pokeRating.rating)*1000000;
         }
       }else if (data.data.pokemon[i].level===4){
         if(pokeRating.rating.includes('k')){
         helper.glitter = helper.glitter + (parseFloat(pokeRating.rating)*5)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.glitter = helper.glitter +  (parseFloat(pokeRating.rating)*5)*1000000;
         }

       }else if (data.data.pokemon[i].level===3){
         if(pokeRating.rating.includes('k')){
         helper.glitter = helper.glitter + (parseFloat(pokeRating.rating)*7)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.glitter = helper.glitter +  (parseFloat(pokeRating.rating)*7)*1000000;
         }

       }else if (data.data.pokemon[i].level===2){
         if(pokeRating.rating.includes('k')){
         helper.glitter = helper.glitter + (parseFloat(pokeRating.rating)*9)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.glitter = helper.glitter +  (parseFloat(pokeRating.rating)*9)*1000000;
         }

       }else if (data.data.pokemon[i].level===1){
         if(pokeRating.rating.includes('k')){
         helper.glitter = helper.glitter + (parseFloat(pokeRating.rating)*11)*1000;
         }
         else if(pokeRating.rating.includes('m')){
           helper.glitter = helper.glitter +  (parseFloat(pokeRating.rating)*11)*1000000;
         }}else if (data.data.pokemon[i].level>5){
             if(pokeRating.rating.includes('k')){
           helper.glitter += parseFloat(pokeRating.rating)*1000;
           }
           else if(pokeRating.rating.includes('m')){
             helper.glitter +=  parseFloat(pokeRating.rating)*1000000;
           }
         }else{
           help = help;
         }




       }
       if (gl.checked === true ){
             let cleanarray = name5.filter(function(){
               return true
             });
       console.log("im here");
       //for(let q = 0;q < newarray.length;q++) {
       //if(newarray.value[q].includes('Golden')){
       //  console.log("whateastesa");

       //    }}
       let cleanerarray = [];
       $.each(cleanarray,function(i,el){
         if($.inArray(el,cleanerarray)===-1)
         cleanerarray.push(el)
       });

       var na1 = display_array5(cleanarray,cleanerarray);

       }
      helper.amount = helper.cursed+helper.rainbow+helper.golden+helper.luminous+helper.shadow+helper.glitter;
       document.getElementById("cost").innerHTML = helper.amount
document.getElementById("glitter").innerHTML = helper.glitter;
         }
}catch(err){console.error(err)}

}

function display_arrayl(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("luminousnam").innerHTML = e;
}
function display_array2(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("cursednam").innerHTML = e;
}

function display_array(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("goldenNam").innerHTML = e;
}
function display_array3(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("shadownam").innerHTML = e;
}
function display_array4(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("rainbownam").innerHTML = e;
}


function display_array5(a2,array){
  const testArray  = a2;
  var result = {};
  testArray.forEach(function(x){
    result[x] = (result[x]||0)+1;
  });
  var e = " ";
console.log("testing");
  for(var y=0;y<array.length;y++){
    let w = array[y];
    e += result[w] + "x"+ array[y] +  "<br/>";
  }
  document.getElementById("glitternam").innerHTML = e;
}

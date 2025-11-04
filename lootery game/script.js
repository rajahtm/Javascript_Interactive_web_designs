
let pick=document.getElementById("picknumber");
let result =document.getElementById("result");
let box = document.getElementById("box");
let wait = document.getElementById("wait");
const sound=new Audio("coinsound.wav");
const csound=new Audio("winner sound.wav");
const gifts =[
  "Book",
  "Gift Card",
  "Candle",
  "Coffee Mug",
  "Water Bottle",
  "Socks",
  "Scarf",
  "Gloves",
  "Hat",
  "Jewelry (Necklace, Bracelet, Earrings)",
  "Watch",
  "Lego Set",
  "Board Game",
  "Puzzle",
  "Video Game",
  "Headphones/Earbuds",
  "Bluetooth Speaker",
  "Portable Charger (Power Bank)",
  "Smartphone Case",
  "Subscription Box (e.g., coffee, snacks, beauty)",
  "Gourmet Food Basket",
  "Wine/Spirits",
  "Craft Beer Selection",
  "Coffee Beans/Tea Set",
  "Chocolate Box",
  "Massage Voucher/Spa Day",
  "Aromatherapy Diffuser/Essential Oils",
  "Bath Bombs/Skincare Set",
  "Weighted Blanket",
  "Pajamas/Loungewear",
  "Photo Album/Scrapbook",
  "Custom Photo Frame",
  "Instant Camera (e.g., Polaroid/Instax)",
  "Fitness Tracker",
  "Yoga Mat",
  "Cookbook",
  "Kitchen Gadget (e.g., Air Fryer, Blender)",
  "Tool Set",
  "Gardening Kit/Plant",
  "Art Supplies (e.g., paint set, sketch book)",
  "Journal/Planner",
  "Fountain Pen Set",
  "Movie Tickets/Concert Tickets",
  "Experience Voucher (e.g., hot air balloon ride, cooking class)",
  "Personalized Ornament",
  "Car Accessories (e.g., dashcam, organizer)",
  "Pet Supplies/Toys (for a pet owner)",
  "Travel Pillow/Accessory",
  "Backpack/Tote Bag",
  "Tech Gadget Cleaner Kit"
]
const out=setTimeout(function(){
},5000)
  pick.addEventListener("click",function(){
    result.textContent ="please wait 5 seconds ..."
//    let randombox= setTimeout(function(){
//          let draw=Math.floor(Math.random()*50 +1)
//     let gift =gifts[draw-1]
//       result.textContent = `Congratulations! you got ${draw}  and You have won a ${gift}!`;

//       document.getElementById(draw).classList.add("winningbox")
//        clearInterval(intervel)
// },5000)
let secondscounter = 0 ;
 let intervel=setInterval(function(){
  sound.pause()
  sound.currentTime =0;
  sound.play()
  secondscounter++;
    let one=Math.floor(Math.random()*50 +1);
    console.log(one)
    for(let i = 1; i<=50; i++){
      if(i == one){
          document.getElementById(i).classList.add("highlight");
      }else{
         document.getElementById(i).classList.remove("highlight")
      }
    }
   
      if(secondscounter == 5){
    let draw=Math.floor(Math.random()*50 +1)
    let gift =gifts[draw-1]
      result.textContent = `Congratulations! you got ${draw}  and You have won a ${gift}!`;
       document.getElementById(one).classList.remove("highlight")
      document.getElementById(draw).classList.add("winningbox")
      csound.pause()
  csound.currentTime =0;
  csound.play()
     clearInterval(intervel)
      }
    
   
  },1000)


  })





gifts.forEach(function(value ,i){
  let boxelement =  `<div class="re" id=${i +1} >${i +1} ${value}</div>`;
  box.insertAdjacentHTML("beforeend",boxelement)
})
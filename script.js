const API = "https://open.er-api.com/v6/latest/USD";

let rates = {};
let selected = "UZS";

const container = document.querySelector(".money-container");

// 🌍 kurs olish
async function getRates(){
  const res = await fetch(API);
  const data = await res.json();
  rates = data.rates;

  showRates();
  autoConvert();
}

// 📊 kurslar
function showRates(){

  const list = [
    {name:"🇺🇿 O‘zbekiston", cur:"UZS"},
    {name:"🇺🇸 AQSh", cur:"USD"},
    {name:"🇪🇺 Yevropa", cur:"EUR"},
    {name:"🇷🇺 Rossiya", cur:"RUB"}
  ];

  const box = document.getElementById("rates");
  box.innerHTML = "";

  list.forEach(c=>{
    box.innerHTML += `
      <div class="card">
        ${c.name} <br>
        1 USD = ${rates[c.cur]} ${c.cur}
      </div>
    `;
  });
}

// 🧮 real-time convert
document.getElementById("amount").addEventListener("input", autoConvert);

function autoConvert(){
  let amount = document.getElementById("amount").value;

  if(!amount){
    document.getElementById("result").innerText = "";
    return;
  }

  let result = amount * rates[selected];

  document.getElementById("result").innerText =
    `${amount} USD = ${result.toLocaleString()} ${selected}`;
}

// 💵 flying money
function createMoney(){
  const el = document.createElement("div");
  el.classList.add("money");

  el.innerText = "💵";

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.animationDuration = (3 + Math.random() * 4) + "s";
  el.style.fontSize = (20 + Math.random() * 30) + "px";

  container.appendChild(el);

  setTimeout(()=>el.remove(), 8000);
}

// 🔄 start
setInterval(getRates, 3000);
setInterval(createMoney, 300);

getRates();
const CRYPTO_API = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple&vs_currencies=usd";

let crypto = {};

async function getCrypto(){
  const res = await fetch(CRYPTO_API);
  const data = await res.json();
  crypto = data;

  showCrypto();
}

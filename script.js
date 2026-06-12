body{
  margin:0;
  font-family:Arial;
  background:#0b1020;
  color:white;
  text-align:center;
  overflow:hidden;
}

/* 🌌 fon */
.bg{
  position:fixed;
  width:100%;
  height:100%;
  background: radial-gradient(circle at top,#1e293b,#000);
  z-index:-2;
}

/* 💵 animatsiya container */
.money-container{
  position:fixed;
  width:100%;
  height:100%;
  overflow:hidden;
  z-index:-1;
}

/* 💵 dollar */
.money{
  position:absolute;
  bottom:-50px;
  font-size:30px;
  animation:fly linear forwards;
  opacity:0.8;
}

@keyframes fly{
  0%{
    transform:translateY(0);
    opacity:0;
  }
  10%{opacity:1;}
  100%{
    transform:translateY(-110vh) rotate(360deg);
    opacity:0;
  }
}

input{
  padding:12px;
  border:none;
  border-radius:10px;
  width:200px;
  margin:10px;
}

#result{
  color:#00ff88;
  text-shadow:0 0 10px #00ff88;
}

#rates{
  margin-top:20px;
}
.card{
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(0,255,255,0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  padding:18px;
  margin:12px auto;
  width:85%;
  max-width:400px;

  border-radius:18px;

  box-shadow:
    0 8px 32px rgba(0,0,0,0.5),
    0 0 10px rgba(0,255,255,0.2);

  transition:0.3s;

  text-align:left;

  position:relative;
  overflow:hidden;
}
.card:hover{
  transform:translateY(-6px) scale(1.02);
  box-shadow:
    0 0 20px #00f5ff,
    0 0 40px #ff00ff;
  border:1px solid #00f5ff;
}
.card{
  font-size:16px;
  line-height:1.6;
  color:white;
}
.card b{
  color:#00ff88;
  text-shadow:0 0 10px #00ff88;
  font-size:18px;
}

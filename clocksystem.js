setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // 時、分、秒を元に角度を計算
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);

  const colorH = h * 10.625;
  const colorM = m * 4.25;
  const colorS = s * 4.25;

  // 各要素を取得
  const elementH = document.querySelector(".c-clock__hour");
  const elementM = document.querySelector(".c-clock__min");
  const elementS = document.querySelector(".c-clock__sec");

  var elementBody = document.getElementById("body");
  var elementFrame = document.getElementById("frame");
  var elementClock = document.getElementById("clock");

  var elementBodycolor = document.getElementById("bodycolor");
  var elementFramecolor = document.getElementById("framecolor");
  var elementClockcolor = document.getElementById("clockcolor");

  // styleを追加
  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;

  elementBody.style.backgroundColor = `rgb(${colorH},${colorM},${colorS})`;
  elementFrame.style.backgroundColor = `rgb(${colorM},${colorS},${colorH})`;
  elementClock.style.backgroundColor = `rgb(${colorS},${colorH},${colorM})`;

  elementBodycolor.innerHTML = `Body:rgb(${colorH},${colorM},${colorS})`;
  elementFramecolor.innerHTML = `Frame:rgb(${colorM},${colorS},${colorH})`;
  elementClockcolor.innerHTML = `Clock:rgb(${colorS},${colorH},${colorM})`;

}, 10);

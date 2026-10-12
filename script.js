// Menu mobile
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // Teks mengetik
  const words = ['suka jalan-jalan', 'bisa kerja sambil kuliah', 'semangat belajar ngoding'];
  const typed = document.getElementById('typed');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { typed.textContent = words[0]; }
  else {
    let w = 0, c = 0, del = false;
    (function tick(){
      const word = words[w];
      typed.textContent = word.slice(0, c);
      if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; }
      c += del ? -1 : 1;
      setTimeout(tick, del ? 40 : 80);
    })();
  }

  // Tujuan acak
  const places = [
    'Pantai Koka, Maumere',
    'Danau Kelimutu, Ende',
    'Labuan Bajo, Manggarai Barat',
    'Pulau Komodo',
    'Bromo, Jawa Timur',
    'Raja Ampat, Papua Barat Daya'
  ];
  document.getElementById('spin').addEventListener('click', () => {
    const p = places[Math.floor(Math.random() * places.length)];
    document.getElementById('fact').textContent = 'Tujuan berikutnya: ' + p;
  });

  // Salin email
  const copyBtn = document.getElementById('copy');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById('email').textContent);
      copyBtn.textContent = 'Email tersalin';
    } catch { copyBtn.textContent = 'Salin manual ya'; }
    setTimeout(() => copyBtn.textContent = 'Salin email', 2000);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
    // Kis JS: sima interakciók, anchor scroll és egy card filter példa (később bővíthető)
    (function(){
        'use strict';
  
        // Aktív nav-link kiemelés scroll-hoz (bootstrap scrollspy alternatíva)
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = [...document.querySelectorAll('main section, header')];
        function onScroll(){
          const top = window.scrollY + 120;
          let current = sections[0].id || '';
          for(const s of sections){
            if(s.offsetTop <= top) current = s.id;
          }
          navLinks.forEach(a => {
            if(a.getAttribute('href') === '#' + current) a.classList.add('active');
            else a.classList.remove('active');
          });
        }
        window.addEventListener('scroll', onScroll, {passive:true});
        onScroll();
  
        // Egyszerű filter demo (később csinálhatsz konkrét filter gombokat)
        window.filterCards = function(keyword){
          const cards = document.querySelectorAll('.cr-card');
          cards.forEach(c => {
            if(!keyword) c.style.display = '';
            else {
              const text = c.innerText.toLowerCase();
              c.style.display = text.includes(keyword.toLowerCase()) ? '' : 'none';
            }
          });
        };
  
        // Mobil navbar bezárása kattintás után (jó, ha linket nyomsz)
        const bsCollapse = document.getElementById('navMain');
        const bs = new bootstrap.Collapse(bsCollapse, {toggle:false});
        document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', () => {
            if(window.innerWidth < 992) bs.hide();
          });
        });
  
      })();
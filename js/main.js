let header = document.querySelector('.header');
let btn2 =document.querySelector(".scroll-btn")

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('mom');
  } else {
    header.classList.remove('mom');
  }


  if (window.scrollY > 300) {
    btn2.classList.add('youse');
  } else {
    btn2.classList.remove("youse")
  }
});


btn2.addEventListener("click" ,()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})
// abdh altsfuh //


let xplor = document.querySelector('.title .btn');
let hadissecotin = document.querySelector('.hthdeth');

xplor.addEventListener('click', () => {
  hadissecotin.scrollIntoView({
    behavior: 'smooth',
  });
});

// hadeth chenge//

let hadethcontainer = document.querySelector('.hdthd-container');
let naxt = document.querySelector('.button .naxt');
let priv = document.querySelector('.button .priv');
let number = document.querySelector('.button .number');

let hdethIndex = 0;
hdthd();
function hdthd() {
  fetch('https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300')
    .then((Response) => Response.json())
    .then((data) => {
      let goos = data.items;
      two();
      naxt.addEventListener('click', () => {
        hdethIndex == 299 ? (hdethIndex = 0) : hdethIndex++;
        two();
      });

      priv.addEventListener('click', () => {
        hdethIndex == 0 ? (hdethIndex = 299) : hdethIndex--;
        two();
      });
      function two() {
        hadethcontainer.innerHTML = goos[hdethIndex].arab;
        number.innerHTML = `300 - ${hdethIndex + 1}`;
      }
    });
}

// end hadeth chenge//

// link section //

let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.header ul li');

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.header ul li.active').classList.remove('active');

    link.classList.add('active');

    let target = link.dataset.filter;

    sections.forEach((section) => {
      if (section.classList.contains(target)) {
        section.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});

// qrun api//
let surscontainer = document.querySelector('.suerhcontainer');
getgoo()
function getgoo(){
    fetch('https://api.alquran.cloud/v1/meta')
    .then(Response => Response.json())
    .then(data=>{
        let suery = data.data.surahs.references
        let numbersuery = 114
        for (let i = 0; i < numbersuery; i++) {
            surscontainer.innerHTML += `
            <div class="suriy">
                <p>${suery[i].name}</p>
                <p>${suery[i].englishName}</p>
            </div>
            `
        }
        let sur = document.querySelectorAll('.suriy')
        let popuap = document.querySelector(".quran-popaup")
        let ayet = document.querySelector(".ayet")
        sur.forEach((title,index)=>{
            title.addEventListener('click',()=>{
                fetch(`https://api.alquran.cloud/v1/surah/${index+ 1}`)
                .then(Response => Response.json())
                .then(data=>{
                    ayet.innerHTML = "";
                    let goayet = data.data.ayahs
                    goayet.forEach(hoo=>{
                        popuap.classList.add("active")
                        ayet.innerHTML += `
                        <p>(${hoo.numberInSurah})-${hoo.text}</P>
                        `
                    })
                })
            })
        })
        let cloes = document.querySelector(".close-pop")
        cloes.addEventListener('click' , ()=>{
            popuap.classList.remove('active')
        })
    })
}


// prye  //

let cards = document.querySelector(".cards")
getory()
function getory(){
    fetch('https://api.aladhan.com/v1/timingsByCity/01-05-2024?city=cairo&country=egypt+Arab+Emirates&method=8')
    .then(Response => Response.json())
    .then(data=>{
        let times = data.data.timings
        cards.innerHTML = ''
        for (let time in times) {
            cards.innerHTML +=`
            <div class="card">
                <div class="cercil">
                    <svg>
                        <circle cx="100" cy="100" r="100">

                        </circle>
                    </svg>
                    <div class="pryteyb">${times[time]}</div>
                </div>
            <p>${time}</p>
        </div>
            `
        }
    })
}

//  siad bar//

let sed = document.querySelector(".bris")
let bar = document.querySelector(".header ul")

sed.addEventListener('click' , ()=>{
    bar.classList.toggle('foo')
})
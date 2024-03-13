//red ,orange , purpe-green and uske neeche ke teen lines delete kr do.

function loco_gsap(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
lerp:0.02,
  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

loco_gsap();

gsap.to('.part-1 img', {
    scale: 1.1,
    duration: 1.9,
    delay: .7,
})
var providedServices = [{
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2022/07/567856756756346h.webp',
}, {
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2023/06/Shop_Underwear_Tile_b66d4785-3f68-4262-9c47-425ade36e4c7.webp',
}, {
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2022/07/SI201711270407_hires_jpeg_24bit_rgb-scaled.jpeg',
}, {
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2022/07/16.png',
}, {
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2022/07/61721729e29402972cd58b91_patagonia-2022.jpeg',
}, {
    field: 'Strategy',
    description: 'We work with leadership teams to develop a human centred design approach to meaningful, relevant, and responsive strategy.',
    img: 'https://renystudio.com/wp-content/uploads/2022/07/reny-digital-2022-3.png',
},]

var serviceContainer = document.querySelector('.services-container');
var clutter1 = '';
providedServices.forEach(function (elem, index) {
    clutter1 += `
    <div  class="service-offered">
                <img data-scroll data-scroll-speed="-3" src=${elem.img} alt="imgage not found">
                <h2>${elem.field}</h2>
                <p>${elem.description}</p>
            </div>
    `
})
serviceContainer.innerHTML = clutter1;

let textTobeSplit = document.querySelector('.color-filling-text h3');

let splittedText = textTobeSplit.innerHTML.split(' ');
let clutter2 = '';
splittedText.forEach(function (val) {
    clutter2 += `
    <span class="spn">${val}</span>
    `
})
textTobeSplit.innerHTML = clutter2;

gsap.to('.spn', {
    scrollTrigger:{
        trigger:'.color-filling-text',
        scroller:'#main',
        markers:true,
        start:'start 45%',
        end:'top -60%',
        scrub:2,
    },
    color: '#F9EEDB',
    stagger:5,
    opacity:1,
})

let newsHypeCont = document.querySelector('.news-hype-container')
let hypeNews = [
    {
        image: 'https://renystudio.com/wp-content/uploads/2024/01/liln8m8utre.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE'
    }, {
        image: 'https://renystudio.com/wp-content/uploads/2024/01/sfszuki2cvy-1536x1022.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE',
    }, {
        image: 'https://renystudio.com/wp-content/uploads/2024/01/jqk3vxerdf0.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE',
    }, {
        image: 'https://renystudio.com/wp-content/uploads/2024/01/8kirpiitwi4-1536x1024.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE',
    }, {
        image: 'https://renystudio.com/wp-content/uploads/2023/12/rf6ywhvkrly-1536x1020.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE'
    }, {
        image: 'https://renystudio.com/wp-content/uploads/2023/07/JOHNSONBlake-230309_GT_1038-1536x1024.jpg',
        text: 'RENY® PARTNERS WITH THE B CORP CLIMATE COLLECTIVE',
    }]
let clutter3 = '';
hypeNews.forEach(function (val) {
    clutter3 += `
    <div class="news-hype-content">
    <img src=${val.image} alt="">
    <h1>${val.text}</h1>
    </div>
    `
})
newsHypeCont.innerHTML = clutter3;


let comp = document.querySelector('.clients');
let compList = ['https://renystudio.com/wp-content/uploads/2023/04/1-2.png', 'https://renystudio.com/wp-content/uploads/2023/04/2-2.png', 'https://renystudio.com/wp-content/uploads/2023/04/3-3.png', 'https://renystudio.com/wp-content/uploads/2023/04/8.png', 'https://renystudio.com/wp-content/uploads/2023/04/6.png', 'https://renystudio.com/wp-content/uploads/2023/04/7.png', 'https://renystudio.com/wp-content/uploads/2023/04/13.png', 'https://renystudio.com/wp-content/uploads/2023/04/15.png', 'https://renystudio.com/wp-content/uploads/2023/04/16.png', 'https://renystudio.com/wp-content/uploads/2023/04/16.png', 'https://renystudio.com/wp-content/uploads/2023/04/17.png', 'https://renystudio.com/wp-content/uploads/2023/04/9.png',]

let clutter4 = '';
compList.forEach(function (val) {
    clutter4 += `
    <div class="comp-container">
    <img src=${val} alt="">
</div>
    `
})
gsap.to('.diff-val',{
    duration:.1,
})
comp.innerHTML = clutter4;
let changingValSpn=document.querySelector('.change-h2');
const wordArray=[" ","powerfull"," ","sensible"," ","important"," ","valuable"," ","that matters"," ","that changes things"," ","move you"," ","move me"," ","creative"]//n=9.
let i=0;
setInterval(function(val){
    i=(i%9);
    changingValSpn.innerHTML=wordArray[i];
    i++;
},1000)

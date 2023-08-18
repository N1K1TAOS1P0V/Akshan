// вывод товара
const CATALOG = [
    {
        id: 'el1',
        name: 'Framed black and brown',
        cost: '$ 79.00',
        img: 'img/catalog--chair--img.svg'
    },
    {
        id: 'el2',
        name: 'Fluted Bar Cabinet',
        cost: '$ 99.00',
        img: 'img/catalog--bar--img.svg'
    },
    {
        id: 'el3',
        name: 'Bisou Accent Chair',
        cost: '$ 59.00',
        img: 'img/catalog--framed--img.svg'
    },
    {
        id: 'el1',
        name: 'Framed black and brown',
        cost: '$ 79.00',
        img: 'img/catalog--chair--img.svg'
    },
    {
        id: 'el2',
        name: 'Fluted Bar Cabinet',
        cost: '$ 99.00',
        img: 'img/catalog--bar--img.svg'
    },
    {
        id: 'el3',
        name: 'Bisou Accent Chair',
        cost: '$ 59.00',
        img: 'img/catalog--framed--img.svg'
    }
];
const ROOT_PRODUCTS = document.getElementById('products');
class Products {

    render(){
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, cost, img }) => {
            htmlCatalog += `
                <li class="catalog--item">
                    <img src="${img}" alt="">
                    <div class="catalog--item--text">
                        <p class="font--style--20">${name}</p>
                        <p class="font--style--20">${cost}</p>
                    </div>
                </li>
            `;
        });
        ROOT_PRODUCTS.innerHTML = htmlCatalog;
    };
};

const productsPage = new Products();
productsPage.render();
/////////////
const slider = document.querySelector('.catalog');
let isDown = true;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 1;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
////////////
let featuresName = document.querySelectorAll('.features--name'),
    featuresImg = document.querySelector('.features--img');

for (i of featuresName){
    i.addEventListener('mouseover', function(){
        this.style.color = '#EFF422';
        let dataPrice = this.getAttribute("data-price");
        this.style.borderBottom = '2px solid #EFF422';
        this.nextElementSibling.src = `img/catalog--${dataPrice}--img.svg`;
        featuresImg.src = `img/catalog--${dataPrice}--img.svg`;
    })
    i.addEventListener('mouseout', function(){
        this.style.color = '#fff';
        this.style.borderBottom = '2px solid rgba(255, 255, 255, 0.17)';
        this.nextElementSibling.src = '';
    })
};
/////////////
let btnOpen = document.querySelector('.open'),
    btnClose = document.querySelector('.close'),
    secBody = document.querySelector('body');

btnOpen.addEventListener('click', function(){
    btnOpen.style.display = 'none';
    document.querySelector('.header--menu--media').classList.remove('hidden');
    secBody.style.overflow = "hidden";
})
btnClose.addEventListener('click', function(){
    btnOpen.style.display = 'block';
    document.querySelector('.header--menu--media').classList.add('hidden');
    secBody.style.overflow = "auto";
})

/*----------Nav Bar Progress img-------*/
const proress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const company_brand = document
.getElementById('company-brand');

var rgba1 = 'rgba(16, 24, 41, 0.863)';
var rgba2 = 'rgba(16, 24, 41, 0.863),'
var img = "url('img/pic7.jpg')"
var img2 = "url('img/pic9.jpg')"
var img3 = "url('img/pix2.jpg')"
var img4 = "url('img/services_header.jpg')"
// var img5 = "url('img/blogheader3.jpg')"


let i = 0;

company_brand.style.backgroundImage =` ${rgba1, rgba2, img}`
progressContainer.style.width = `${0}%`

const timer =  setInterval(() => {
  company_brand.style.backgroundImage =` ${rgba1, rgba2, img2}`
  progressContainer.style.width = `${i}%`

  
    if(i === 25) {
      
        clearInterval(timer)
    }
}, 10000);

// const timer2 =  setInterval(() => {
//   company_brand.style.backgroundImage =` ${rgba1, rgba2, img3}`
//   progressContainer.style.width = `${i}%`


//     if(i === 50) {
//         clearInterval(timer2)
        
//     }
// }, 20000);

const timer3 =  setInterval(() => {
  company_brand.style.backgroundImage =` ${rgba1, rgba2, img3}`
  progressContainer.style.width = `${i}%`


    if(i === 100) {
        clearInterval(timer3)
        
    }
}, 30000);

const timer4 =  setInterval(() => {
  company_brand.style.backgroundImage =` ${rgba1, rgba2, img4}`
  progressContainer.style.width = `${i}%`


    if(i === 100) {
        clearInterval(timer4)
        
    }
}, 40000);

// const timer5 =  setInterval(() => {
//   company_brand.style.backgroundImage =` ${rgba1, rgba2, img5}`
//   progressContainer.style.width = `${i}%`


//     if(i === 100) {
//         clearInterval(timer5)
        
//     }
// }, 50000);


/*-----------ASO js ----------------*/
AOS.init({
  offset: 200,
  duration: 1000
});






const speakersData = [

    {
        id: '1',
        name: 'Burnaboy',
        span: 'gbedu',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/Burna.png',
    },

    {
        id: '2',
        name: 'Coldplay',
        span: 'player',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/coldplay.jpg',
    },
    {
        id: '3',
        name: 'Fun',
        span: 'party night',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/fun.jpg',
    },
    {
        id: '4',
        name: 'Kelvin',
        span: 'laughing',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/kelvin.jpg',
    },
    {
        id: '5',
        name: 'Giators',
        span: 'gbedu',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/play.jpg',
    },
    {
        id: '6',
        name: 'Wizkid ',
        span: 'gbedu',
        description: ' a song writer a producer a performer 10 times grammy aaward winner and bet award and the king of afro pop',
        featured_image2: '../images/wizkid.jpg',
    },
]

const dynamicdatas = document.querySelector('.section3')
for (let a = 0; a < speakersData.length; a++) {
    const getHtmls = document.querySelector('.section3').innerHTML
    const id = speakersData[a].id
    dynamicdatas.innerHTML = `
  
     <div class = 'speakers-card' ${id}>
     <div class='speaker'>  
      <img src =${speakersData[a].featured_image2}>   
     <div>  
      <h2 class="speaker-header">  ${speakersData[a].name}</h2>
     <span> ${speakersData[a].span} </span>
     </div>
     </div>
      <p>   ${speakersData[a].description}</p>
     </div>
    
    ${getHtmls}`
}
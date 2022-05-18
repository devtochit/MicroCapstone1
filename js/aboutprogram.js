


const speakersData = [

    {
        id: '1',
        name: 'Opening',
        description: 'the event will open with mr gary as our speaker',
        featured_image2: '../images/Burn.jpg',
    },

    {
        id: '2',
        name: 'playtime',
        description: 'A play by the famous gladiators ',
        featured_image2: '../images/coldplay.jpg',
    },
    {
        id: '3',
        name: 'songs',
        description: 'songs by guests ',
        featured_image2: '../images/fun.jpg',
    },
    {
        id: '4',
        name: 'jokes',
        description: 'some time of jokes with kevin hart',
        featured_image2: '../images/kelvin.jpg',
    },
    {
        id: '5',
        name: 'songs ',
        description: 'songs by cold play ',
        featured_image2: '../images/play.jpg',
    },
    {
        id: '6',
        name: 'songs ',
        description: 'songs by cold play ',
        featured_image2: '../images/wizkid.jpg',
    },
]

const dynamicdatas = document.querySelector('.section2')
for (let a = 0; a < speakersData.length; a++) {
    const getHtmls = document.querySelector('.section2').innerHTML
    const id = speakersData[a].id
    dynamicdatas.innerHTML = `
  
     <div class = 'about-card' ${id}>
     <div class='img-row'>   <img src =${speakersData[a].featured_image2}  ${id}></div>
      <h2 class="about-header">  ${speakersData[a].name}</h2>
      <p>   ${speakersData[a].description}</p>
     </div>
    
    ${getHtmls}`
}
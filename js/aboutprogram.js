


const programData = [

    {
        id: '1',
        name: 'Opening',
        description: 'the event will open with mr gary as our speaker',
        featured_image2: '../images/program_icon_01.png',
    },

    {
        id: '2',
        name: 'playtime',
        description: 'A play by the famous gladiators ',
        featured_image2: '../images/program_icon_02.png',
    },
    {
        id: '3',
        name: 'songs',
        description: 'songs by guests ',
        featured_image2: '../images/program_icon_03.png',
    },
    {
        id: '4',
        name: 'jokes',
        description: 'some time of jokes with kevin hart',
        featured_image2: '../images/program_icon_04.png',
    },
    {
        id: '5',
        name: 'songs ',
        description: 'songs by cold play ',
        featured_image2: '../images/program_icon_05.png',
    },
]

const dynamicdata = document.querySelector('.section2')
for (let a = 0; a < programData.length; a++) {
    const getHtml = document.querySelector('.section2').innerHTML
    const id = programData[a].id
    dynamicdata.innerHTML = `
  
     <div class = 'about-card' ${id}>
     <div class='img-row'>   <img src =${programData[a].featured_image2}  ${id}></div>
      <h2 class="about-header">  ${programData[a].name}</h2>
      <p>   ${programData[a].description}</p>
     </div>
    
    ${getHtml}`
}
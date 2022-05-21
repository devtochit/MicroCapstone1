const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlayy")
const ham = document.querySelector(".ham")
const menuX = document.querySelector(".menuX")
const menuItems = document.querySelectorAll(".menuLink")



const speakersData = [

    {
        id: '1',
        h5: 'Rage Against the Machine',
        h6: 'Los Angeles, California, United States',
        description: 'Formed in 1991, the group consists of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk.',
        featured_image1: "https://i.ibb.co/ZJP0mHk/rage.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: 'https://genius.com/artists/Rage-against-the-machine'
    },


    {
        id: '2',
        h5: 'Travis Scott',
        h6: 'Houston, Texas, United States',
        description: 'Jacques Berman Webster II, known professionally as Travis Scott, is an American rapper, singer, songwriter, and record producer.',
        featured_image1: "https://i.ibb.co/ZJP0mHk/rage.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: "https://i.ibb.co/CMxyDMK/gray-squares.png"
    },
    {
        id: '3',
        h5: 'Frank Ocean',
        h6: 'Long Beach, California, United States',
        description: 'He began his musical career as a ghostwriter, prior to joining hip hop collective Odd Future in 2010. In 2011, Ocean released his critically successful debut mixtape Nostalgia,Ultra',
        featured_image1: "https://i.ibb.co/ZJP0mHk/rage.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: 'https://genius.com/artists/Frank-ocean'
    },
    {
        id: '4',
        h5: 'Calvin Harris',
        h6: 'Dumfries, , United Kingdom',
        description: 'Adam Richard Wiles, known professionally as Calvin Harris, is a Scottish DJ, record producer, singer, and songwriter. He is known for his singles "We Found Love", "This Is What You Came For", "Summer", "Feel So Close", "Feels", and “One Kiss',
        featured_image1: "https://i.ibb.co/ZJP0mHk/rage.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: 'https://genius.com/artists/Calvin-harris'
    },

    {
        id: '5',
        h5: 'Lana del Rey',
        h6: 'Manhattan, New York, United States',
        description: 'Elizabeth Woolridge Grant, known professionally as Lana Del Rey, is an American singer,songwriter, musician and record producer',
        featured_image1: " https://i.ibb.co/WnxQ4rs/travis.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: 'https://genius.com/artists/Lana-del-rey'
    },

    {
        id: '6',
        h5: 'Tom Yorke',
        h6: 'Wellingborough, United Kingdom',
        description: 'Thomas Edward Yorke is an English musician and the main vocalist and songwrit    the rock band Radiohead. A multi-instrumentalist, he mainly plays guitar and keyboards nd is known for his falsetto.',
        featured_image1: "https://i.ibb.co/WnxQ4rs/travis.jpg",
        featured_image2: "https://i.ibb.co/CMxyDMK/gray-squares.png",
        live_link: 'https://genius.com/artists/Thom-yorke'
    },

]

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHambuger)
})

ham.addEventListener('click', toggleHambuger)
menuX.addEventListener('click', toggleHambuger)
overlay.addEventListener('click', toggleHambuger)

function toggleHambuger() {
    overlay.classList.toggle('showOverlay')
    sideNav.classList.toggle('showNav')
}




const dynamicdatas = document.querySelector('.first-articles-col')
for (let a = 0; a < speakersData.length; a++) {
    const getHtmls = document.querySelector('.first-articles-col').innerHTML
    const id = speakersData[a].id
    dynamicdatas.innerHTML = `
                                                        <article class="col-lg">
                                                            <div class="featured-speaking-content ">
                                                                <div class="first-articles-col row row-cols-lg-2">
                                                                    <article class="col-lg" ${id}>
                                                                        <a href= ${speakersData[a].live_link} target="_blank">
                                                                            <img src= ${speakersData[a].featured_image1} alt="avatar" class="w-25 mr-3">
                                                                                <img src=${speakersData[a].featured_image2} alt="gray-square"
                                                                                    class="gray-square position-absolute">
                                                                                    <div class="right-content">
                                                                                        <h5 class="font-weight-bold">${speakersData[a].h5}</h5>
                                                                                        <h6 class="text-primary-color font-italic">${speakersData[a].h6}</h6>
                                                                                     
                                                                                            <p> ${speakersData[a].description}</p>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div></article>
                                                                </div>
                                                            
                                                            ${getHtmls}`
}

const bMenu = document.querySelector('#bmenu');
const moreOptions = document.querySelector('#bmore')
const mobileMenu = document.querySelector('.links')
const moreMenu = document.querySelector('.more .menu')
bMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle('toggle')
})

moreOptions.addEventListener('click',(e)=>{
    e.preventDefault();

    moreMenu.classList.toggle('toggle');
})

const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')
const currentContainer = document.querySelector('#current')
const containerVideos = document.querySelector('.videos-container')
let current = 0

async function renderCurrentVideos(){
    // var countItems = 0
   return await fetch('/videos',{
        method:'GET',
        headers:{"Content-Type": "application/json"}
    })
    .then(res =>{
        if(res.ok) return res.json();
    })
    .then(res => {
        //extraemos los datos desde el servidor haciendo una peticion 
        const arrayVideos = res.videos.map((foo,posc)=>{
        return {
            ...posc,
            foo
        }
     })
     return Promise.resolve(arrayVideos)
    })
    


}

async function main(){
    const response =  await renderCurrentVideos()
 return response
}    
async function currentVideos(current){
    const videos = await main()
    currentContainer.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${videos[current].foo.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
currentVideos(current)
btnNext.addEventListener('click',async(e)=>{
   e.preventDefault()
   let videos = await main()
   let changed = current
   current = current + 1 <= videos.length-1?current+=1:current
 if(changed !== current){
   currentVideos(current)
 }
})
btnPrev.addEventListener('click',async(e)=>{
    e.preventDefault()
  let changed = current
   current = current-1 >=0?current-=1:current
   if(changed !==current){
   currentVideos(current)
   }
})

async function renderVideos(){
   const videos = await main()
   let html = ''
   html = videos.map(video =>{
    return  `
    <div class="item">
        <a href="#">
            <img src="https://i.ytimg.com/vi/${video.foo.id}/mqdefault.jpg" alt="">
        </a>
    </div>
    `
   })

   containerVideos.innerHTML = html.join("")
   document.querySelectorAll(".item a").forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();
        currentVideos(index)
      })
    })
}
renderVideos()


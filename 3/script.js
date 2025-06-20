let mai =document.getElementById('main')
let csr= document.getElementById('cursor')


mai.addEventListener('mousemove', (dets) => {
    
    csr.style.left = dets.x + "px"
    csr.style.top = dets.y + "px"
})
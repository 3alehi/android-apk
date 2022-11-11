let click = document.getElementById('click')
let h1 = document.getElementById('h1')

click.addEventListener('click',()=>{
    h1.style.display=='none'
if(h1.style.display=='none'){
    h1.style.display='block'
}
else{
    h1.style.display='none'
}
})
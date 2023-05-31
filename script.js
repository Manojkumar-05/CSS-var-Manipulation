
const input = document.querySelectorAll('input')

input.forEach( e => e.addEventListener('click', () =>{
    let suffix = e.dataset.s || " "
    if(e.name == 'rotate'){
        document.documentElement.style.setProperty(`--${e.name}`, `rotate(${e.value}deg)`)
    }
    else{
    document.documentElement.style.setProperty(`--${e.name}`, `${e.value+suffix}`)
    }
}))

input.forEach( e => e.addEventListener('mousemove', () =>{
    let suffix = e.dataset.s || " "
    if(e.name == 'rotate'){
        document.documentElement.style.setProperty(`--${e.name}`, `rotate(${e.value}deg)`)
    }
    else{
    document.documentElement.style.setProperty(`--${e.name}`, `${e.value+suffix}`)
    }
}))

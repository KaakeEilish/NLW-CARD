let isexplorer = true
function changefoto(event) {
    const card = event.currentTarget
    const bg = isexplorer
     ? "ignite"
     : "explorer"

     isexplorer = !isexplorer
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
}); 

function addStyle(){
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
}

function removStyle(){
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
}

function openPopup(id) {

    const scrollY = window.scrollY;
    const ids = [1,2,3,4,5];

    for(let x in ids){
        // Get the popup element
        if(id == ids[x]) {
            let popup = document.getElementById(`popup${ids[x]}`);
            addStyle();
            popup.classList.add('open-popup');
            document.body.setAttribute('data-scroll-position', scrollY);

        }
    }
}

function closePopup(id) {
    const ids = [1,2,3,4,5];

    for(let x in ids){
        if(id == ids[x]){
            let popup = document.getElementById(`popup${ids[x]}`);
            popup.classList.remove('open-popup');
            const scrollY = parseInt(document.body.getAttribute('data-scroll-position'));
            removStyle();
            window.scrollTo(0, scrollY);
        }
    }
}
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
const ids = [1,2,3,4,5,6,7];

function openPopup(id) {

    const scrollY = window.scrollY;
    for(let x in ids){
        // Get the popup element
        if(id == ids[x]) {
            if(![3,4,5].includes(ids[x])) {
                let popup = document.getElementById(`popup1${ids[x]}`);

                // Apply styles to prevent scrolling on the entire page
                addStyle();

                // Make the popup visible
                popup.classList.add('open-popup1');
                
                // Store the scroll position for later use
                document.body.setAttribute('data-scroll-position', scrollY);

            } else {
                let popup = document.getElementById(`popup2${ids[x]}`);

                // Apply styles to prevent scrolling on the entire page
                addStyle();

                // Make the popup visible
                popup.classList.add('open-popup2');
                
                // Store the scroll position for later use
                document.body.setAttribute('data-scroll-position', scrollY);
            }
        }
    } 

}

function closePopup(id) {

    for(let x in ids){
        if(id == ids[x]){
            if(![3,4,5].includes(ids[x])) {
                let popup = document.getElementById(`popup1${ids[x]}`);
            
                // Hide the popup
                popup.classList.remove('open-popup1');
                
                // Get the stored scroll position
                const scrollY = parseInt(document.body.getAttribute('data-scroll-position'));
                
                // Remove the fixed positioning and restore scrolling
                removStyle();
                
                // Restore the scroll position
                window.scrollTo(0, scrollY);
            } else {
                let popup = document.getElementById(`popup2${ids[x]}`);
            
                // Hide the popup
                popup.classList.remove('open-popup2');
                
                // Get the stored scroll position
                const scrollY = parseInt(document.body.getAttribute('data-scroll-position'));
                
                // Remove the fixed positioning and restore scrolling
                removStyle();
                
                // Restore the scroll position
                window.scrollTo(0, scrollY);
            }
        }
    }

}
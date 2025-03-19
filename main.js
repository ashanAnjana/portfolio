var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
}); 


function openPopup(id) {
// console.log(id);
    const scrollY = window.scrollY;
    
    // Get the popup element
    if(id == 1) {
        let popup = document.getElementById("popup1");

            // Apply styles to prevent scrolling on the entire page
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.overflow = 'hidden';
        
        // Make the popup visible
        popup.classList.add("open-popup1");
        
        // Store the scroll position for later use
        document.body.setAttribute('data-scroll-position', scrollY);
    }

    if(id == 2) {
        let popup = document.getElementById("popup2");

            // Apply styles to prevent scrolling on the entire page
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.overflow = 'hidden';
        
        // Make the popup visible
        popup.classList.add("open-popup2");
        
        // Store the scroll position for later use
        document.body.setAttribute('data-scroll-position', scrollY);
    }
    
    // // Apply styles to prevent scrolling on the entire page
    // document.body.style.position = 'fixed';
    // document.body.style.width = '100%';
    // document.body.style.top = `-${scrollY}px`;
    // document.body.style.overflow = 'hidden';
    
    // // Make the popup visible
    // popup.classList.add("open-popup");
    
    // // Store the scroll position for later use
    // document.body.setAttribute('data-scroll-position', scrollY);


}
function closePopup(id) {
console.log(id);
    if(id == 1){
        console.log("A");

        let popup = document.getElementById("popup1");
    
        // Hide the popup
        popup.classList.remove("open-popup1");
        
        // Get the stored scroll position
        const scrollY = parseInt(document.body.getAttribute('data-scroll-position'));
        
        // Remove the fixed positioning and restore scrolling
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        
        // Restore the scroll position
        window.scrollTo(0, scrollY);
    }

    if(id == 2){
        console.log("b");

        let popup = document.getElementById("popup2");
        
        // Hide the popup
        popup.classList.remove("open-popup2");
        
        // Get the stored scroll position
        const scrollY = parseInt(document.body.getAttribute('data-scroll-position'));
        
        // Remove the fixed positioning and restore scrolling
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        
        // Restore the scroll position
        window.scrollTo(0, scrollY);
    }
}
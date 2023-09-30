const navLinks=document.querySelectorAll('.nav-links');
const search = document.getElementById('search');
const searchBar =  document.getElementById('searchBar');
const svgX='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-newgreen" id="cross"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
 const svgY='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"stroke="currentColor" class="w-5 h-5" id="search"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>'
// CODES FOR TOGGLING SEARCHBAR 
  search.addEventListener('click', () => {
    if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden');
        search.innerHTML=svgX;
     
    }
    else{
        searchBar.classList.add('hidden');
        search.innerHTML=svgY
    }
});
//CODES FOR SUBNAVBARS
    navLinks.forEach(links=>{
        console.log(links.href,window.location.href);
        if (links.href===window.location.href) {
            links.setAttribute('aria-current','page');           
        }
    })

// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the loading container
    document.querySelector('.loading-container').style.display = 'none';

    // Show the content container
    document.querySelector('.body').style.display = 'block';
});

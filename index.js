window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger-btn').addEventListener('click', function() {
      document.querySelector('#burger-menu').classList.toggle('header_active-burger')  
    })
})
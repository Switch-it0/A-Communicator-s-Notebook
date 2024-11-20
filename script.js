const navbar = document.querySelector( '.navbar' );
window.addEventListener( 'scroll', function(){
        if(this.scrollY > 200){
            navbar.classList.add( 'slidedown' );
            logo.style.color = '#fff'
        }else{
            navbar.classList.remove( 'slidedown' );
            logo.style.color = ''
        }
})
    // copy-link-input script
    document.querySelectorAll(".icon1").forEach((copyLinkParent) => {
      const inputField = copyLinkParent.querySelector(".copy-link-input");
      const copyButton = copyLinkParent.querySelector(".copy-link-button");
      
    
      inputField.addEventListener("focus", () => inputField.select());
    
      copyButton.addEventListener("click", () => {
        const text = inputField.value;
        inputField.select();
        navigator.clipboard.writeText(text);
    
        inputField.value = "Copied!";
        setTimeout(() => (inputField.value = text), 2000);
      });
    });
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

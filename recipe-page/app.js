let colorFlag = false;

const checkboxActive = () => {
   const checkboxes = document.querySelectorAll("input");
   for(let box of checkboxes) {
      box.addEventListener('change', function() {
         box.classList.toggle('box-active');
      });
   }
}

const darkMode = () => {
   const root = document.documentElement;
   document.addEventListener("keyup", event => {
      if(event.key == "q") {
         if(!colorFlag) {
            root.style.setProperty('--light-color', 'rgb(31, 31, 31)');
            root.style.setProperty('--heavy-color', 'white');
            root.style.setProperty('--light-gray', '#333333');
            root.style.setProperty('--dark-gray', '#BDBDBD');
            root.style.setProperty('--special-color', '#333333');
         }
         else {
            root.style.setProperty('--light-color', 'white');
            root.style.setProperty('--heavy-color', 'black');
            root.style.setProperty('--light-gray', '#BDBDBD');
            root.style.setProperty('--dark-gray', '#333333');
            root.style.setProperty('--special-color', 'white');
         }
         colorFlag = !colorFlag;
      }
   });
}

checkboxActive();
darkMode();
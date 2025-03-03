function updatePapers() {
    activeTags = [];
    const searchTags = document.querySelectorAll('.search-tag');
    for (let t = 0; t < searchTags.length; t++){
        if (searchTags[t].getAttribute('data-active') == "true"){
            activeTags.push(searchTags[t].getAttribute('data-content'));
        }
      }

    const list = document.getElementById("papers-list");
    
    const papersList = list.getElementsByTagName('li');
  
    for (let i = 0; i < papersList.length; i++) {
      const listItem = papersList[i];
      const text = listItem.textContent || listItem.innerText;
      
      show = false;
      for (let t = 0; t < activeTags.length; t++){
        if (text.toLowerCase().replace(/\s+/g, '').includes(activeTags[t].toLowerCase().replace(/\s+/g, ''))){
            show = true;
            break;
        }
      }
      if (show) {
        listItem.style.display = ''; // Show the item
      } else {
        listItem.style.display = 'none'; // Hide the item
      }
    }
  }

const searchTags = document.querySelectorAll('.search-tag');
searchTags.forEach(element => {
    element.addEventListener('click', function() {
        if (this.getAttribute('data-active') == "true"){
            this.setAttribute('data-active', "false");
        } else{
            this.setAttribute('data-active', "true");
        }
        updatePapers();        
    });
  });


const submitBtn = document.getElementById(`tier-btn`);
const tierIntputBox = document.getElementById('tier-input-box');

const imagebtn = document.getElementById('img-btn'); 
const imageInputBox = document.getElementById('img-input-box');


submitBtn.addEventListener(`click`,() => {
    // on clicking button new tier-list will be created
    if(tierIntputBox.value == ''){ // if tierInputBox is empty, and user wants to create a tierList
        alert(`please give a valid tier name ..`);
        return;
    }
    createTierList(tierIntputBox.value);
    tierIntputBox.value = ''; // once new Tier List created --> empty the tierInputBox value
})

imagebtn.addEventListener('click',() => {
    // on clicking this button new images kept updating to image-section
    if(imageInputBox.value == ''){
        alert(`please give propper URL ...`);
        return;
    }
    createImage(imageInputBox.value);
    imageInputBox.value = '';
})
function createImage(imageURL){
    const newImage = document.createElement('img');
    newImage.src = imageURL;

    const newImageContainer = document.createElement(`div`);
    newImageContainer.classList.add(`image-container`);
    newImageContainer.appendChild(newImage); // adding 'img' inside 'div'
    newImageContainer.setAttribute('draggable','true');

    const imageSection = document.getElementById(`images-section`);
    imageSection.appendChild(newImageContainer);
    
}

function createTierList(tierListName){
    const newTierList = document.createElement(`div`); // a 'div' tag created
    newTierList.classList.add("tier-list"); // class name of this div <-- tier-list

    const heading = document.createElement('h1') // a 'h1' tag created
    heading.textContent = tierListName; // tierListName --> its a variable passed as an argument

    const newTierListItems = document.createElement('div'); // a 'div' tag created
    newTierListItems.classList.add(`tier-list-items`);

    newTierList.appendChild(heading); // making this 'h1' a child of 'div' with class 'tier-list'
    newTierList.appendChild(newTierListItems); // making this 'div' a child of 'div' with class 'tier-list'
    
    // now we will put this entire thing (of class name: tier-list) inside html <section> of id 'tier-list-section'
    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
}
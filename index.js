const h3 = document.querySelector('h3');
let counter = 0;


const bubblemaker = () => {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble')
    document.body.appendChild(bubble);
    
    const size = Math.random() * 200 + 100 + "px";
    // console.log(size);
    
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    
    const plusminus = Math.random() > 0.5 ? 1 : -1;

    bubble.style.setProperty('--left', Math.random() * 100*plusminus + "%")

    bubble.addEventListener('click', () => {
        counter++;
        h3.textContent = counter
        bubble.remove();
        // const titre = document.createElement('h4');
        // if (counter>0 && counter <2) {
        //         titre.textContent = 'Bravo, vous êtes doué !'
        //         // document.body.appendChild(titre);
        //     }
        // else if (counter>1 && counter <3) {
        //         titre.textContent = 'Génial, tu es fort !'
        //     }
        // else if (counter>2 && counter <4) {
        //         titre.textContent = 'Quelle vie de chômeur..'
        //         // document.body.appendChild(titre);
        //     }
        // document.body.appendChild(titre);
        })
    
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}    
    
setInterval(bubblemaker, 200);



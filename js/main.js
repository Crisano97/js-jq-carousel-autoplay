// Milestone 2 - inserisco le immagini grazie all'array;
// Creo un ciclo for che concatena un template literal.
// le immagini saranno nascoste, tranne la prima che avrà una classe active che la renderà visibile;



const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];



//recupero il parent all'interno del quale inserire le immagini;
const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');

for (index = 0; index < images.length; index++) {

    //creo un elemento di tipo img;
    const newImage = document.createElement('img');
    //gli attribuisco le proprietà che voglio;
    newImage.classList.add('img-fluid', 'd-none');
    newImage.setAttribute('src', images[index]);
    //le aggiungo al parent;
    imagesWrapper.append(newImage);  

}

// seleziono le immagini che ho creato selezionandole per la classe comune;
let imageList = document.querySelectorAll(".d-none");
    imageList[0].classList.remove('d-none')

// recupero il bottone tramite id;
const btnNext = document.getElementById('next-button');

    let activeIndex = 0;
 
    //aggiungo un evento al bottone, conseguente al click;
    btnNext.addEventListener('click', function() {

        // aggiunga la classe d-none all'elemento che in partenza era visibile;
        imageList[activeIndex].classList.add('d-none');
        
        //aumento il mio indice di 1;
        activeIndex++;

        //se il mio indice è identico alla lunghezza della lista;
        if (activeIndex === imageList.length){
            // allora il mio indice torna a 0;
            activeIndex = 0;
        }
        //rimuovo la classe d-none all'elemento con indice incrementato;
        imageList[activeIndex].classList.remove('d-none');

        
    });

const btnPrev = document.getElementById('prev-button');
 
btnPrev.addEventListener('click', function() {


        imageList[activeIndex].classList.add('d-none');
        //diminuisco di 1 il mio indice;
        activeIndex--;

        // se il mio indice è più piccolo della lunghezza della mia lista;
        if (activeIndex === -1){
            //allora il mio indice sarà uguale all'ultimo elemento della mia lista;
            activeIndex = imageList.length -1;
        }

        imageList[activeIndex].classList.remove('d-none');

        
    });    


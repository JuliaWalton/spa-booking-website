// how can i split this up using classes
const treatmentMenu = [
    {
    id: 1,
    category: "massages",
    title: "FIRE & ICE STONE CBD MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 2,
    category: "massages",
    title: "THERAPEUTIC MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce . `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 3,
    category: "massages",
    title: "AROMATHERAPY MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stone. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 4,
    category: "massages",
    title: "PRENATAL MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammation, . `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 5,
    category: "massages",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to . `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 6,
    category: "skincare",
    title: "hydrating & brightening facial",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 7,
    category: "skincare",
    title: "texture balance + oil control facial",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 8,
    category: "skincare",
    title: "pore extraction and acne facial",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. . `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 9,
    category: "skincare",
    title: "anti-aging red LED therapy",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammation, while the warm. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 10,
    category: "skincare",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammation, while the warm stones ease muscles and soothe aches and pains. This signature service begin. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 11,
    category: "haircare",
    title: "THERAPEUTIC MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuv. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 12,
    category: "haircare",
    title: "AROMATHERAPY MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to r. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 13,
    category: "haircare",
    title: "PRENATAL MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 14,
    category: "haircare",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammatio. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 15,
    category: "gentlemen",
    title: "for grooms - wedding day prep",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 16,
    category: "gentlemen",
    title: "anti-aging facial",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 17,
    category: "gentlemen",
    title: "PRENATAL MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammatio. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 18,
    category: "gentlemen",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 16,
    category: "packages",
    title: "anti-aging facial",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 17,
    category: "packages",
    title: "PRENATAL MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammatio. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 18,
    category: "packages",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
    {
    id: 18,
    category: "packages",
    title: "COUPLES MASSAGE",
    img: "drinks",
    desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
    price: "Monday–Thursday $345 / Friday–Sunday $355",
    },
]

// start of navigation toggle functionality
const navToggle = document.getElementById('nav-toggle');
// const links = document.querySelector('.links');
// const navHeader = document.querySelector('.nav-header')


// // end of nav toggle functionality


// const sidebarBtn = document.getElementById('sidebar-toggle');
// const nav = document.getElementById('nav');
// const media = window.matchMedia('(width < 800px)');
// const linksContainer = document.querySelector

// function setupNav(e) {
//     if (e.matches) {
//         console.log('is mobile');
//         navHeader.className = 'nav-header';
//         navToggle.style.display = 'flex';
//         console.log(navHeader.className);
        
//     } else {
//         console.log('is desktop');
//         navHeader.className = 'nav-header desktop-nav';
//         navToggle.style.display = 'none';
//     }
// }


// window.addEventListener('DOMContentLoaded', (e) => {
//     nav.className = 'nav-header desktop-nav';
//     navToggle.style.display = 'none';
// })

// media.addEventListener('change', (e) => {
//         setupNav(e);
// })



navToggle.addEventListener('click', (e) => {
    // const navHeader = e.currentTarget.parentElement;
    navHeader.style.transition = '.3s ease-in';
    navHeader.classList.toggle('show-links');

    const closeBtn = document.querySelector('.nav-close-btn');
    closeBtn.addEventListener('click', () => {
        navHeader.classList.remove('show-links');
    })
})


// start of carousel functionality
const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // const offset = button.dataset.carouselButton;
        // console.log(offset);
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest('[data-carousel]')
        .querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        } 
        if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})
// end of carousel functionality


// treatment menu card functionality
const content = document.querySelector('.content') 
const btnContainer = document.querySelector('.treatments-btn-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const treatmentsBody = document.querySelector('.treatments');

function displayItems(array) {
    let menuDisplay = array.map((item) => {
        // console.log(item.category)

        return `<div class="option">
                            <h4>${item.title}</h4>
                            <p>${item.desc}
                            </p>
                            <p class="price">${item.price}</p>
                    </div>`

            });
    menuDisplay = menuDisplay.join('');
    content.innerHTML = menuDisplay;

    // treatmentsBody.className = `treatments ${item.category}`;
    


}

btnContainer.addEventListener('click', (e) => {
    const keyword = e.target.dataset.orange;
    console.log(keyword)
    if(keyword) {
        displayByCategories = treatmentMenu.filter((item) => {
        if (keyword === item.category) {
            treatmentsBody.className = `treatments ${item.category}`;
            return item;
        } else {
            return;
        }
    })
    return displayItems(displayByCategories);
    }
})





filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach((item) => {
            if (item === btn) {
                item.classList.add('active');
                // cards.classList.add('show')
            } else {
                item.classList.remove('active');
                // cards.classList.remove('show')
            }
        })
    })
})




window.addEventListener('DOMContentLoaded', (e) => {
    content.innerHTML = treatmentMenu.map((item) => {
        if (item.category === 'massages') {
            treatmentsBody.className = `treatments ${item.category}`;
            console.log(item);
            return `<div class="option">
                            <h4>${item.title}</h4>
                            <p>${item.desc}
                            </p>
                            <p class="price">${item.price}</p>
                    </div>`
                }}).join('');
        });



// start of FAQ functionality
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    const btn = question.querySelector('.faq-question-btn');
    btn.addEventListener('click', (e) => {
        questions.forEach((item) => {
            if (item === question) {
                item.classList.toggle('show-answer');
                item.style.backgroundColor = "rgba(218, 165, 32, 0.5)";
            } else {
                item.classList.remove('show-answer');
                item.style.backgroundColor = "white";
            }
        })
    });

})

// end of FAQ functionality




// booking form 

const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

// should we change event to a select event or a change event? 
serviceSelect.addEventListener('change', (e) => {
    // console.log(e.target.value);
    let val = e.target.value;
    switch (val) {
        case "item1":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="massage1">aromatherapy massage</option>
                <option value="massage2">fire and ice massage</option>
                <option value="massage3">prenatal massage</option>
                <option value="massage4">foot massage</option>
                <option value="massage5">couples massage</option>`
            break;
        case "item2":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="skincare1">hydrating & brightening facial</option>
                <option value="skincare2">texture balance + oil control facial</option>
                <option value="skincare3">pore extraction and acne facial</option>
                <option value="skincare4">anti-aging red LED therapy</option>
                <option value="skincare5">wax treatments</option>`
            break;
        case "item3":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="haircare1">deep conditioning treatment</option>
                <option value="haircare2">simple trim + styling</option>
                <option value="haircare3">cut and color</option>
                <option value="haircare4">blowout</option>`
            break;
        case "item4":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="gentlemen1">haircut and clean shave</option>
                <option value="gentlemen2">hot wax brow and beard shaping</option>
                <option value="gentlemen3">anti-aging lymphatic massage + facial</option>
                <option value="gentlemen4">master sports massage</option>
                <option value="gentlemen5">couples massage</option>`
            break;
        case "item5":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="package1">bridal pamper package</option>
                <option value="package2">best for mom package</option>
                <option value="package3">couples paradise package</option>
                <option value="package4">men's selfcare package</option>`
            break;
}
})




const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];
// console.log(formSteps)
let currentStep = formSteps.findIndex((step, index) => {
        return step.classList.contains('active');
    })

    // console.log(currentStep);

    if (currentStep < 0) {
        currentStep = 0;
        // formSteps[currentStep].classList.add('active');
        showCurrentStep();
    }

    // console.log(currentStep); 
    
    
    function showCurrentStep() {
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep)
        })
    }




const inputs = [...formSteps[currentStep].querySelectorAll('input')];
const selects = [...formSteps[currentStep].querySelectorAll('select')];



const guestInput = document.getElementById('guests');
// const serviceSelect = document.getElementById('service'); 
// const serviceSpecifySelect = document.getElementById('service-specify');
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');


console.log(dateInput.getAttribute('min'))
let today = new Date().toISOString().slice(0, 10);
dateInput.setAttribute('min', today);
// let dd = today.getDate();
// let mm = today.getMonth();
// let yyyy = today.getFullYear();

// console.log(today)
// console.log(dd)
// console.log(mm + 1)
// console.log(yyyy)

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')





    multiStepForm.addEventListener('click', (e) => {
        let incrementor; 
        if (e.target.matches('[data-next]')) {
            incrementor = 1;
        } else if (e.target.matches('[data-previous]')) {
            incrementor = -1;
        } else if (e.target.matches('[data-submit]')) {
            console.log('hhh')
            e.preventDefault();
            checkLength(passwordInput, 3, 20);
            
        } 

        if (incrementor === undefined) {
            return
        }

        const allSelectsValid = selects.every(select => select.reportValidity());
        const allInputsValid = inputs.every(input => input.reportValidity());
        
        console.log(inputs);
        console.log(allInputsValid)
        console.log(allSelectsValid)
        if(allInputsValid && allSelectsValid) {
            currentStep += incrementor;
            showCurrentStep();
            // checkEmail(emailInput);
            checkLength(passwordInput, 3, 20);
            // checkPasswordmatch(passwordInput, password2Input);
        }
    })



const form = document.querySelector('.form')


// function checkEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log(re.test(email.value.trim()))
//     if (re.test(email.value.trim())) {
//         console.log('success')
//     } else {
//         console.log('email is invalid')
//     }
// }


function checkLength(password, min, max) {
    if (password.value.length < min) {
        password.setAttribute('oninvalid', `this.setCustomValidity('Password must be at least ${min} characters')`);
    } else if (password.value.length > max) {
        password.setAttribute('oninvalid', `this.setCustomValidity('Password cannot exceed ${max} characters')`);
    } else {
        return;
    }
}



// reviews 

const reviews = [
    {
        id: 1,
        name: 'Anna Koto',
        job: 'accountant',
        title: 'Wonderful Experience',
        img: '/images/unsplash/alex-starnes-PK_t0Lrh7MM-unsplash.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 4,
        name: 'Will Anderson',
        job: 'buisness owner',
        title: 'Nice Relaxing Spa',
        img: '/images/unsplash/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 3,
        name: 'Mateo Urdiales',
        job: 'product manager',
        title: 'Great Service, Awesome Amenitites',
        img: '/images/unsplash/jacinto-diego-_upgGOuAOYs-unsplash.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 1,
        name: 'Sarah Forbes',
        job: 'beauty blogger',
        title: 'Frequent Visitor',
        img: '/images/unsplash/pexels-maria-orlova-4946942.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    // {
    //     id: 1,
    //     name: 'Joseph Bennett',
    //     job: 'beauty blogger',
    //     img: '/images/unsplash/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
    //     text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    // },
];

const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const mainInfo = document.getElementById('main-info')
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let count = 0;

function showPerson(array) {
    const update = reviews[count];
    console.log(update)
    image.src = update.img;
    author.textContent = update.name;
    // job.textContent = update.job;
    mainInfo.textContent = update.title;
    info.textContent = update.text;
}

nextBtn.addEventListener('click', () => {
    count++;
    if (count >= reviews.length) {
        count = 0;
    }
    showPerson();
})

prevBtn.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = reviews.length - 1;
    }
    showPerson();
})



window.addEventListener('DOMContentLoaded', () => {
    showPerson();
})
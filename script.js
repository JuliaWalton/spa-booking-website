// how can i split this up using classes or use JSON file and import instead
const treatmentMenu = [
    {
        id: 1,
        category: "massages",
        title: "FIRE & ICE STONE CBD MASSAGE",
        img: "drinks",
        desc: "This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammation, while the warm stones ease muscles and soothe aches and pains.",
        time: "50 / 80 / 100 MINUTES",
        price: "$190 / $250 / $300.00",
    },
    {
        id: 2,
        category: "massages",
        title: "THERAPEUTIC MASSAGE",
        img: "drinks",
        desc: "Combat the effects of stress and overuse with medium to firm pressure and deep tissue techniques to soothe long standing or repetitive stress.",
        time: "50 / 80 / 100 MINUTES",
        price: "$80 / $120 / $180.00",
    },
    {
        id: 3,
        category: "massages",
        title: "AROMATHERAPY MASSAGE",
        img: "drinks",
        desc: "Let your senses be your guide to decide what is needed by choosing from aromatic blends of essential oils. Whether you are looking for stress relief, sinus relief, or an uplifting massage, we will take you on a journey with Red Flower’s Aromatherapy Blends.",
        time: "50 / 80 / 100 MINUTES",
        price: "$100 / $150 / $200.00",
    },
    {
        id: 4,
        category: "massages",
        title: "PRENATAL MASSAGE",
        img: "drinks",
        desc: "A massage personalized to your pregnancy helping you find comfort and a few moments of pure pampering.",
        time: "50 / 80 / 100 MINUTES",
        price: "$150 / $220 / $290.00",
    },
    {
        id: 5,
        category: "massages",
        title: "DEEP TISSUE MASSAGE",
        img: "drinks",
        desc: "Target chronic tension with one of our most popular massages of all time. This massage works to realign the deeper layers of muscles and connective tissues to improve not only how you feel but has positive impacts on systolic, diastolic, and arterial blood pressure.",
        time: "50 / 80 / 100 MINUTES",
        price: "$190 / $250 / $380.00",
    },
    {
        id: 6,
        category: "skincare",
        title: "hydrating & brightening facial",
        img: "drinks",
        desc: "This regenerating and lifting facial utilizes hyaluronic acid patches. Known for its immediate ability to plump and hydrate the skin and visibly treat wrinkles, it provides a noninvasive alternative to conventional fillers.",
        time: "50 MINUTES",
        price: "$130",
    },
    {
        id: 7,
        category: "skincare",
        title: "texture balance facial",
        img: "drinks",
        desc: "A blend of salicylic acid, resorcinol, and lactic acid in combination with powerful antioxidants, correcting peptides and plant-derived stem cells for maximum effective skin resurfacing.",
        time: "50 MINUTES",
        price: "$150",
    },
    {
        id: 8,
        category: "skincare",
        title: "pore extraction and acne facial",
        img: "drinks",
        desc: "This treatment begins with a deep cleanse, a gentle exfoliation and extraction of impurities.  Two treatment masks will be applied to purify and nourish the skin.",
        time: "50 MINUTES",
        price: "$190",
    },
    {
        id: 9,
        category: "skincare",
        title: "anti-aging red LED therapy",
        img: "drinks",
        desc: "A revolutionary low-level light therapy mask, is clinically proven to rejuvenate skin and improve the most problematic skin conditions. The skin is exposed to wavelengths of light to reduce fine lines and wrinkles, boost collagen, treat acne, promote wound healing, and improve skin tone.",
        time: "50 MINUTES",
        price: "$255",
    },
    {
        id: 10,
        category: "skincare",
        title: "Celebrity Facial",
        img: "drinks",
        desc: "Laser genesis and our Hydrafacial MD will have you looking like a hollywood celebrity. This  very popular facial produces immediate results with no down time for an instant glow.",
        time: "50 MINUTES",
        price: "$375",
    },
    {
        id: 11,
        category: "haircare",
        title: "SPECIAL OCCASION STYLE",
        img: "drinks",
        desc: "Curl and style hair or pinned back for a Partial Up-Do, perfect for an evening out. ",
        time: "50 MINUTES",
        price: "$90",
    },
    {
        id: 13,
        category: "haircare",
        title: "WOMEN'S HAIR CUT",
        img: "drinks",
        desc: "Scissor cut and style for women’s hair. Shampoo and style included.",
        time: "50 MINUTES",
        price: "$120",
    },
    {
        id: 14,
        category: "haircare",
        title: "CUT AND COLOR",
        img: "drinks",
        desc: "Refresh your look with a new color. It's preferred to schedule an inital consultation to describe length of hair, density, and style goal with stylist.",
        time: "50 / 80 / 100 MINUTES",
        price: "$100 / $250 / $380.00",
    },
    {
        id: 12,
        category: "haircare",
        title: "BLOWOUT",
        img: "drinks",
        desc: "Shampoo and blow out smooth for a quick and easy hair style.",
        time: "50 MINUTES",
        price: "$90",
    },
    {
        id: 15,
        category: "gentlemen",
        title: "for grooms - wedding day prep",
        img: "drinks",
        desc: "On wedding day, everyone may be looking at the bride, but she is looking at the groom. Feel and look your best with a custom facial, deep-tissue massage, and back wax",
        time: "80 MINUTES",
        price: "$330.00",
    },
    {
        id: 16,
        category: "gentlemen",
        title: "anti-aging facial",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones. `,
        time: "50 MINUTES",
        price: "$180",
    },
    {
        id: 17,
        category: "gentlemen",
        title: "THE BEARD FACIAL",
        img: "drinks",
        desc: "Perfect for the bearded gentleman, this customized facial includes a full skin analysis, deep cleanse, and gentle exfoliation, foaming beard massage, and volcanic mud mask, and rejuvenating beard oil treatment.",
        time: "50 MINUTES",
        price: "$140",
    },
    {
        id: 18,
        category: "gentlemen",
        title: "DEEP TISSUE SPORTS MASSAGE",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
        time: "50 / 80 / 100 MINUTES",
        price: "$190 / $250 / $330.00",
    },
    {
        id: 16,
        category: "packages",
        title: "MOM-KNOWS-BEST PACKAGE",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones. `,
        time: "100 MINUTES",
        price: "$380.00",
    },
    {
        id: 17,
        category: "packages",
        title: "BRIDAL-PREP PACKAGE",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones to rejuvenate and relieve deep muscle tension. The cooling effects of jade reduce inflammatio. `,
        time: "100 MINUTES",
        price: "$400.00",
    },
    {
        id: 18,
        category: "packages",
        title: "COUPLES MASSAGE",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
        time: "100 MINUTES",
        price: "$350.00",
    },
    {
        id: 18,
        category: "packages",
        title: "HUSBAND- & WIFE-TO-BE PACKAGE",
        img: "drinks",
        desc: `This stimulating massage with CBD oil uses a combination of cool jade stones and warm volcanic stones t. `,
        time: "100 MINUTES",
        price: "$400",
    },
]

// start of navigation toggle functionality
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


const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', (e) => {
    linksContainer.classList.toggle('show-links')
})

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        nav.classList.add('fixed');
        // console.log('fixed')
    } else {
        nav.classList.remove('fixed');
    }
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
const wrapper = document.querySelector('.wrapper');

function displayItems(array) {
    let menuDisplay = array.map((item) => {
        // console.log(item.category)

        return `<div class="option">
                            <h4>${item.title}</h4>
                            <p>${item.desc}
                            </p>
                            <div class="price">
                                <p>${item.time}</p>
                                <p>${item.price}</p>
                            </div>
                    </div>`

    });
    menuDisplay = menuDisplay.join('');
    content.innerHTML = menuDisplay;



    const cards = document.querySelectorAll('.option');
    // cards.forEach((card) => {
    //     // console.log(card)
    //     card.className = 'option hidden'
    // })


    // if you want to have the circle hover effect it needs to be added after the innerHTML is created\

    cards.forEach((card) => {
        console.log(card)
        card.className = 'option show'

        // card.style.transform = 'translateX(-100%)';




        card.addEventListener('mousemove', (e) => {
            // console.log(card)
            const rect = card.getBoundingClientRect();

            const left = e.clientX - rect.left;
            const top = e.clientY - rect.top;

            card.style.setProperty("--left", `${left}px`);
            card.style.setProperty("--top", `${top}px`);
        })
    })



}

btnContainer.addEventListener('click', (e) => {
    const keyword = e.target.dataset.orange;
    console.log(keyword)
    if (keyword) {
        displayByCategories = treatmentMenu.filter((item) => {
            if (keyword === item.category) {
                wrapper.className = `wrapper ${item.category}`;
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
            wrapper.className = `wrapper ${item.category}`;
            console.log(item);
            return `<div class="option">
                            <h4>${item.title}</h4>
                            <p>${item.desc}
                            </p>
                            <p class="price">${item.price}</p>
                    </div>`
        }
    }).join('');




    // card hover functionality
    // if you want to have the circle hover effect it needs to be added after the innerHTML is created
    const cards = document.querySelectorAll('.option');

    cards.forEach((card) => {
        // console.log(card)
        card.addEventListener('mousemove', (e) => {
            console.log(card)
            const rect = card.getBoundingClientRect();

            const left = e.clientX - rect.left;
            const top = e.clientY - rect.top;

            card.style.setProperty("--left", `${left}px`);
            card.style.setProperty("--top", `${top}px`);
        })
    })



});









// start of FAQ functionality
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    const btn = question.querySelector('.faq-question-btn');
    btn.addEventListener('click', (e) => {
        questions.forEach((item) => {
            if (item === question) {
                item.classList.toggle('show-answer');
            } else {
                item.classList.remove('show-answer');
                // item.style.backgroundColor = "white";
            }
        })
    });

})

// end of FAQ functionality




// booking form 

// populate service options
const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

serviceSelect.addEventListener('change', (e) => {
    // console.log(e.target.value);
    let val = e.target.value;
    switch (val) {
        case "item1":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="massage1">aromatherapy massage</option>
                <option value="massage2">fire and ice massage</option>
                <option value="massage3">prenatal massage</option>
                <option value="massage4">foot massage</option>
                <option value="massage5">couples massage</option>`
            break;
        case "item2":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="skincare1">hydrating & brightening facial</option>
                <option value="skincare2">texture balance + oil control facial</option>
                <option value="skincare3">pore extraction and acne facial</option>
                <option value="skincare4">anti-aging red LED therapy</option>
                <option value="skincare5">wax treatments</option>`
            break;
        case "item3":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="haircare1">deep conditioning treatment</option>
                <option value="haircare2">simple trim + styling</option>
                <option value="haircare3">cut and color</option>
                <option value="haircare4">blowout</option>`
            break;
        case "item4":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="gentlemen1">haircut and clean shave</option>
                <option value="gentlemen2">hot wax brow and beard shaping</option>
                <option value="gentlemen3">anti-aging lymphatic massage + facial</option>
                <option value="gentlemen4">master sports massage</option>
                <option value="gentlemen5">couples massage</option>`
            break;
        case "item5":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="package1">bridal pamper package</option>
                <option value="package2">best for mom package</option>
                <option value="package3">couples paradise package</option>
                <option value="package4">men's selfcare package</option>`
            break;
}
})







const form = document.querySelector('.form')
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')
const guestInput = document.getElementById('guests');
const dateInput = document.getElementById('date');

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
    return false; 
}

// Show success 
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    input.style.backgroundColor = "white";
    return true;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// date input validation - enable only current date and 2 yrs beyond to be selected
let today = new Date().toISOString().slice(0, 10);
dateInput.setAttribute('min', today);
// console.log(dateInput)
// console.log(dateInput.getAttribute('min'))

function checkDate(dateInput) {
    let today = new Date().toISOString().slice(0, 10);
    dateInput.setAttribute('min', today);
    let oneYearFromNow = new Date().getFullYear();
    dateInput.setAttribute('max', oneYearFromNow);

    if (dateInput.value > oneYearFromNow) {
        showError(dateInput, 'You cannot book this far in advance');
    } else {
        showSuccess(dateInput)
    }
}

function checkGuests(guests, min, max) {
    if (guests.value < min) {
        showError(guests, `Must book at least ${min} guest`);
    } else if (guests.value > max) {
        showError(guests, `Cannot book more than ${max} guests`);
    } else {
        showSuccess(guests);
    }
}

function checkNames(fname, lname) {
    // console.log(typeof(fname.value))
    // console.log(typeof(lname.value))
    if (fname.value !== "" && lname.value !== "") {
        // if (typeof(fname.value) !== "number" && typeof(lname.value) !== "number") {
            showSuccess(fname);
            showSuccess(lname);
        // }
    }
}    

function checkEmail(email) {
    // console.log('email.test')
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(re.test(email.value.trim()))
        if (re.test(email.value.trim())) {
            showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
    }


// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
    }

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        console.log('pass check')
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input2);
    }
    }


const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

console.log(formSteps)
let currentStep = formSteps.findIndex((step, index) => {
        return step.classList.contains('active');
    })

    // the current step will return -1 if a class does not contain active
    if (currentStep < 0) {
        currentStep = 0;
        showCurrentStep();
    }

    function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}

// const inputs = [...formSteps[currentStep].querySelectorAll('input')];
// const selects = [...formSteps[currentStep].querySelectorAll('select')];


let incrementor;
let validation = true;

// validation loop & signal to go to next step
function nextStep() {
const inputs = [...formSteps[currentStep].querySelectorAll('input')];
const selects = [...formSteps[currentStep].querySelectorAll('select')];

    selects.forEach((select) => {
        const checksPass = (currentValue) => currentValue.value !== "none";
        console.log(selects)
        console.log(selects.every(checksPass))

        if (select.classList.contains('required')) { 
                if (select.value === "none") {
                    select.style.backgroundColor = "rgba(216, 56, 123, .5)";
                    showError(select, `Selecting a service is required`);
                    select.style.outline = "1px solid black"
                    validation = false;
                }  else if (selects.every(checksPass) === true) {
                    validation = true;
                    showSuccess(select);
                    select.style.backgroundColor = "white";
                    select.style.outline = "none"
                }
        } else {
            validation = true;
            const formGroup = select.parentElement;
            formGroup.className = 'form-group success';
        }
    })

    inputs.forEach((input) => {
        if (input.classList.contains('required')) { 
            if (input.value.trim() === "") {
                input.style.backgroundColor = "rgba(216, 56, 123, .5)";
                showError(input, `${getFieldName(input)} is required`);
                validation = false;
            } else if (currentStep === 0) {
                checkDate(dateInput);
                checkGuests(guestInput, 1, 10);
                const checksPass = (currentValue) => currentValue.parentElement.classList.contains('success');
                // console.log(inputs.every(checksPass))

                if (inputs.every(checksPass) === true ) {
                    validation = true;
                }
            }
            else if(currentStep === 1) {
                checkLength(passwordInput, 6, 25);
                checkEmail(emailInput);
                checkPasswordsMatch(passwordInput, password2Input);
                checkNames(fnameInput, lnameInput);

                const hasSuccess = (currentValue) => currentValue.parentElement.classList.contains('success');
                // console.log(inputs.every(hasSuccess))

                if (inputs.every(hasSuccess) == true ) {
                    incrementor = 1;
                    currentStep += incrementor;
                    showCurrentStep();
                }
            } else {
                validation = true;
            }
        } else {
            validation = true;
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
            // input.style.backgroundColor = "white";
            }
    })
}

// nextBtn.addEventListener('click', (e) => {
//     nextStep();
//     const checksPass = (currentValue) => currentValue.parentElement.classList.contains('success');
//     if (inputs.every(checksPass) === true && selects.every(checksPass)){
//     incrementor = 1;
//     currentStep += incrementor;
//     showCurrentStep();
//     }
// })

// const inputs = [...formSteps[currentStep].querySelectorAll('input')];
// const selects = [...formSteps[currentStep].querySelectorAll('select')];

const nextBtn = document.querySelector('[data-next]');
const prevBtn = document.querySelector('[data-previous]');
const submitBtn = document.querySelector('[data-submit]');


// nextBtn.addEventListener('click', (e) => {
//     nextStep();
//     const checksPass = (currentValue) => currentValue.parentElement.classList.contains('success');
//     if (inputs.every(checksPass) === true && selects.every(checksPass)){
//     incrementor = 1;
//     currentStep += incrementor;
//     showCurrentStep();
//     console.log(currentStep)
//     }
// })

nextBtn.addEventListener('click', (e) => {
    nextStep();
    
    if (validation === true) {
    incrementor = 1;
    currentStep += incrementor;
    showCurrentStep();
    }
})

prevBtn.addEventListener('click', (e) => {
    incrementor = -1;
    currentStep += incrementor;
    showCurrentStep();
})

const update = document.querySelector('.update');

submitBtn.addEventListener('click', (e) => {
    validation = false;
    nextStep();
    update.innerText = emailInput.value;
})













// reviews 

const reviews = [
    {
        id: 1,
        name: 'Mateo Urdiales',
        job: 'product manager',
        title: 'Great Service, Awesome Amenitites',
        img: '/images/unsplash/jacinto-diego-_upgGOuAOYs-unsplash.jpg',
        text: 'My wife and I jump to come here whenever we can find a babysitter. Their deep tissue massages make me feel like a new man. Don\'t disregard their haircut services either. Sophia always provides me a great cut with great conversation.',
    },
    {
        id: 2,
        name: 'Sarah Forbes',
        job: 'beauty blogger',
        title: 'Frequent Visitor',
        img: '/images/unsplash/pexels-maria-orlova-4946942.jpg',
        text:'The best spa in Dallas x10! I am a frequent local who comes just to get pampered! I always come for an 80-minute aromatherapy massage and the staff is fantastic at making me feel so relaxed and at ease. For your special occasions, be sure to book a celebrity facial with Chloe!' ,
    },
    {
        id: 3,
        name: 'Anna Koto',
        job: 'accountant',
        title: 'Wonderful Experience',
        img: '/images/unsplash/alex-starnes-PK_t0Lrh7MM-unsplash.jpg',
        text: 'Had a fabulous facial with Amanda! She was caring, gentle, and knowledgeable. Spa Selene is amazing! Friendly staff, great service selections, and the spa smell is soo good! Already scheduled my next appointment!',
    },
    {
        id: 4,
        name: 'Will Anderson',
        job: 'buisness owner',
        title: 'Nice Relaxing Spa',
        img: '/images/unsplash/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg',
        text: 'Will be back as a regular customer for sure! I had the 50-minute therapeutic massage with Kim. She gave an amazing massage. The pressure was on point, and she checked in with me a couple of times to make sure I was taken care of. ',
    }
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

const prevBtnRev = document.querySelector('.review-btn.prev');
const nextBtnRev = document.querySelector('.review-btn.next');

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

nextBtnRev.addEventListener('click', () => {
    count++;
    if (count >= reviews.length) {
        count = 0;
    }
    showPerson();
})

prevBtnRev.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = reviews.length - 1;
    }
    showPerson();
})



window.addEventListener('DOMContentLoaded', () => {
    showPerson();
})



const bookDropdown = document.querySelector('.book-dropdown');

bookDropdown.addEventListener('click', (e) => {
    
})
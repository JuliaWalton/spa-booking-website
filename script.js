// navigation toggle for mobile + fixed nav
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
    } else {
        nav.classList.remove('fixed');
    }
})


// carousel image slider
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


// treatment menu cards, populate category on click
const content = document.querySelector('.content')
const btnContainer = document.querySelector('.treatments-btn-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const bgImgContainer = document.querySelector('.treatments-background-img');

function displayItems(array) {
    let menuDisplay = array.map((item) => {
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
    // trailing circle for card on mouse hover
    cards.forEach((card) => {
        console.log(card)
        card.className = 'option show';

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
    fetch('treatments-data.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const treatmentMenu = data;
        const keyword = e.target.dataset.orange;
        // console.log(keyword)
        if (keyword) {
            displayByCategories = treatmentMenu.filter((item) => {
                if (keyword === item.category) {
                    bgImgContainer.className = `treatments-background-img ${item.category}`;
                    return item;
                } else {
                    return;
                }
            })
            return displayItems(displayByCategories);
        }
    })
})

filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach((item) => {
            if (item === btn) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    })
})

window.addEventListener('DOMContentLoaded', (e) => {
    fetch('treatments-data.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const treatmentMenu = data;

        content.innerHTML = treatmentMenu.map((item) => {
            if (item.category === 'skincare') {
                bgImgContainer.className = `treatments-background-img ${item.category}`;
                console.log(item);
                return `<div class="option">
                                <h4>${item.title}</h4>
                                <p>${item.desc}
                                </p>
                                <p class="price">${item.price}</p>
                        </div>`
            }}).join('');
        
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
    })
});
// end of treatment card functionality


// FAQ functionality
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    const btn = question.querySelector('.faq-question-btn');
    btn.addEventListener('click', (e) => {
        questions.forEach((item) => {
            if (item === question) {
                item.classList.toggle('show-answer');
            } else {
                item.classList.remove('show-answer');
            }
        })
    });

})
// end of FAQ functionality


// start of booking form functionality
const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

// populate service options for select input
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
    }
}    

function checkEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        console.log('pass check')
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input2);
    }
}

// to create a multistep form, grab each individual phase(step)
const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

let currentStep = formSteps.findIndex((step) => {
    return step.classList.contains('active');
})
// we can set the current step to match the first phase(step) from our HTML markup
function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}
// the current step will return -1 if one of the form steps does not contain class active
if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}


// validation loop & signal to go to next step 
let incrementor;
let validation = true;

function nextStep() {

const inputs = [...formSteps[currentStep].querySelectorAll('input')];
const selects = [...formSteps[currentStep].querySelectorAll('select')];

    selects.forEach((select) => {
        const checksPass = (currentValue) => currentValue.value !== "none";
        // console.log(selects.every(checksPass))

        if (select.classList.contains('required')) { 
                if (select.value === "none") {
                    showError(select, `Selecting a service is required`);
                    select.style.backgroundColor = "rgba(216, 56, 123, .5)";
                    select.style.outline = "1px solid black"
                    validation = false;
                } else if (selects.every(checksPass) === true) {
                    showSuccess(select);
                    select.style.backgroundColor = "white";
                    select.style.outline = "none"
                    validation = true;
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
                inputs.every(checksPass) === true ? validation = true : validation = false;
            }
            else if(currentStep === 1) {
                checkLength(passwordInput, 6, 25);
                checkEmail(emailInput);
                checkPasswordsMatch(passwordInput, password2Input);
                checkNames(fnameInput, lnameInput);
                const checksPass = (currentValue) => currentValue.parentElement.classList.contains('success');
                inputs.every(checksPass) === true ? validation = true : validation = false;
            } else {
                validation = true;
            }
        } else {
            validation = true;
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
            }
    })
}

const nextBtn = document.querySelector('[data-next]');
const prevBtn = document.querySelector('[data-previous]');
const submitBtn = document.querySelector('[data-submit]');

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
    
    if (validation === true) {
    incrementor = 1;
    currentStep += incrementor;
    showCurrentStep();
    }
})
// end of booking functionality


// start of reviews functionality
const reviews = [
    {
        "id": 1,
        "name": 'Mateo Urdiales',
        "job": 'product manager',
        "title": 'Great Service, Awesome Amenitites',
        "img": 'images/man-red-shirt.jpg',
        "text": 'My wife and I jump to come here whenever we can find a babysitter. Their deep tissue massages make me feel like a new man. Don\'t disregard their haircut services either. Sophia always provides me a great cut with great conversation.',
    },
    {
        "id": 2,
        "name": 'Sarah Forbes',
        "job": 'beauty blogger',
        "title": 'Frequent Visitor',
        "img": 'images/woman-towel.jpg',
        "text":'The best spa in Dallas x10! I am a frequent local who comes just to get pampered! I always come for an 80-minute aromatherapy massage and the staff is fantastic at making me feel so relaxed and at ease. For your special occasions, be sure to book a celebrity facial with Chloe!' ,
    },
    {
        "id": 3,
        "name": 'Anna Koto',
        "job": 'accountant',
        "title": 'Wonderful Experience',
        "img": 'images/woman-yellow-jacket.jpg',
        "text": 'Had a fabulous facial with Amanda! She was caring, gentle, and knowledgeable. Spa Selene is amazing! Friendly staff, great service selections, and the spa smell is soo good! Already scheduled my next appointment!',
    },
    {
        "id": 4,
        "name": 'Will Anderson',
        "job": 'buisness owner',
        "title": 'Nice Relaxing Spa',
        "img": 'images/man-white-shirt.jpg',
        "text": 'Will be back as a regular customer for sure! I had the 50-minute therapeutic massage with Kim. She gave an amazing massage. The pressure was on point, and she checked in with me a couple of times to make sure I was taken care of. ',
    }
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
// end of reviews functionality


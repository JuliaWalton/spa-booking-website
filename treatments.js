
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
                    // bgImgContainer.className = `treatments-background-img ${item.category}`;
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
                // bgImgContainer.className = `treatments-background-img ${item.category}`;
                // console.log(item);
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
                // console.log(card)
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
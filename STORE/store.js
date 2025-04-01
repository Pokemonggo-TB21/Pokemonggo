function showSection(sectionId) {
    document.getElementById('item-boxes').classList.add('d-none');
    document.getElementById('pokecoins').classList.add('d-none');
    
    document.getElementById('btn-item-boxes').classList.remove('active');
    document.getElementById('btn-pokecoins').classList.remove('active');
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('d-none');
    
    document.getElementById(`btn-${sectionId}`).classList.add('active');
    
    selectedSection.offsetHeight;
    
    selectedSection.classList.add('show');
    
    const otherSection = sectionId === 'item-boxes' ? 'pokecoins' : 'item-boxes';
    const otherElement = document.getElementById(otherSection);
    if (otherElement) {
        otherElement.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pokecoins').classList.add('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const itemBoxes = [
        { 
            img: "Store Images\\Fuzzy\\Fuzzy Buddy Research Day Ultra Ticket Box.webp",
            badges: [
                { 
                    src: "Store Images\\Fuzzy\\Fuzzy 1.webp", 
                    quantity: 1,
                    description: "Ticket" 
                },
                { 
                    src: "Store Images\\Fuzzy\\Fuzzy 2.webp", 
                    quantity: 5,
                    description: "Ultra Ball" 
                }
            ],
            title: "Fuzzy Buddy Research Day Ultra Ticket Box",
            subtitle: "Boosts Buddy interactions: Bonus Candy + Hearts.",
            price: 59,
            timer: "4 DAYS LEFT",
            limit: "1 TIME ONLY"
        },
        { 
            img: "Store Images\\Bug Out\\Bug Out Ultra Ticket Box.webp",
            badges: [
                { 
                src: "Store Images\\Bug Out\\Bug Out 1.webp", 
                quantity: 1,
                description: "Ticket" },
                { 
                src: "Store Images\\Bug Out\\Bug Out 2.webp", 
                quantity: 2,
                description: "Rare Candy" }
            ],
            title: "Bug Out Ultra Ticket Box",
            subtitle: "Bug-type event bundle: Incense + Candy XL boosters.",
            price: 59,
            timer: "3 DAYS LEFT",
            limit: "2 TIMES ONLY"
        },
        { 
            img: "Store Images\\Go Rocket\\Go Rocket Box.webp",
            badges: [
                { 
                src: "Store Images\\Go Rocket\\Go Rocket 1.webp", 
                quantity: 7,
                description: "Ultra Ball" },
                { 
                src: "Store Images\\Go Rocket\\Go Rocket 2.webp", 
                quantity: 7,
                description: "Rocket Radar" },
                { 
                src: "Store Images\\Go Rocket\\Go Rocket 3.webp", 
                quantity: 7,
                description: "Premium Battle Pass" },
                { 
                src: "Store Images\\Go Rocket\\Go Rocket 4.webp", 
                quantity: 7,
                description: "Silver Pinap Berry" }            
            ],
            title: "GO Rocket Box",
            subtitle: "Team GO Rocket battle essentials: Max Potions & Mysterious Components.",
            price: 289,
            timer: "5 DAYS LEFT",
            limit: "3 TIMES ONLY"
        },
        { 
            img: "Store Images\\Ultra Raid\\Ultra Raid Box.webp",
            badges: [
                { 
                    src: "Store Images\\Ultra Raid\\Ultra Raid 1.webp", 
                    quantity: 3,
                    description: "Remote Raid Pass" },
                { 
                    src: "Store Images\\Ultra Raid\\Ultra Raid 2.webp", 
                    quantity: 3,
                    description: "Premium Battle Pass" },
                { 
                    src: "Store Images\\Ultra Raid\\Ultra Raid 3.webp", 
                    quantity: 1,
                    description: "Egg Incubator" },
            ],
            title: "Ultra Raid Box",
            subtitle: "Contains Premium Raid Passes + Max Potions/Revives.",
            price: 149,
            timer: "2 DAYS LEFT",
            limit: "1 TIME ONLY"
        },
        { 
            img: "Store Images\\Might and Mastery\\Might and Mastery Box.webp",
            badges: [
                { 
                    src: "Store Images\\Might and Mastery\\Might and Mastery 1.webp", 
                    quantity: 1,
                    description: "Postcard Pages" },
                { 
                    src: "Store Images\\Might and Mastery\\Might and Mastery 2.webp", 
                    quantity: 3,
                    description: "Remote Raid Pass" },
                { 
                    src: "Store Images\\Might and Mastery\\Might and Mastery 3.webp", 
                    quantity: 2,
                    description: "Premium Battle Pass" },
            ],
            title: "Might and Mastery Box",
            subtitle: "Battle-ready bundle with TMs and Rare Candy.",
            price: 149,
            timer: "6 DAYS LEFT",
            limit: "5 TIMES ONLY"
        },
        { 
            img: "Store Images\\Item Boxes\\Super Incubator.webp",
            badges: [{ quantity: 2,
            description: "Super Incubator" }],
            title: "Super Incubator",
            subtitle: "Hatches Eggs 20% faster than regular Incubators.",
            price: 88,
        },
        { 
            img: "Store Images\\Item Boxes\\Egg Incubator.webp",
            badges: [{ quantity: 3,
            description: "Egg Incubator" }],
            title: "Egg Incubator",
            subtitle: "Standard tool for hatching Pokémon Eggs.",
            price: 88,
        },
        { 
            img: "Store Images\\Item Boxes\\Max Revive.webp",
            badges: [{ quantity: 6,
            description: "Max Revive" }],
            title: "Max Revive",
            subtitle: "Fully restores a fainted Pokémon's HP.",
            price: 59,
        },
        { 
            img: "Store Images\\Item Boxes\\Premium Battle Pass.webp",
            badges: [{ quantity: 3,
            description: "Premium Battle Pass" }],
            title: "Premium Battle Pass",
            subtitle: "Unlocks special Raid Battles and exclusive rewards.",
            price: 88,
        },
        { 
            img: "Store Images\\Item Boxes\\Max Particle Pack x6.webp",
            badges: [{ quantity: 6,
            description: "Max Particle" }],
            title: "Max Particle Pack x6",
            subtitle: "Contains 6 bundles of Stardust boosters for power-ups.",
            price: 235,
        },
        { 
            img: "Store Images\\Item Boxes\\Max Mushroom.webp",
            badges: [{ quantity: 3,
            description: "Max Mushroom" }],
            title: "Max Mushroom",
            subtitle: "Activates Gigantamax potential in Pokémon.",
            price: 289,
        }
    ];

    const pokecoins = [
        { 
            img: "Store Images\\Pokecoins\\110 PokeCoins.webp", 
            title: "110 PokéCoins", 
            desc: "10 Web Store Bonus Coins", 
            price: 29 
        },
        { 
            img: "Store Images\\Pokecoins\\600 PokeCoins.webp", 
            title: "600 PokéCoins", 
            desc: "50 Web Store Bonus Coins", 
            price: 149 
        },
        { 
            img: "Store Images\\Pokecoins\\1300 PokeCoins.webp", 
            title: "1,300 PokéCoins", 
            desc: "100 Web Store Bonus Coins", 
            price: 289 
        },
        { 
            img: "Store Images\\Pokecoins\\2700 PokeCoins.webp", 
            title: "2,700 PokéCoins", 
            desc: "200 Web Store Bonus Coins", 
            price: 589 
        },
        { 
            img: "Store Images\\Pokecoins\\5600 PokeCoins.webp", 
            title: "5,600 PokéCoins", 
            desc: "400 Web Store Bonus Coins", 
            price: 1170 
        },
        { 
            img: "Store Images\\Pokecoins\\15500 PokeCoins.webp", 
            title: "15,500 PokéCoins", 
            desc: "1000 Web Store Bonus Coins", 
            price: 2950 
        }
    ];
    const featuredItem = {
        img: "Store Images\\Featured\\Featured.webp",
        badges: [
            { src: "Store Images\\Featured\\Featured 1.webp", quantity: 3 },
            { src: "Store Images\\Featured\\Featured 2.webp", quantity: 5 },
            { src: "Store Images\\Featured\\Featured 3.webp", quantity: 10 },
            { src: "Store Images\\Featured\\Featured 4.webp", quantity: 2 }
        ],
        title: "Pokémon GO Fest 2025: Global Ticket",
        subtitle: "Can only be purchased 1 time.",
        price: 439,
        limit: "1 TIME ONLY"
    };

    document.getElementById("featuredModalTitle").classList.add("black-text");
    document.getElementById("featuredPurchaseLimit").classList.add("muted-text");
    document.getElementById("featuredPurchaseLimit").classList.add("muted-text");
    const itemBoxContainer = document.getElementById("item-box-list");
    const pokecoinContainer = document.getElementById("pokecoin-list");

 itemBoxes.forEach((box, index) => {
    itemBoxContainer.innerHTML += `
        <div class="col">
            <div class="floating-card">
                <div class="card-top position-relative">
                    ${index < 5 ? 
                        `<div class="timer-badge">${box.timer}</div>
                         <div class="purchase-limit-badge">${box.limit}</div>` : 
                     (index >= 5 && index < 7) ? 
                        `<div class="popular-badge">POPULAR</div>` : 
                     ''
                    }
                    <img src="${box.img}" class="main-item-image" alt="${box.title}">
                    
                    <div class="badges-container">
                        ${box.badges.map((badge, badgeIndex) => `
                            <div class="badge-group">
                                ${index < 5 || badge.src ? `
                                    <img src="${badge.src || 'transparent.png'}" 
                                         class="image-badge" 
                                         alt="Item badge">` : ''}
                                <div class="number-badge">
                                    ${badge.quantity}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="card-bottom">
                    <h5 class="fw-bold mb-1">${box.title}</h5>
                    <p class="text-muted small mb-2">${box.subtitle}</p>
                    <button class="btn price-btn">₱${box.price.toFixed(2)}</button>
                </div>
            </div>
        </div>`;
});

    pokecoins.forEach((coin, index) => {
        pokecoinContainer.innerHTML += `
            <div class="col">
                <div class="floating-card pokecoin-card">
                    <div class="card-top position-relative">
                        <img src="${coin.img}" class="pokecoin-image" alt="${coin.title}">
                    </div>
                    <div class="card-bottom">
                        <h5 class="fw-bold mb-1">${coin.title}</h5>
                        <p class="text-muted small mb-2">${coin.desc}</p>
                        <button class="btn price-btn pokecoin-price">₱${coin.price.toFixed(2)}</button>
                    </div>
                </div>
            </div>`;
    });


function handlePurchase(item, event) {
    const cartCount = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCount.textContent) || 0;
    currentCount++;
    
    cartCount.textContent = currentCount;
    cartCount.classList.toggle('active', currentCount > 0);

    showNotification('Item added to cart!');

    const flyingItem = document.createElement('img');
    flyingItem.src = item.img;
    flyingItem.className = 'fly-to-cart';
    
    flyingItem.style.cssText = `
        position: fixed;
        left: ${event.clientX}px;
        top: ${event.clientY}px;
        width: 50px;
        z-index: 99999;
        pointer-events: none;
        opacity: 1;
        transform: scale(1);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    const cartIndicator = document.getElementById('cartIndicator');
    const cartRect = cartIndicator.getBoundingClientRect();
    const targetX = cartRect.left + cartRect.width/2 - event.clientX;
    const targetY = cartRect.top + cartRect.height/2 - event.clientY;

    document.body.appendChild(flyingItem);

    requestAnimationFrame(() => {
        flyingItem.style.transform = `
            translate(${targetX}px, ${targetY}px)
            scale(0.2)
        `;
        flyingItem.style.opacity = '0';
    });

    setTimeout(() => {
        flyingItem.remove();
    }, 800);

    document.getElementById('itemModal').style.display = 'none';
}


function setupModal(item, isPokecoin = false) {
    document.getElementById('modalImage').src = item.img;
    document.getElementById('modalTitle').textContent = item.title;
    
    if(isPokecoin) {
        document.getElementById('purchaseLimit').textContent = item.limit || 'UNLIMITED';
        document.getElementById('itemSubtitle').textContent = item.desc;
        document.getElementById('modalBadges').innerHTML = '';
    } else {
        document.getElementById('purchaseLimit').textContent = item.limit;
        document.getElementById('itemSubtitle').textContent = item.subtitle;
        document.getElementById('modalBadges').innerHTML = item.badges.map(badge => `
            <div class="badge d-flex align-items-stretch mb-3">
                ${badge.src ? `<img src="${badge.src}" class="badge-icon">` : ''}
                <div class="badge-quantity">×${badge.quantity}</div>
                <div class="vr"></div>
                <div class="badge-description">${badge.description}</div>
            </div>`
        ).join('');
    }

    const purchaseButton = document.getElementById('purchaseButton');
    purchaseButton.innerHTML = `₱${item.price.toFixed(2)}<div class="small-text">Purchase Now</div>`;
    
    purchaseButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handlePurchase(item, e);
        document.getElementById('itemModal').style.display = 'none';
    };

    const modal = document.getElementById('itemModal');
    modal.classList.toggle('premium-glow', 
        (isPokecoin && item.title.includes("15,500")) || 
        (!isPokecoin && item.price > 200)
    );
    modal.style.display = 'block';
}


document.querySelectorAll('#item-box-list .floating-card').forEach((card, index) => {
    card.addEventListener('click', (e) => {
        if(!e.target.closest('.price-btn')) {
            setupModal(itemBoxes[index]);
        }
    });
});

document.querySelectorAll('#pokecoin-list .floating-card').forEach((card, index) => {
    card.addEventListener('click', (e) => {
        if(!e.target.closest('.pokecoin-price')) {
            setupModal(pokecoins[index], true);
        }
    });
});

document.querySelectorAll('.price-btn, .pokecoin-price').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentCard = btn.closest('.col');
        const itemIndex = Array.from(parentCard.parentElement.children).indexOf(parentCard);
        const section = btn.closest('#pokecoins') ? pokecoins : itemBoxes;
        setupModal(section[itemIndex], section === pokecoins);
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('itemModal').style.display = 'none';
    document.getElementById('itemModal').classList.remove('premium-glow');
});

window.onclick = (event) => {
    if(event.target === document.getElementById('itemModal')) {
        document.getElementById('itemModal').style.display = 'none';
        document.getElementById('itemModal').classList.remove('premium-glow');
    }
};

document.querySelector('.featured-section').addEventListener('click', (e) => {
    if(!e.target.closest('.btn')) {
        showFeaturedModal();
    }
});

document.querySelector('.featured-section .btn').addEventListener('click', (e) => {
    e.stopPropagation();
    showFeaturedModal();
});

function showFeaturedModal() {
    const modal = document.getElementById('featuredModal');
    
    modal.querySelector('#featuredModalImage').src = featuredItem.img;
    modal.querySelector('#featuredModalTitle').textContent = featuredItem.title;
    modal.querySelector('#featuredSubtitle').textContent = featuredItem.subtitle;
    modal.querySelector('#featuredPurchaseLimit').textContent = featuredItem.limit;

    const badgesContainer = modal.querySelector('#featuredModalBadges');
    badgesContainer.innerHTML = featuredItem.badges.map(badge => `
        <div class="featured-modal-badge">
            <img src="${badge.src}" alt="Featured badge">
            <div class="featured-modal-quantity">x${badge.quantity}</div>
        </div>
    `).join('');

    const purchaseButton = modal.querySelector('#featuredPurchaseButton');
    purchaseButton.innerHTML = `₱${featuredItem.price.toFixed(2)}<div class="small-text">Purchase Now</div>`;
    purchaseButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handlePurchase(featuredItem, e);
        showNotification('Featured item added to cart!');
        modal.style.display = 'none';
    };

    modal.style.display = 'block';
}

document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    });
});

window.onclick = (event) => {
    if(event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};





document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.featured-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(button.getAttribute('data-index'));
            openFeaturedModal(index);
        });
    });

    document.querySelectorAll('.featured-section').forEach(section => {
        section.addEventListener('click', (e) => {
            if (!e.target.closest('.featured-btn')) {
                const button = section.querySelector('.featured-btn');
                const index = parseInt(button.getAttribute('data-index'));
                openFeaturedModal(index);
            }
        });
    });
});

document.querySelector('#featuredModal .close').onclick = function() {
    document.getElementById('featuredModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('featuredModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class='bx bx-check-circle'></i>
        <p>${message}</p>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function purchaseItem(item) {
    showNotification('Item added to cart!');
}

function purchasePokecoin(amount) {
    showNotification('Pokécoins added to cart!');
}

function purchaseFeaturedItem(item) {
    showNotification('Featured item added to cart!');
}

const cartIndicator = document.getElementById('cartIndicator');
const cartCount = document.querySelector('.cart-count');

if (cartCount.textContent > 0) {
    cartIndicator.classList.add('has-items');
}

cartIndicator.addEventListener('mouseenter', function() {
    this.querySelector('i').style.transform = 'scale(1.1)';
});

cartIndicator.addEventListener('mouseleave', function() {
    this.querySelector('i').style.transform = 'scale(1)';
});

cartIndicator.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

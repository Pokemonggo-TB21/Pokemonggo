const featuredItems = [
    {
        title: "Pokémon GO Fest 2025: Global Ticket",
        subtitle: "Can only be purchased 1 time.",
        price: 439.00,
        img: "Store Images/Featured/Featured.webp",
        badges: [
            { src: "Store Images/Featured/Featured 1.webp", quantity: 3, alt: "Raid Pass" },
            { src: "Store Images/Featured/Featured 2.webp", quantity: 5, alt: "Incense" },
            { src: "Store Images/Featured/Featured 3.webp", quantity: 10, alt: "Star Piece" },
            { src: "Store Images/Featured/Featured 4.webp", quantity: 2, alt: "Lure Module" }
        ]
    },
    {
        title: "Power Up Ultra Ticket Box",
        subtitle: "Can only be purchased 1 time.",
        price: 289.00,
        img: "Store Images/featured_imgs/bundle.webp",
        badges: [
            { src: "Store Images/featured_imgs/item_event_ticket_07.webp", quantity: 1, alt: "Event Ticket" },
            { src: "Store Images/featured_imgs/item_event_ticket_07.webp", quantity: 1, alt: "Event Ticket" },
            { src: "Store Images/featured_imgs/virtual-currency.webp", quantity: 100, alt: "Pokécoins" }
        ]
    }
];

function openFeaturedModal(index) {
    const item = featuredItems[index];
    const modal = document.getElementById('featuredModal');
    const modalImage = document.getElementById('featuredModalImage');
    const modalTitle = document.getElementById('featuredModalTitle');
    const modalSubtitle = document.getElementById('featuredSubtitle');
    const modalBadges = document.getElementById('featuredModalBadges');
    const modalButton = document.getElementById('featuredPurchaseButton');

    modalImage.src = item.img;
    modalTitle.textContent = item.title;
    modalSubtitle.textContent = item.subtitle;
    modalButton.textContent = `₱${item.price.toFixed(2)}`;

    modalBadges.innerHTML = item.badges.map(badge => `
        <div class="featured-badge-group">
            <img src="${badge.src}" class="featured-badge-img" alt="${badge.alt}">
            <div class="featured-number-badge">x${badge.quantity}</div>
        </div>
    `).join('');

    modal.style.display = "block";
}

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

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}); 
document.addEventListener('DOMContentLoaded', () => {
    // Example: Load more images when scrolling
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Load more images here
            console.log('Load more images');
        }
    });

    // Example: Filter grid items (assuming you add category data attributes to grid items)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const gridItems = document.querySelectorAll('.grid-item');
            
            gridItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
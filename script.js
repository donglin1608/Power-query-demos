document.addEventListener('DOMContentLoaded', function() {
    // Function to load content dynamically
    function loadContent(url, element) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(element).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Attach event listeners to navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            loadContent(page, 'main');
        });
    });

    // Load the default page content (e.g., home or first example)
    loadContent('example1.html', 'main');
});


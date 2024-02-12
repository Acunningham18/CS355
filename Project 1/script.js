// Apply dark mode on page load if saved in localStorage

const $ = document.querySelector.bind(document);

$('#darkBtn').addEventListener('click', toggleDark);

function toggleDark() {
    if ($('body').hasAttribute('dark-mode')) {
        localStorage.setItem('mode', "light");
        $('body').removeAttribute('dark-mode');
    } else {
        localStorage.setItem('mode', 'dark');
        $('body').setAttribute('dark-mode', true);
    }
}

function main() {
    if (localStorage.getItem('mode') === 'dark') {
        $('body').setAttribute('dark-mode', true);
    }
}

main(); // Call the main function on page load

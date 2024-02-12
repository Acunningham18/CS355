// Apply dark mode on page load if saved in localStorage

const $ = document.querySelector.bind(document);

$('#darkBtn').addEventListener('click',toggleDark)

    function toggleDark(){
        if ($(':root').hasAttribute('dark-mode')){
        localStorage.setItem('mode', "light");
        $(':root').removeAttribute('dark-mode');
    }else{
        localStorage.setItem ('mode', 'dark');
        $(':root').setAttribute('dark-mode',true);
    }
}

function main (){
    if(localStorage.getItem('mode')==='dark'){
        $(':root').setAttribute('dark-mode',true);
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entries => {
        if (entries.isIntersecting) {
            entries.target.classList.add('animate');
        }else {
            entries.target.classList.remove('animate');
        }
    })
});


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach(element => {
    observer.observe(element);
});
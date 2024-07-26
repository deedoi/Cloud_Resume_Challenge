document.addEventListener('DOMContentLoaded', function () {
    let backtotop = document.getElementById('back-to-top');

    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);

        backtotop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
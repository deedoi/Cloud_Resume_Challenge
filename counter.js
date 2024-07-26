document.addEventListener('DOMContentLoaded', function () {
    let count = localStorage.getItem('pageViews') || 0;
    count = parseInt(count) + 1;
    document.getElementById('count').textContent = count;
    localStorage.setItem('pageViews', count);
});
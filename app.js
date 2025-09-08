const links = document.querySelectorAll('a[href]');

links.forEach(link => {
    const hostname = new URL(link.href).hostname;
    // Remove www. e pega só a primeira parte antes do primeiro ponto
    const name = hostname.replace('www.', '').split('.')[0];
    if (name) {
        const span = document.createElement('span');
        span.textContent = name;
        link.querySelector('div').appendChild(span);
    }

});
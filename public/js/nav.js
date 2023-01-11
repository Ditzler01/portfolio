var navLinks = document.querySelectorAll('*[id^="nav"]');;
var indicators = document.getElementsByClassName('w-auto h-1 bg-tertiary rounded-3xl');

console.log(navLinks);

for (var i = 0; i < indicators.length; i++)
{   
    indicators[i].classList.add('invisible');
    navLinks[i].classList.remove('text-tertiary');
}

switch (window.location.pathname)
{
    case '/':
        indicators[0].classList.remove('invisible');
        navLinks[0].classList.remove('text-secondary');
        navLinks[0].classList.add('text-tertiary');
        break;
    case '/about':
        indicators[1].classList.remove('invisible');
        navLinks[1].classList.remove('text-secondary');
        navLinks[1].classList.add('text-tertiary');
        break;
    case '/skills':
        indicators[2].classList.remove('invisible');
        navLinks[2].classList.remove('text-secondary');
        navLinks[2].classList.add('text-tertiary');
        break;
    case '/projects':
        indicators[3].classList.remove('invisible');
        navLinks[3].classList.remove('text-secondary');
        navLinks[3].classList.add('text-tertiary');
        break;
    case '/education':
        indicators[4].classList.remove('invisible');
        navLinks[4].classList.remove('text-secondary');
        navLinks[4].classList.add('text-tertiary');
        break;
    case '/work':
        indicators[5].classList.remove('invisible');
        navLinks[5].classList.remove('text-secondary');
        navLinks[5].classList.add('text-tertiary');
        break;
    case '/contact':
        indicators[6].classList.remove('invisible');
        navLinks[6].classList.remove('text-secondary');
        navLinks[6].classList.add('text-tertiary');
        break;
}
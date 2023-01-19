changeNavColor();

function changeNavColor()
{
    var navLinks = document.querySelectorAll('*[id^="nav"]');;
    var indicators = document.getElementsByClassName('w-auto h-1 bg-tertiary rounded-3xl');

    for (var i = 0; i < indicators.length; i++)
    {   
        indicators[i].classList.add('invisible');
        navLinks[i].classList.remove('text-tertiary');
    }
    
    switch (window.location.pathname)
    {
        case '/portfolio/':
            indicators[0].classList.remove('invisible');
            navLinks[0].classList.remove('text-secondary');
            navLinks[0].classList.add('text-tertiary');
            break;
        case '/portfolio/about':
            indicators[1].classList.remove('invisible');
            navLinks[1].classList.remove('text-secondary');
            navLinks[1].classList.add('text-tertiary');
            break;
        case '/portfolio/skills':
            indicators[2].classList.remove('invisible');
            navLinks[2].classList.remove('text-secondary');
            navLinks[2].classList.add('text-tertiary');
            break;
        case '/portfolio/projects':
            indicators[3].classList.remove('invisible');
            navLinks[3].classList.remove('text-secondary');
            navLinks[3].classList.add('text-tertiary');
            break;
        case '/portfolio/education':
            indicators[4].classList.remove('invisible');
            navLinks[4].classList.remove('text-secondary');
            navLinks[4].classList.add('text-tertiary');
            break;
        case '/portfolio/work':
            indicators[5].classList.remove('invisible');
            navLinks[5].classList.remove('text-secondary');
            navLinks[5].classList.add('text-tertiary');
            break;
        case '/portfolio/contact':
            indicators[6].classList.remove('invisible');
            navLinks[6].classList.remove('text-secondary');
            navLinks[6].classList.add('text-tertiary');
            break;
    }
}


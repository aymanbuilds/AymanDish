document.addEventListener('DOMContentLoaded', () => {
    // Header Menu ******************************************************************
    const menuButton = document.getElementById('menu-btn');
    const closeMenuButton = document.getElementById('close-menu-btn');
    const mainHeaderNav = document.querySelector('header.main nav');

    menuButton.addEventListener('click', () => {
        mainHeaderNav.classList.add('appear');
        setTimeout(() => {
            mainHeaderNav.querySelectorAll('li a').forEach((hyperlink, index) => {
                setTimeout(() => {
                    hyperlink.classList.add('appear');
                }, index * 50);
            });
        }, 200);
    });

    closeMenuButton.addEventListener('click', () => {
        const hyperlinks = Array.from(mainHeaderNav.querySelectorAll('li a'));
        const numHyperlinks = hyperlinks.length;
        hyperlinks.reverse().forEach((hyperlink, index) => {
            setTimeout(() => {
                hyperlink.classList.remove('appear');
            }, index * 50);
        });
        const hyperlinkTransitionDuration = 500;
        const totalHyperlinkAnimationTime = ((numHyperlinks - 1) * 50) + hyperlinkTransitionDuration;
        setTimeout(() => {
            mainHeaderNav.classList.remove('appear');
        }, totalHyperlinkAnimationTime - 150);
    });
    // Header Menu End **************************************************************
});
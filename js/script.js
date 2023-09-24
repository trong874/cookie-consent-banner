document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookieButton = document.getElementById('accept-cookie');

    // Kiểm tra xem cookie đã được chấp thuận trước đó
    if (localStorage.getItem('cookieAccepted')) {
        cookieBanner.style.display = 'none';
    }

    // Sự kiện khi người dùng chấp nhận cookie
    acceptCookieButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.store('consentStyle', 'consent-tooltip');
    Alpine.store('position', 'bottom-left');
    Alpine.store('mainMessage', 'This website uses cookies to ensure you get the best experience on our website.');
    Alpine.store('linkText', 'Learn More');
    Alpine.store('urlCookiePolicy', 'https://www.yoursite.com/cookie-policy/');
    Alpine.store('buttonText', 'Got it!');
    Alpine.store('consentMargin', 'margin-samll');
    Alpine.store('consentPadding', 'padding-small');
    Alpine.store('consentCorner', 'corner-small');
    Alpine.store('consentBorder', 'border-thin');
    Alpine.store('consentTransparency', 'transparency-0');
    Alpine.store('consentFontsize', 'fontsize-default');
    Alpine.store('consentColor', 'dark-1');
})
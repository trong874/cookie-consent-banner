(() => {
    const asset_url = 'http://127.0.0.1:5500';

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = asset_url + '/css/style.css';
    let head = document.querySelector('HEAD');
    head.appendChild(link);

    window.consentInit = (options) => {
        const { style, border, corner, padding, margin, transparency, color, textButton, message, urlPolicy, textUrlPolicy } = options;
        const consentBanner = document.createElement('div');
        consentBanner.className = `cookie-banner ${style} ${border} ${corner} ${padding} ${margin} ${transparency} ${color}`;


        const messageWrap = document.createElement('div');
        const messageElement = document.createElement('span');
        messageElement.innerText = message;
        messageWrap.appendChild(messageElement);

        const urlElement = document.createElement('a');
        urlElement.href = urlPolicy;
        urlElement.innerText = textUrlPolicy;
        urlElement.className = 'urlPolicy';
        messageWrap.appendChild(urlElement);


        consentBanner.appendChild(messageWrap);
        // button
        const button = document.createElement('button');
        button.className = 'accept-cookie';
        button.innerText = textButton;
        consentBanner.appendChild(button);
        // end button
        document.body.prepend(consentBanner)
    }
})()
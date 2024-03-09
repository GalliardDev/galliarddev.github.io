async function contasocListener() {
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener el elemento <a> por sus IDs
        let winLinkElement = document.getElementById('contasocWindows');
        let linLinkElement = document.getElementById('contasocLinux');

        // Realizar una solicitud GET a la API de GitHub para obtener la información de la última release
        fetch('https://api.github.com/repos/GalliardDev/Contasoc/releases/latest')
            .then(response => response.json())
            .then(data => {
                // Obtener el enlace de la última release
                let winBrowserDownloadUrl = data.assets[1].browser_download_url;
                let linBrowserDownloadUrl = data.assets[0].browser_download_url;

                winLinkElement.href = winBrowserDownloadUrl;
                linLinkElement.href = linBrowserDownloadUrl;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    });
}

async function lsiSyntaxListener() {
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener el elemento <a> por sus IDs
        let lsiSyntaxElement = document.getElementById('lsiSyntax');

        // Realizar una solicitud GET a la API de GitHub para obtener la información de la última release
        fetch('https://api.github.com/repos/GalliardDev/LSI-Syntax-for-VSCode/releases/latest')
            .then(response => response.json())
            .then(data => {
                // Obtener el enlace de la última release
                let downloadUrl = data.assets[0].browser_download_url;

                lsiSyntaxElement.href = downloadUrl;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    });
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function setBgColor() {
    document.addEventListener('DOMContentLoaded', () => {
        let body = document.querySelector('body');
        let color1 = getRandomColor();
        let color2 = getRandomColor();
        body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
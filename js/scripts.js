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

function setHeaderColor() {
    document.addEventListener('DOMContentLoaded', () => {
        let header = document.getElementById('header');
        let array = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info'];
        let classList = header.classList;
        classList.forEach(className => {
            if (array.includes(className)) {
                header.classList.remove(className);
            }
        });
        header.classList.add(getRandomElement(array));
    });
}

async function setPfp() {
    let response = await fetch('https://api.github.com/users/GalliardDev');
    let data = await response.json();
    let pfp = document.getElementById('pfp');
    pfp.src = data.avatar_url;
}
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

function animatedGradientBackground() {
    document.addEventListener('DOMContentLoaded', () => {
        let header = document.getElementById('header');
        let hue = 0;

        setInterval(() => {
            // Increase the hue value
            hue = (hue + 1) % 360;

            // Create a gradient with two colors: the current hue and the hue 180 degrees apart
            let color1 = `hsl(${hue}, 100%, 50%)`;
            let color2 = `hsl(${(hue + 180) % 360}, 100%, 50%)`;

            // Set the gradient background
            header.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
        }, 50);
    });
}

function setActiveLink() {
    window.addEventListener('DOMContentLoaded', () => { // Cambiado a 'DOMContentLoaded'
        let links = document.querySelectorAll('a.nav-link');
        let currentPath = window.location;

        links.forEach(link => {
            console.log(link.href.toString());
            console.log(currentPath.toString());
            if (link.href === currentPath) { // Cambiado a 'pathname'
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    window.addEventListener('popstate', setActiveLink); // Agregado para manejar cambios en la ruta
}

setActiveLink();

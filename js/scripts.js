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
        let hue = localStorage.getItem('hue') || 0; // obtiene del almacenamiento local si no 0
        hue = parseInt(hue); 
        const updateBackground = () => {
            hue = (hue + 1) % 360;
            localStorage.setItem('hue', hue); // guarda en almacenamiento local
            let color1 = `hsl(${hue}, 100%, 50%)`;
            let color2 = `hsl(${(hue + 180) % 360}, 100%, 50%)`;
            header.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
        };
        updateBackground();

        setInterval(updateBackground, 50);
    });
}

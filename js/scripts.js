function contasocListener() {
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener el elemento <a> por sus IDs
        const winLinkElement = document.getElementById('contasocWindows');
        const linLinkElement = document.getElementById('contasocLinux');

        // Realizar una solicitud GET a la API de GitHub para obtener la información de la última release
        fetch('https://api.github.com/repos/GalliardDev/Contasoc/releases/latest')
            .then(response => response.json())
            .then(data => {
                // Obtener el enlace de la última release
                const winBrowserDownloadUrl = data.assets[1].browser_download_url;
                const linBrowserDownloadUrl = data.assets[0].browser_download_url;

                winLinkElement.href = winBrowserDownloadUrl;
                linLinkElement.href = linBrowserDownloadUrl;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    });
}

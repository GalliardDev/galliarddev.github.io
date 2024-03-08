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
        let color1 = getRandomColor();
        let color2 = getRandomColor();
        header.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
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


async function setPfp() {
    const token = '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'; // Reemplaza 'TU_TOKEN_DE_ACCESO_PERSONAL' con tu propio token
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await fetch('https://api.github.com/user', {
            headers: headers
        });

        if (response.ok) {
            const userData = await response.json();
            const pfp = document.getElementById('pfp');
            pfp.src = userData.avatar_url;
        } else {
            console.error('Error al obtener los datos del usuario:', response.status);
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error.message);
    }
}

function colorThemeListener() {
    document.getElementById('btnSwitch').addEventListener('click',()=>{
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
            document.getElementById('btnSwitch').innerHTML = '<h4 class="p-0 m-0">🌙</h4>';
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
            document.getElementById('btnSwitch').innerHTML = '<h4 class="p-0 m-0">☀️</h4>';
        }
    })
}

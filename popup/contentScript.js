document.addEventListener('DOMContentLoaded', async () => {

    async function getGameID() {
        const [tab] = await chrome.tabs.query({active: true,currentWindow: true});
        const url = new URL(tab.url);
        const parts = url.pathname.split('/');
        id_game = parts[2];
        return id_game;
    };

    async function getGameName() {
        const [tab] = await chrome.tabs.query({active: true,currentWindow: true});
        const url = new URL(tab.url);
        const parts = url.pathname.split('/');
        id_game = parts[3];
        return id_game;
    };
});
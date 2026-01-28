document.addEventListener('DOMContentLoaded', async () => {
    const elements = {
        gameTitle: document.getElementById('game-title'),
        gameSentiment: document.getElementById('review-text'),
        gameReviews: document.getElementById('stat-total'),
    }

    async function getGameID() {
        try{
            const [tab] = await chrome.tabs.query({active: true,currentWindow: true});
            const url = new URL(tab.url);
            const parts = url.pathname.split('/');
            id_game = parts[2];
            return id_game;
        } catch (error){
            console.error('Error extracting game ID from URL:', error);
            return null;
        }

    };

    async function getGameName() {
        const [tab] = await chrome.tabs.query({active: true,currentWindow: true});
        const url = new URL(tab.url);
        const parts = url.pathname.split('/');
        game_name = parts[3];

        return game_name.replaceAll("_", " ");
    };

    async function getSentimentData(gameID) {
        try{
            const request = await fetch(`https://steam-reviews-api.onrender.com/sentiments?game_id=${gameID}`);
            const data = await request.json();
            return data;
        } catch (error){
            console.error('Error fetching sentiment data:', error);
            return null;
        }
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            elements.gameTitle.textContent = 'Loading...';
            elements.gameSentiment.textContent = 'Loading review data...';
            elements.gameReviews.textContent = 'Loading...';
        }
    }

    async function init() {
        setLoadingState(true);
        const gameID = await getGameID();

        if (!gameID){
            elements.gameTitle.textContent = "Unable to extract game ID from URL.";
            elements.gameSentiment.textContent = "Unable to extract sentiment";
            elements.gameReviews.textContent = "N/A";
            setLoadingState(false);
            return;
        } else{
            const obtainSentiment = await getSentimentData(gameID);
            if (obtainSentiment){
                elements.gameTitle.textContent = await getGameName();
                elements.gameSentiment.textContent = obtainSentiment.sentiment;
                elements.gameReviews.textContent = obtainSentiment.reviews_count;
            } else {
                elements.gameTitle.textContent = "Error loading data";
                elements.gameSentiment.textContent = "Could not fetch review data. Please try again.";
            }
            setLoadingState(false);
        }
    }

    init();
});
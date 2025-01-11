const chartContainer = document.getElementById('chart-container');
const newsContainer = document.getElementById('news-container');

// Load TradingView widget for Crypto
function loadCryptoChart() {
    chartContainer.innerHTML = ''; // Clear existing content
    new TradingView.widget({
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "container_id": "chart-container",
    });
}

// Load TradingView widget for Stocks
function loadStockChart() {
    chartContainer.innerHTML = ''; // Clear existing content
    new TradingView.widget({
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "container_id": "chart-container",
    });
}

// Load news
function loadNews() {
    newsContainer.innerHTML = '<h2>Latest News</h2>'; // Clear old news
    fetch('https://newsapi.org/v2/top-headlines?category=business&apiKey=85a51b6372cc4ec2adf8fa91af687657')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(err => console.error('Error fetching news:', err));
}

// Initial load
loadCryptoChart();

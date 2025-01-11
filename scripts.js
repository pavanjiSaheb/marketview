const newsAPIKey = '85a51b6372cc4ec2adf8fa91af687657';  // Replace with your actual News API key
const newsContainer = document.getElementById('news-container');
const chartContainer = document.getElementById('chart-container');

// Function to load TradingView chart for Crypto
function loadCryptoChart() {
    chartContainer.innerHTML = '';  // Clear existing content
    new TradingView.widget({
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "60",
        "container_id": "chart-container",
        "datafeed": new TradingView.Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
        "library_path": "https://unpkg.com/@tradingview/charting-library@latest",
        "locale": "en",
        "theme": "dark",
        "timezone": "Etc/UTC",
        "studies_overrides": {},
        "toolbar_bg": "#333",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
    });
}

// Function to load TradingView chart for Stocks
function loadStockChart() {
    chartContainer.innerHTML = '';  // Clear existing content
    new TradingView.widget({
        "autosize": true,
        "symbol": "NASDAQ:GOOGL",
        "interval": "60",
        "container_id": "chart-container",
        "datafeed": new TradingView.Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
        "library_path": "https://unpkg.com/@tradingview/charting-library@latest",
        "locale": "en",
        "theme": "dark",
        "timezone": "Etc/UTC",
        "studies_overrides": {},
        "toolbar_bg": "#333",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
    });
}

// Function to load latest news
function loadNews() {
    fetch(https://newsapi.org/v2/top-headlines?category=business&apiKey=${newsAPIKey})
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            newsContainer.innerHTML = '';  // Clear existing news
            articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = 
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                    <img src="${article.urlToImage}" alt="${article.title}" style="width: 100%; height: auto; border-radius: 5px;">
                ;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}

// Initial load (Crypto chart by default)
loadCryptoChart();

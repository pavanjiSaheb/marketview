// Your News API Key
const newsAPIKey = '85a51b6372cc4ec2adf8fa91af687657';
const newsContainer = document.getElementById('news');

// Load the TradingView chart for crypto by default
function loadCryptoChart() {
  new TradingView.widget({
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "60",
    "container_id": "chart-container",
    "datafeed": new TradingView.Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
    "library_path": "charting_library/",
    "locale": "en",
    "theme": "dark",
    "timezone": "Etc/UTC",
    "studies_overrides": {},
  });
}

// Fetch latest news from NewsAPI
function loadNews() {
  fetch(https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsAPIKey})
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      newsContainer.innerHTML = '';
      articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = 
          <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
          <p>${article.description}</p>
        ;
        newsContainer.appendChild(newsItem);
      });
    })
    .catch(error => console.error('Error fetching news:', error));
}

// Tab functionality
const cryptoTab = document.getElementById('crypto-tab');
const stocksTab = document.getElementById('stocks-tab');
const newsTab = document.getElementById('news-tab');
const chartContainer = document.getElementById('chart-container');
const newsContainerDiv = document.getElementById('news-container');

cryptoTab.addEventListener('click', () => {
  chartContainer.style.display = 'block';
  newsContainerDiv.style.display = 'none';
  loadCryptoChart();
});

stocksTab.addEventListener('click', () => {
  chartContainer.style.display = 'block';
  newsContainerDiv.style.display = 'none';
  loadStockChart(); // You can customize this to load different stock charts
});

newsTab.addEventListener('click', () => {
  chartContainer.style.display = 'none';
  newsContainerDiv.style.display = 'block';
  loadNews();
});

// Load the crypto chart by default
loadCryptoChart();

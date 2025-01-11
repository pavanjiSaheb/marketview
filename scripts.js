const newsAPIKey = '85a51b6372cc4ec2adf8fa91af687657'; // Your News API Key
const newsContainer = document.getElementById('news');
const cryptoTab = document.getElementById('crypto-tab');
const stocksTab = document.getElementById('stocks-tab');
const newsTab = document.getElementById('news-tab');
const chartContainer = document.getElementById('chart-container');
const newsContainerDiv = document.getElementById('news-container');

// Function to load TradingView chart
function loadChart(symbol) {
  new TradingView.widget({
    "autosize": true,
    "symbol": symbol,
    "interval": "60",
    "container_id": "chart-container",
    "datafeed": new TradingView.Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
    "library_path": "https://unpkg.com/@tradingview/charting-library@latest",
    "locale": "en",
    "theme": "dark",
    "timezone": "Etc/UTC",
    "studies_overrides": {},
  });
}

// Fetch and display the latest news
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

// Event listeners for tabs
cryptoTab.addEventListener('click', () => {
  chartContainer.style.display = 'block';
  newsContainerDiv.style.display = 'none';
  loadChart('BINANCE:BTCUSDT');  // Load crypto chart
});

stocksTab.addEventListener('click', () => {
  chartContainer.style.display = 'block';
  newsContainerDiv.style.display = 'none';
  loadChart('NASDAQ:GOOG');  // Load stock chart
});

newsTab.addEventListener('click', () => {
  chartContainer.style.display = 'none';
  newsContainerDiv.style.display = 'block';
  loadNews();  // Load news
});

// Default load
loadChart('BINANCE:BTCUSDT');  // Load the default chart (Crypto)

/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    display: flex;
    height: 100vh;
    background-color: #111;
    color: #fff;
}

/* Sidebar */
.sidebar {
    width: 250px;
    background-color: #1c1f26;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.sidebar .logo h1 {
    color: #f9b236;
    font-size: 32px;
    font-weight: 700;
}

.sidebar nav ul {
    list-style: none;
    padding: 0;
}

.sidebar nav ul li {
    margin-bottom: 20px;
}

.sidebar nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    display: block;
    padding: 10px;
    background-color: #2f353b;
    border-radius: 8px;
    transition: background 0.3s;
}

.sidebar nav ul li a:hover {
    background-color: #f9b236;
}

/* Main Content */
.main-content {
    flex-grow: 1;
    padding: 20px;
}

.tab-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.charts-container {
    width: 100%;
    max-width: 1200px;
    height: 800px;
}

.chart {
    width: 100%;
    height: 100%;
    background-color: #333;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.news-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin-top: 20px;
}

.news-item {
    background-color: #222;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    font-size: 20px;
}

footer {
    background-color: #1c1f26;
    color: white;
    padding: 10px;
    text-align: center;
}

/* Reset basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* General Body Styling */
body {
    background-color: #121212;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

/* Header Section */
header {
    background: linear-gradient(45deg, #1E3C72, #2A5298); /* Dark blue gradient */
    padding: 20px;
    text-align: center;
    color: white;
}

header h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline-block;
    margin-right: 15px;
}

nav ul li a {
    color: white;
    font-size: 18px;
    text-decoration: none;
    padding: 12px;
    background-color: #333;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

nav ul li a:hover {
    background-color: #5c85f7; /* Light blue hover effect */
}

/* Content Section */
#content {
    padding: 20px;
}

/* Chart Section */
#chart-container {
    height: 500px;
    width: 100%;
}

/* News Section */
#news-container {
    margin-top: 40px;
}

.news-item {
    background-color: #333;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.news-item:hover {
    background-color: #444;
}

.news-item a {
    color: #5c85f7;
    text-decoration: none;
    font-weight: bold;
}

/* Footer Section */
footer {
    background-color: #333;
    text-align: center;
    padding: 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

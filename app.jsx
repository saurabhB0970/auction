.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sidebar {
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px; 
  border-bottom: 1px solid #ccc;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; 
  justify-content: space-around; 
}

.sidebar li {
  margin: 0 10px;
}

.content {
  flex: 1; 
  padding: 20px;
}

.sidebar a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px; 
    border-radius: 5px;
}

.sidebar a:hover {
    background-color: #ddd; 
}

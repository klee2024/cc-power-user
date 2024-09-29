import logo from './logo.svg';
import './App.css';
import categories from './data/baseData.json'
import CategoryButton from './components/CategoryButton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> {typeof Array.from(categories.rewardsCategories)}</p>
      </header>
      <section class="category-buttons">
            {categories.rewardsCategories.map((cat) => (
                <CategoryButton category={cat} />
            ))}
    </section>
    </div>
  );
}

export default App;

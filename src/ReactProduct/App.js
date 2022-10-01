import './App.css'

import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App () {
  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
      <h1 className='welcome-text'>Welcome to the page</h1>
      <div className='answer-container'>
        <h2>How does react work?</h2>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>

        <h2>Difference between props and state?</h2>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this. setState property is used to
          update the state values in the component.
        </p>

        <h2>What does useEffect do without data load?</h2>
       
          <ol>
            <li> Answer:Registering and deregistering event listeners.</li>
            <li>Reading from local storage.</li>
          </ol>
     
      </div>
    </div>
  )
}

export default App

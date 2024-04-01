
import './App.css'
import MainPage from './components/MainPage'
import { userContext } from './components/Contextapi'
import { useContext } from 'react';

function App() {
  const data = useContext(userContext);
  // console.log(data);


  return (
    <div className='App'>
      <MainPage />
    </div>
  )
}

export default App

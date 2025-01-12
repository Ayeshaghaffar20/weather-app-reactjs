
import './App.css'
import Temprature from './component/Temprature'

function App() {
  

  return (
    <div className='bg-[#1F213A] h-screen flex justify-center align-top'>
      <div className='bg-blue-200 mt-40 w-1/5 h-1/3'>
      <Temprature/>
      
      
      </div>
      <div className='bg-blue-400 mt-40 w-1/3 h-1/3'></div>

    </div>
  )
}

export default App

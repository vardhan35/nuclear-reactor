
import './App.css'
import MovePoint from './components/MovePoints'

function App() {

  return (
    <>
    <MovePoint pointA={{ x: 50, y: 50 }} pointB={{ x: 300, y: 300 }} speed={5} />
    </>
  )
}

export default App

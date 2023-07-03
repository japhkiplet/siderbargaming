import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Sidebar from './component/Sidebar'
import Step1 from './pages/Step1'
import Step2 from './pages/step2'
import Step3 from './pages/step3'
import Step4 from './pages/step4'
import Step5 from './pages/step5'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Sidebar>
      <Routes>
          <Route path='/' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
          <Route path='/step3' element={<Step3/>}/>
          <Route path='/step4' element={<Step4/>}/>
          <Route path='/step5' element={<Step5/>}/>
        </Routes>

      </Sidebar>
     </BrowserRouter>
    </>
  )
}
export default App
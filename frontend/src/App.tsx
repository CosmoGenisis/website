import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/Page/LandingPage'
import { PrimeHrPage } from './components/Page/PrimeHrAgent'
import { OptimusPage } from './components/Page/OptimusAgent'
import { NovaPage } from './components/Page/NovaAgent'
import { MaxiPage } from './components/Page/MaxiAgent'
import { ArchiePage } from './components/Page/ArchieAgent'
import { OnixPage } from './components/Page/OnixAgent'
import NewLogin from './components/Page/NewLogin';
import NewSignup from './components/Page/NewSignup';
import TestPage from './components/TestPage'
import { About } from './components/ui/about-3'
import AboutUs from './components/Page/AboutUs'
import { Resource } from './components/Page/ResourcePage'
import { WaitlistPage } from './components/Page/Waitlist'
import { SolutionPage } from './components/Page/SolutionPage'
import { FeaturesPage } from './components/Page/FeaturesPage'
import ContactPage from './components/Page/ContactPage'
import PreAccess from './components/blocks/Waitlist'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/prime' element={<PrimeHrPage/>}/>
        <Route path='/optimus' element={<OptimusPage/>}/>
        <Route path='/nova' element={<NovaPage/>}></Route>
        <Route path='/maxi' element={<MaxiPage/>}></Route>
        <Route path='/archie' element={<ArchiePage/>}/> 
        <Route path='/onix' element={<OnixPage/>}/>
        <Route path='/solution' element={<SolutionPage />} />
        <Route path='/solutions' element={<SolutionPage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/pre-access' element={<PreAccess />} />

        <Route path='/login' element={<NewLogin/>}></Route>
        <Route path='/waitlist' element={<WaitlistPage/>}></Route>
        <Route path='/signup' element={<NewSignup/>}></Route>
        <Route path='/test' element={<TestPage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/resource' element={<Resource/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
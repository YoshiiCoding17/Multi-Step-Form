import { Steps } from './components/Steps'
import { AppProvider } from './context/AppProvider'
import './App.css'
import { ActualSection } from './components/ActualSection'


function App() {
  
  return (
    <AppProvider>
      <main className='main container'>
        <section className='main-steps'>
          <Steps/>
        </section>
        <section className='main-forms'>
          <ActualSection/>
        </section>
        
      </main>
    </AppProvider>
  )
}

export default App

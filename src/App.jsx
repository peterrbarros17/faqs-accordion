import { IconStar } from "./components/Header/icon-star"
import FAQ from './components/FAQ'
import Header from "./components/Header"

function App() {
 
  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div className='p-4 bg-slate-200 rounded-xl max-w-2xl'>
        <Header faq="FAQs - Estágio Front End"/>
        <FAQ/>
      </div>
    </main>
  )
}

export default App

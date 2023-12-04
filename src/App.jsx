import FAQ from './components/FAQ'
import Header from "./components/Header"

function App() {
 
  return (
    <main className="w-full h-screen flex items-center justify-center bg-background-pattern font-work-sans bg-cover bg-no-repeat bg-center">
      <section className='p-6 bg-slate-200 rounded-xl max-w-2xl z-10 m-5'>
        <Header title="FAQs - Estágio Front End"/>
        <FAQ/>
      </section>
    </main>
  )
}

export default App

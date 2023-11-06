import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'

export default function Home() {



  
  return (
    <>
      <header className='absolute top-0 left-0 right-0'><Header /></header>
      <main className='h-screen w-full flex items-center bg-black'><Content /></main>
      <footer className='absolute bottom-0 left-0 right-0'><Footer /></footer>
    </>
  )
}

import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'

// This is the main page component.
export default function Home() {
  return (
    <>
      {/* Render the header component at the top of the page */}
      <header className='absolute top-0 left-0 right-0'><Header /></header>

      {/* Render the main content component, filling the entire screen with a black background */}
      <main className='h-screen w-full flex items-center bg-black'><Content /></main>

      {/* Render the footer component at the bottom of the page */}
      <footer className='absolute bottom-0 left-0 right-0'><Footer /></footer>
    </>
  )
}

import { Header, Nav } from '@/components/Nav'
import '@/styles/globals.css'
import '@/styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <div className='w-[90%] mx-auto'>
    <Component {...pageProps} />

    </div>
    </>
    )
}

import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import './Home.css'


export default function Home() {
    return (
        <>
           <Header />
           <div className="homeContainer">
           <Sidebar/> 
           <Feed/>
           </div>
        </>
    )
}

import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Share from '../components/share/Share'

export default function Profile() {
    return (
        <div>
            <Header/>
             <div className="homeContainer">
            <Sidebar/>
            <Share/>
            </div>
        </div>
    )
}

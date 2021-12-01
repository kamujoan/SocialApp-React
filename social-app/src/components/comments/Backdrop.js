import './Backdrop.css'


export default function Backdrop({cancel}) {

    return (
       <div className='backdrop' onClick={cancel}/>
    )
}
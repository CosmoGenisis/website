import { Fragment } from "react/jsx-runtime"
import WaitLanding from "../blocks/Waitlist"
import Navbar from "../ui/nav"
import FooterDemo from '../ui/FooterDemo'

export const WaitlistPage=()=>{
    return(
        <Fragment>
             <Navbar/>
            <WaitLanding/>
            <FooterDemo />
        </Fragment>
        
    )
}
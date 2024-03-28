import {Link} from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBitcoin } from "react-icons/ci";
import '../Dashboard/index.css'

const Dashboard=()=>{
    return(
        <div className='dashboard'>
            <h1 className='heading-dashboard'><CiBitcoin/> Bitcoin Users</h1>
            <div className='nav-link'>
                <Link className='link' to="/">Population</Link>
                <Link className='link' to="/cryptocurrency">CryptoCurrency</Link>
            </div>
            <div className='bottom-elements'>
                <p><IoIosNotificationsOutline />  Notifications</p>
                <p><MdOutlineContactSupport/>  Support</p>
                <p><IoSettingsOutline />  Settings</p>
            </div>
        </div>
    )
}
export default Dashboard;
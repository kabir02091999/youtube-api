import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const historia=useNavigate()

    const [Search,setSearch] = useState('')

    const envioState = (ev) => {
        setSearch(ev.target.value)
        //console.log(Search)

    }

    const enviobase = (ev) => {

        ev.preventDefault();
        console.log(Search)
        historia(`/search/${Search}`)

    }

    const enviar = ()=>{
        
        console.log(Search)
        historia(`/search/${Search}`)

    }

    return ( 
    
        <div className='header'>
            
            <div className='header__left'>

                <MenuIcon/>
                <Link to='/'>

                    <img className='header__logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                    alt=''
                    />

                </Link>

            </div>
            <div className='header__center'>
                
                <form  onSubmit={enviobase}  >


                    <input type='text' 
                    name='search'
                    onChange={envioState}
                    />
                    <SearchIcon className='header__searchbutton' type="submit" onClick={()=>(enviar())} />


                </form>

            </div>
            <div className='header__right'>

                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <Avatar
                    alt='Nouman Ahmed'
                    stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
                />

            </div>
    
        </div> );
}
            
export default Header;
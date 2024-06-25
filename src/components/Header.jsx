import React from 'react'
import {useNavigate} from 'react-router-dom';
import userAvatar from '../assets/userImage.png';
const Header = ({userDetails}) => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Jobfinder</h1>
        {
            userDetails &&(
                <div>
                    <img src={userAvatar} alt="" />
                </div>
            )
        }
        {!userDetails && (
            <div>
                <button onClick={()=>{navigate('/login')}}>
                    Login
                </button>
                <button onClick={()=>{navigate('/register')}}>
                    Register
                </button>
            </div>
        )}
    </div>
  )
}

export default Header
import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/Avatar.png'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'


function Navigation({active,setActive}) {
    
    return (
        <NavStyled>
            
        <div className="user-con">
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Martin</h2>
                <p>Portfolio</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) =>{
                return <li 
                    key={item.id}
                    onClick={()=> setActive(item.id)}
                    className={active === item.id ? 'active': ''}
                >   {/*Map each menu item to a list item */}

                            {item.icon}
                            <span>{item.title}</span>
                        </li>
            })}
        </ul>
        <div className="bottom-nav">
            <li>
                {signout} Sign Out
            </li>
        </div>
        </NavStyled>
    )
}
const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    font-size: 30px;
    width: 374px;
    height: 100%;
    background: rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4,5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    box-shadow: 0px 1px 10px darkblue;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background-color: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .15rem;
            box-shadow: 0px 1px 17px darkblue
        
        }
        p{
            opacity: 0.6;
        }
    }
    
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            margin-left: 1rem;
            font-weight: 100;
            cursor: pointer;
            transition: all .4s ease-in-out;
            position: relative;
            &:hover{
                
            color: darkblue;          
            transform: scale(1.05);  
            }
            
        }
        

    }


    .active {
    color: rgba(34,34,96, 1) ;

    /* Margin to push the content away from the bar */
    span, i {
        margin-left: 10px; // Adjust this value as needed
    }

    &::before {
        content: "   ";
        position: absolute;
        left: -6px; // Adjusted this value to push the bar further left
        top: 0;
        width: 4px;
        height: 100%;
        background: darkblue;
        border-radius: 0 10px 10px 0;
    }
}

    .bottom-nav{
        margin-left: 1rem;
        font-weight: 400;
    }
    

   
`;


export default Navigation
//NavBar Component 
//This component will have the following:
//1. Logo
//2. Search Bar
//3. Weeks drop down menu
//4. Glossary button

import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import WeeksDropDown from '../WeeksDropDown/DropDown'
import GlossaryButton from '../GlossaryButton/Button'
import './NavBar.css'
// import '../../public/images/logo.jpg'

function NavBar(){
    // const handleWeekClick = ()=>{
        
    // }
    return(
        <div className="navbar"> 
            
            <img alt = "logo" className = "logo" src={"logo.jpg"}/>
            
            <SearchBar className= "navbar--search"/>
            <div className="navbar--menus">
                <WeeksDropDown className="navbar--weeks"/>
                <GlossaryButton className="navbar--glossary"/>
            </div>
        </div>        
    );
}

export default NavBar;
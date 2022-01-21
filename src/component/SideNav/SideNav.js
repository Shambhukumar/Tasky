import React from 'react';
import DashboardSvg from "../../Assets/Svg/DashboardSvg.svg";
import SettingsSvg from "../../Assets/Svg/SettingsSvg.svg";
import ActivitySvg from "../../Assets/Svg/ActivitySvg.svg";
import LogoImg from "../../Assets/Images/logo.jpg";
import "./sideNav.scss";
const SideNav = () => {
    const Menu = [
        {name: "Dashboard", icon: DashboardSvg},
        {name: "Settings", icon: SettingsSvg},
        {name: "All Activity", icon: ActivitySvg},

    ]

    const DropMenu = [
        {name: "Daily Task", emoji: "✔️"},
        {name: "Meetings Summary", emoji: "🤝"},
        {name: "Resources", emoji: "📝"},
        {name: "Availibilty", emoji: "📆"},
        {name: "All Projects", emoji: "💼"},
        {name: "Brainstroaming", emoji: "🧠"},
    ]
  return (
  <div className='SideNav'>
        <div className='SideNav-logo'>
           <img src={LogoImg} alt='logo Img'/>
            <span className='SideNav-logo-text'>
                OWW Studio
            </span>
            <div className='SideNav-logo-arrow'>
                <span className='SideNav-logo-arrow-up'></span>
                <span className='SideNav-logo-arrow-down'></span>
            </div>
        </div>
        <ul className='SideNav-Menu'>
            { Menu.map((e,el)=>{
                return <li className='SideNav-Menu-item'>
                <img src={e.icon} alt='img name' /> <span className='SideNav-Menu-item-text'>{e.name}</span>
            </li>
            })}
        </ul>
        <ul className='SideNav-DropMenu'>
            { DropMenu.map((e,el)=>{
                return <li className={`SideNav-DropMenu-item ${el === 0 && 'SideNav-DropMenu-item-active'}`}>
              <span className='SideNav-DropMenu-item-arrow'></span> <span className='SideNav-DropMenu-item-emoji'>{e.emoji}</span> <span className='SideNav-DropMenu-item-text'>{e.name}</span>
            </li>
            })}
        </ul>

        <div className='SideNav-button'>
            <span  className='SideNav-button-plus'>+</span>
            <span  className='SideNav-button-text'>New Project</span>
        </div>
  </div>
  );
};

export default SideNav;

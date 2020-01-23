import React from 'react';

import Logo from './logo/Logo'
import NavItems from './navItems/NavItems'
import './Navigation.scss'

export interface NavigationBarProps {
  
}
 
const NavigationBar: React.SFC<NavigationBarProps> = () => {
  return ( 
    <div className='navItems'>
      <Logo />
      <NavItems />
    </div>
   );
}
 
export default NavigationBar;
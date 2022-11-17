import React from 'react';
import './header.css';

const nav__links=[
    {
        path: '#home',
        display: 'Home'
    },

    {
        path: '#about',
        display: 'About'
    },

    {
        path: '#service',
        display: 'Service'
    },

    {
        path: '#project',
        display: 'Project'
    },

    {
        path: '#blog',
        display: 'Blog'
    },
]

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
               <div className="col-lg-4">
               <div className="logo">
                    <h2>Digency</h2>
                </div>
               </div>

                {/*======nav======*/}
                <div className="col-lg-6">
                <div className="navigation">
                    <ul className='menu'>
                        {
                            nav__links.map((item,index)=>(
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>

                {/*====light mode====*/}
                <div className="col-lg-2">
                <div className="light__mode">
                    <span><i class="ri-sun-line"></i>Light Mode
                    </span>
                </div>
                </div>
        
            </div>
        </div>
    </header>
  )
}

export default Header
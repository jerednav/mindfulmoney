import React from 'react'
import classes from './Header.module.css'


export const Header = () => {
    return (
        
           <header className={classes.header}>
           <div className={classes.logo}>Mindful Money</div>
            <nav>
                <ul>
                    <li>
                        Transactions
                    </li>
                    <li> 
                        Reports
                    </li>
                </ul>
            </nav>
            </header> 
    
    )
}

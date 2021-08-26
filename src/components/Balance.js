import React from 'react'
import classes from './Balance.module.css'

export const Balance = () => {
    return (
        <div className={classes.container}>
            <h3>Your Balance</h3>
            <h1 id='balance'>$0.00</h1>
        </div>
    )
}

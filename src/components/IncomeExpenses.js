import React from 'react'
import classes from './IncomeExpenses.module.css'

export const IncomeExpenses = () => {
    return (
        <div className={classes.incexp}>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+0.00</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus'>-0.00</p>
            </div>
            
        </div>
    )
}

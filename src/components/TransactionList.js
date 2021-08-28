import classes from './TransactionList.module.css'


export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
      <ul className="list">
         <li className="minus">
          Cash <span>-$400</span>
          <button className={classes.TransactionList}>x</button>
        </li> 
      </ul>
        </div>
    )
}

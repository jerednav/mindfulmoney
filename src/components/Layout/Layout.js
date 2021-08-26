import classes from './Layout.module.css'
import { Header } from '../Header'

export const Layout = () => {
    return (
        <div>
            <Header />
            <main className={classes.main}>

            </main>
        </div>
    )
}


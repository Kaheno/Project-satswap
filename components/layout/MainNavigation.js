import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Satswap
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/log-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

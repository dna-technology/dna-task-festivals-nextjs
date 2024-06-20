'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import classes from './Header.module.css';

export const Header = (): ReactElement => {
    return (
        <header className={classes.header}>
            <Link href="/">Home</Link>
            <Link href="/sign-in">
                <button>Sign in</button>
            </Link>
        </header>
    );
}

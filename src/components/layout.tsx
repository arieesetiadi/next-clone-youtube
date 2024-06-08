import { ReactNode } from 'react';
import NavigationBar from './navigation-bar';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    );
}

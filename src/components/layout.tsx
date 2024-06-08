import { ReactNode } from 'react';
import NavBar from './navbar';
import SideBar from './sidebar';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <NavBar />

            <div className="flex">
                <div className="w-1/6 px-3 py-2">
                    <SideBar />
                </div>

                <div className="flex-1 px-3 py-2">{children}</div>
            </div>
        </>
    );
}

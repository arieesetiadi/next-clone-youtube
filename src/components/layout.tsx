import { ReactNode, useContext } from 'react';
import NavBar from './navbar';
import SideBar from './sidebar';
import { SideBarContext } from '@/pages/_app';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    const { isSidebarOpen } = useContext(SideBarContext);

    return (
        <>
            <NavBar />

            <div className="flex">
                {!!isSidebarOpen && (
                    <div className="w-1/6 px-3 py-2">
                        <SideBar />
                    </div>
                )}

                <div className="flex-1 px-3 py-2">{children}</div>
            </div>
        </>
    );
}

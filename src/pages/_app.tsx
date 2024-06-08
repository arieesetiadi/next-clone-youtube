import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { createContext, useEffect, useState } from 'react';

export const SideBarContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsSidebarOpen(!!JSON.parse(localStorage.getItem('is-sidebar-open') ?? ''));
    }, []);

    function toggleSidebar() {
        const newState = !isSidebarOpen;
        setIsSidebarOpen(newState);
        localStorage.setItem('is-sidebar-open', JSON.stringify(newState));
    }

    return (
        <SideBarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SideBarContext.Provider>
    );
}

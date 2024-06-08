import { useState, useEffect } from 'react';

export default function useSideBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('is-sidebar-open', JSON.stringify(isOpen));
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(JSON.parse(localStorage.getItem('is-sidebar-open') ?? ''));
    }, []);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return { isOpen, toggle };
}

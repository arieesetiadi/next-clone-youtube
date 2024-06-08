import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type Props = {
    href: string;
    children: ReactNode;
};

export default function SideBarLink({ href, children }: Props) {
    const router = useRouter();
    const isActive = router.pathname == href;

    return (
        <Link
            href={href}
            className={`btn btn-ghost w-full justify-start gap-5 rounded-xl ${isActive ? 'bg-secondary' : ''}`}>
            {children}
        </Link>
    );
}

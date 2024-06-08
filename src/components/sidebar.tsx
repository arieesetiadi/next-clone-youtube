import SideBarLink from './sidebar-link';

const links = [
    {
        text: 'Home',
        href: '/',
        icon: '/images/icons/home.svg',
    },
    {
        text: 'Subscriptions',
        href: '/subscriptions',
        icon: '/images/icons/subscriptions.svg',
    },
];

export default function SideBar() {
    return (
        <div>
            {links.map(({ text, href, icon }) => (
                <SideBarLink href={href}>
                    <img src={icon} alt={`${text} Icon`} />
                    {text}
                </SideBarLink>
            ))}
        </div>
    );
}

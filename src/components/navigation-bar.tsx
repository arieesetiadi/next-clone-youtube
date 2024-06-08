import Link from 'next/link';
import SearchBar from './search-bar';

export default function NavigationBar() {
    return (
        <div className="flex justify-between px-4 py-2">
            {/* Left */}
            <div className="flex items-center gap-3">
                <button className="btn btn-circle">
                    <img src="/images/icons/hamburger.svg" alt="Hamburger Icon" />
                </button>

                <Link href="/">
                    <img src="/images/logos/youtube-white.svg" alt="Youtube Logo" width="90" />
                </Link>
            </div>

            {/* Center */}
            <div className="flex items-center gap-3">
                <SearchBar />

                <button className="btn btn-circle">
                    <img src="/images/icons/mic.svg" alt="Mic Icon" />
                </button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <button className="btn btn-circle">
                    <img src="/images/icons/create.svg" alt="Create Content Icon" />
                </button>

                <button className="btn btn-circle">
                    <img src="/images/icons/apps.svg" alt="Apps Icon" />
                </button>

                <button className="btn btn-circle">
                    <img src="/images/icons/notifications.svg" alt="Notifications Icon" />
                </button>

                <div className="avatar">
                    <div className="h-9 w-9 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

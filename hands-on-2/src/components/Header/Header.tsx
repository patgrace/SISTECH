import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

type NavItem = {
    href: string;
    label: string;
};

function Header() {
    const navItems: NavItem[] = [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "#About Us", label: "About Us" },
        { href: "/login", label: "Login" },
    ];

    return (
        <header className='flex justify-between items-center p-4'>
            <a href="#" className='flex items-center text-blue mx-8 my-4'>
                <FaBook className="text-2xl m-4 p" />
                <span className="text-lg font-bold">E-learning</span>
            </a>
            <nav className="flex items-center gap-8">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <div className="flex ">
                            <p className={`flex items-center flex-col gap-1 text-blue font-bold ${item.label === "Login" ? "bg-blue text-light rounded-2xl px-3 py-1 text-sm " : "hover:shadow-xl "}`}>{item.label}</p>
                        </div>
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export { Header };

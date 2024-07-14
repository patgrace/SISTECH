import Link from 'next/link';

type NavItem = {
    href: string;
    label: string;
};

function Header() {
    const navItems: NavItem[] = [
        { href: "/", label: "Home" },
        { href: "#Courses", label: "Courses" },
        { href: "#About Us", label: "About Us" },
        { href: "#Login", label: "Login" },
    ];

    return (
        <div className="">
            <nav className=" bg-blue flex justify-center items-center gap-8 py-4 px-8 " >
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <div className="flex items-center flex-col gap-1 text-light">
                            <p className="text-xs md:text-lg">{item.label}</p>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export { Header };

import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-around gap-5 bg-green-500 py-8 dark:text-white w-full mx-auto container">
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-3">
                    <li>
                        <a className="cursor-pointer hover:underline">Home</a>
                    </li>
                    <li>
                        <a className="cursor-pointer hover:underline">Contact</a>
                    </li>
                    <li>
                        <a className="cursor-pointer hover:underline">About</a>
                    </li>
                </ul>
            </nav>
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-5">
                    <li className="cursor-pointer">
                        <a>
                            <FaFacebook className="size-6 fill-current" />
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a>
                            <BsTwitter className="size-6 fill-current" />
                        </a>
                    </li>
                </ul>
            </nav>
            <aside className="text-center text-sm">
                <p >&copy; 2024 <span className="flex text-center justify-center">
                    <h1 className="">Vegitable</h1>
                    <p className="font-bold text-red-500">House</p>
                </span>. All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;
import { FaHome, FaRegEye, FaTools, FaTags, FaShoppingCart, FaBox, FaTh, FaGift, FaFileAlt, FaInfoCircle, FaHandsHelping, FaQuestionCircle, FaBlog, FaNewspaper, FaArchive, FaPhoneAlt, FaHeadset, FaMapMarkerAlt, FaCommentDots, FaSortDown, FaUser, FaShoppingBag, FaHardHat } from 'react-icons/fa';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';


const Header = () => {
    const menuItems = [
        {
            "id": 1,
            "name": "Home",
            "icon": FaHome,
            "description": "Navigate to the homepage.",
            "subItems": [
                { "id": 101, "name": "Overview", "url": "/home/overview", "icon": FaRegEye, "description": "See an overview of our offerings." },
                { "id": 102, "name": "Features", "url": "/home/features", "icon": FaTools, "description": "Explore the features of our platform." },
                { "id": 103, "name": "Pricing", "url": "/home/pricing", "icon": FaTags, "description": "Check out our pricing plans." }
            ]
        },
        {
            "id": 2,
            "name": "Shop",
            "icon": FaShoppingCart,
            "description": "Browse and shop for products.",
            "subItems": [
                { "id": 201, "name": "Products", "url": "/shop/products", "icon": FaBox, "description": "View all available products." },
                { "id": 202, "name": "Categories", "url": "/shop/categories", "icon": FaTh, "description": "Explore product categories." },
                { "id": 203, "name": "Offers", "url": "/shop/offers", "icon": FaGift, "description": "Check out the latest deals and offers." }
            ]
        },
        {
            "id": 3,
            "name": "Page",
            "icon": FaFileAlt,
            "description": "Access various pages on the site.",
            "subItems": [
                { "id": 301, "name": "About Us", "url": "/page/about-us", "icon": FaInfoCircle, "description": "Learn more about our company." },
                { "id": 302, "name": "Services", "url": "/page/services", "icon": FaHandsHelping, "description": "Discover the services we offer." },
                { "id": 303, "name": "FAQ", "url": "/page/faq", "icon": FaQuestionCircle, "description": "Find answers to frequently asked questions." }
            ]
        },
        {
            "id": 4,
            "name": "Blog",
            "icon": FaBlog,
            "description": "Read the latest articles and updates.",
            "subItems": [
                { "id": 401, "name": "Latest Posts", "url": "/blog/latest-posts", "icon": FaNewspaper, "description": "Stay updated with our latest posts." },
                { "id": 402, "name": "Categories", "url": "/blog/categories", "icon": FaTags, "description": "Browse articles by category." },
                { "id": 403, "name": "Archives", "url": "/blog/archives", "icon": FaArchive, "description": "Explore our blog archives." }
            ]
        },
        {
            "id": 5,
            "name": "Contact",
            "icon": FaPhoneAlt,
            "description": "Get in touch with us.",
            "subItems": [
                { "id": 501, "name": "Support", "url": "/contact/support", "icon": FaHeadset, "description": "Reach out to our support team." },
                { "id": 502, "name": "Locations", "url": "/contact/locations", "icon": FaMapMarkerAlt, "description": "Find our office locations." },
                { "id": 503, "name": "Feedback", "url": "/contact/feedback", "icon": FaCommentDots, "description": "Share your feedback with us." }
            ]
        }
    ];


    return (
        <Navbar>
            <NavbarBrand>
                <h1 className="text-green-600">Vegitable</h1>
                <p className="font-bold text-inherit">House</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems?.map((item) => (
                    <Dropdown key={item.id}>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    {item.name} <FaSortDown />
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label={item.name}
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            {item.subItems?.map((subItem) => (
                                <DropdownItem
                                    key={subItem.id}
                                    description={subItem.description}
                                    startContent={<subItem.icon />}
                                >
                                    <NavLink to={subItem.url}>
                                        {subItem.name}
                                    </NavLink>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                ))}
            </NavbarContent>


            <NavbarContent justify="end" >
                <NavbarItem className="hidden lg:flex ">
                    <Link href="#"><FaUser className='text-green-600' /> </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#"><FaHardHat className='text-green-600' /> </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#"><FaShoppingBag className='text-green-600' /> </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    );
}

export default Header;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <nav className="bg-softwhite dark:bg-charcoal border-b border-lightgray dark:border-bordergray shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">


                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-charcoal dark:text-offwhite">PalatteCraft</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-charcoal dark:text-offwhite hover:text-teal">
                            Home
                        </Link>

                        <Link to="/popular" className="text-charcoal dark:text-offwhite hover:text-teal">
                            Populate Palettes
                        </Link>

                        <button className="bg-teal text-white px-4 py-2 rounded-lg hover:bg-teal/90">
                            Login
                        </button>

                        <button className="bg-violet text-white px-4 py-2 rounded-lg hover:bg-violet/90">
                            Signup
                        </button>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-lightgray dark:bg-darkgray text-charcoal dark:text-offwhite hover:bg-teal/20"
                        >
                            {darkMode ? (
                                <MdOutlineLightMode className="text-xl" />
                            ) : (
                                <MdOutlineDarkMode className="text-xl" />
                            )}
                        </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-lightgray dark:bg-darkgray text-charcoal dark:text-offwhite hover:bg-teal/20"
                        >
                            {darkMode ? (
                                <MdOutlineLightMode className="text-xl" />
                            ) : (
                                <MdOutlineDarkMode className="text-xl" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-charcoal dark:text-offwhite text-2xl"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-charcoal px-4 py-3 space-y-2 border-t border-gray-200 dark:border-gray-800">
                    <Link to="/" className="block text-charcoal dark:text-offwhite hover:text-teal-500">
                        Home
                    </Link>
                    <Link to="/popular" className="block text-charcoal dark:text-offwhite hover:text-teal-500">
                        Popular Palettes
                    </Link>
                    <button className="w-full bg-teal hover:bg-teal/90 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                        Login
                    </button>
                    <button className="w-full bg-violet hover:bg-violet/90 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
"use client"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from '@/images/Logo.png'
import platform from '@/images/Platform.png'
import solutions from '@/images/Solutions.png'
import about from '@/images/about.png'
const menuItems = [
	{
		name: "Features",
		href: "/features",
		icon: platform,
	},
	{
		name: "Solutions",
		href: "/solutions",
		icon: solutions,
	},
	{
		name: "About",
		href: "/about",
		icon: about,
	},
	{
		name: "Contact",
		href: "/contact",
		icon: about, // Reusing about icon temporarily
	},
]

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	// Handle scroll events
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Toggle mobile menu
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev);
	};

	return (
		<nav
			ref={navRef}
			className={cn(
				"fixed z-50 w-full border-b flex justify-center items-start transition-all duration-300",
				isScrolled ? "bg-white/40 shadow-md" : "bg-white/20 shadow-lg",
				isScrolled ? "py-1" : "py-2",
				"rounded-full mx-auto left-0 right-0 mt-4",
				isScrolled ? "max-w-3xl" : "max-w-5xl",
				"px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10",
				"backdrop-blur-xl pointer-events-auto"
			)}
		>
			<div
				className={cn(
					"w-full grid grid-cols-12 items-center justify-between transition-all duration-300",
					isScrolled ? "gap-x-1 sm:gap-x-2 md:gap-x-4" : "gap-x-2 sm:gap-x-4 md:gap-x-6"
				)}
			>
				{/* Logo and brand */}
				<div className="flex items-center min-w-0 flex-shrink-0 col-span-6 sm:col-span-4 md:col-span-3">
					<Link to="/" className="flex items-center truncate">
						<img
							src={Logo}
							alt="Zordie Logo"
							className={cn(
								"transition-all duration-300",
								isScrolled ? "h-6" : "h-10",
								"w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
							)}
						/>
						<span className={cn(
							"ml-2 font-extrabold text-gray-900 transition-all duration-300 tracking-tight truncate",
							isScrolled ? "text-lg" : "text-2xl",
							"max-w-[60px] sm:max-w-[80px] md:max-w-[120px]"
						)}>
							Zordie
						</span>
					</Link>
				</div>

				{/* Navigation Links - Center */}
				<div className="hidden lg:flex items-center justify-center col-span-6">
					<div className="flex justify-center w-full space-x-4 md:space-x-8">
						{/* Features button */}
						<Button asChild size="sm" variant="ghost" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 text-ellipsis overflow-hidden whitespace-nowrap",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to={menuItems[0].href} className="truncate overflow-hidden text-center">{menuItems[0].name}</Link>
						</Button>
						<Button asChild size="sm" variant="ghost" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 text-ellipsis overflow-hidden whitespace-nowrap",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to={menuItems[1].href} className="truncate overflow-hidden text-center">{menuItems[1].name}</Link>
						</Button>
						<Button asChild size="sm" variant="ghost" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 text-ellipsis overflow-hidden whitespace-nowrap",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to={menuItems[2].href} className="truncate overflow-hidden text-center">{menuItems[2].name}</Link>
						</Button>
						<Button asChild size="sm" variant="ghost" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 text-ellipsis overflow-hidden whitespace-nowrap",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to={menuItems[3].href} className="truncate overflow-hidden text-center">{menuItems[3].name}</Link>
						</Button>
					</div>
				</div>

				{/* Right side buttons */}
				<div className="flex items-center justify-end col-span-6 sm:col-span-4 md:col-span-3">
					<div className={cn(
						"hidden sm:flex items-center justify-end space-x-2 md:space-x-4"
					)}>
						<Button asChild variant="outline" size="sm" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 border-gray-300",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to="/login" className="truncate text-center">Login</Link>
						</Button>
						<Button asChild size="sm" className={cn(
							"rounded-full font-semibold transition-all duration-300 px-2 md:px-3 py-1 bg-orange-500 hover:bg-orange-600",
							isScrolled ? "text-xs" : "text-sm"
						)}>
							<Link to="/pre-access" className="truncate text-center">Pre Access</Link> 
						</Button>
					</div>
					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className={cn(
							"inline-flex items-center justify-center rounded-full transition-all duration-300 text-gray-700 hover:bg-white/30 hover:backdrop-blur-md lg:hidden ml-2",
							isScrolled ? "p-1" : "p-2"
						)}
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						{isMobileMenuOpen ? (
							<X className={isScrolled ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />
						) : (
							<Menu className={isScrolled ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden w-full max-w-xs mx-auto"
					>
						<div className="space-y-1 px-2 sm:px-4 pb-5 pt-2">
							{menuItems.map((item, index) => (
								<div key={index} className="py-2">
									<Link
										to={item.href}
										className="flex w-full items-center justify-between rounded-md py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
									>
										<span>{item.name}</span>
									</Link>
								</div>
							))}
							<div className="mt-4 flex flex-col space-y-2">
								<Button asChild variant="outline" size="sm" className="rounded-md hover:bg-gray-100/80">
									<Link to="/login">Login</Link>
								</Button>
								<Button asChild size="sm" className="rounded-md bg-orange-500 hover:bg-orange-600">
									<Link to="/pre-access">Pre Access</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
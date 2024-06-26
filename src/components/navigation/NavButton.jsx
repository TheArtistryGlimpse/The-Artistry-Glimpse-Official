import { Facebook, Home, Instagram, NotebookText, Palette, PartyPopper, Phone, Twitter, User, Wand } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import ResponsiveContent from '../ResponsiveContent';
import clsx from 'clsx';
import { motion } from 'framer-motion';


const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />;
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={1.5} />;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />;
        case "instagram":
            return <Instagram className='w-full h-auto' strokeWidth={1.5} />;
        case "deviantart":
            return <PartyPopper className='w-full h-auto' strokeWidth={1.5} />;
        case "pinterest":
            return <Wand className='w-full h-auto' strokeWidth={1.5} />;
        case "resume":
            return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;

        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
    }
}

const item = {
    hidden: { scale: 0 },
    show: {
        scale: 1
    }
}

const NavLink = motion(Link)

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
    return (
        <ResponsiveContent>
            {({ size }) => {
                return size && size >= 480 ?
                    <div
                        className='absolute cursor-pointer z-50'
                        style={{ transform: `translate(${x}, ${y})` }}
                    >
                        <NavLink
                            variants={item}
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            name={label}
                            className='flex items-center justify-center rounded-full text-foreground 
                custom-bg'
                            aria-label={label}>
                            <span className='relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
                                {getIcon(icon)}
                                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                                    {label}
                                </span>
                            </span>

                        </NavLink>
                    </div>

                    :

                    <div
                        className='w-fit cursor-pointer z-50'
                    >
                        <NavLink
                            variants={item}
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            name={label}
                            className='flex items-center justify-center rounded-full text-foreground 
                custom-bg'
                            aria-label={label}>
                            <span className='relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent'>
                                {getIcon(icon)}
                                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap", labelDirection === "left" ? "right-full left-auto" : "")}>
                                    {label}
                                </span>
                            </span>

                        </NavLink>
                    </div>
            }}
        </ResponsiveContent>
    )
}

export default NavButton
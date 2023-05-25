import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calcOpacity = ypos => {
        const LIMIT_LOW = 300;
        const LIMIT_HIGH = 600;
        if (ypos < LIMIT_LOW) return 0
        if (ypos > LIMIT_HIGH) return 1
        else return ((ypos - LIMIT_LOW) / (LIMIT_HIGH - LIMIT_LOW))
    }

    return (
        <nav style={{opacity:(calcOpacity(scrollPosition))}}>
            <h1>LappyFind</h1>
        </nav>
    )
}
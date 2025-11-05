import { useState, useEffect } from 'react'; 
import { Sun, Moon } from 'lucide-react';
import {cn} from '@/lib/utils'

export const ThemeToggle = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme==="dark"){
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
        else{
            setIsDark(false);
            document.documentElement.classList.add("light");
        }
    })

    const ToggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    }

    return (
        <button onClick={ToggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}> 
            {isDark ? (
            <Sun className="h-6 w-6 stroke-yellow-300" />
            ) : (
            <Moon className="h-6 w-6 stroke-blue-900" />
            )}

        </button>
    );
}


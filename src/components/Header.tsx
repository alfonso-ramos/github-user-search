import { useState, useEffect } from "react"

export default function Header() {
    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme])
    return (
        <>
            <header className="flex justify-around items-center my-9">
                <h1 className="text-2xl font-bold dark:text-white">Devfinder</h1>
                <button onClick={changeTheme} className="flex gap-4">
                    <p className="uppercase text-sm font-bold items-center text-secondaryText dark:text-white">{theme === 'dark' ? 'light' : 'dark'}</p>
                    <img className="size-5" src={theme === 'dark' ? "../src/assets/icon-sun.svg" : "../src/assets/icon-moon.svg"} alt="" />
                </button>
            </header>
        </>
    )
}

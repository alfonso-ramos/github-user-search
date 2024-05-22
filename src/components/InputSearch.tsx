import { ChangeEvent, FormEvent, useState } from "react"


type InputSearchProps = {
    notFound: boolean,
    fetchGithubUser: (user: string) => Promise<void>
}

export default function InputSearch({notFound, fetchGithubUser} : InputSearchProps) {
    const [search, setSearch] = useState<string>('')


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchGithubUser(search)
    }
    return (
        <form onSubmit={handleSubmit} className="text-sm flex flex-row justify-between gap-2 px-4 mx-6 min-w-[327px] max-w-[730px] h-16 shadow-2xl items-center rounded-lg mb-4 md:mx-auto dark:bg-softDark">
            <div className="flex gap-4 items-center">
                <img className="size-6" src="../src/assets/icon-search.svg" alt="" />
                <label htmlFor="user">
                    <input
                        className="dark:bg-softDark dark:text-softWhite w-[184px] overflow-auto"
                        placeholder='Search Github username...'
                        id="user"
                        name="user"
                        type="text"
                        value={search}
                        onChange={handleChange}

                    />
                </label>
            </div>


            <div className="flex items-center gap-6">
                <p className="text-[#F74646] font-bold">
                    {notFound ? "not found" : ""}
                </p>
                <input
                    className="w-20 bg-primary hover:cursor-pointer hover:bg-[#60ABFF] transition ease-in-out text-white font-bold rounded-lg py-3 text-center"
                    type="submit"
                    value="Search"
                />

            </div>
        </form>
    )
}

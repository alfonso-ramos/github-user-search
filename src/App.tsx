import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useSearchUser } from "./hooks/useSearchUser"
import { formatJoinedDate } from './helpers/formatJoindedDate';

function App() {
  const [search, setSearch] = useState<string>('')


  const { fetchGithubUser, loading, notFound, user } = useSearchUser();

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchGithubUser(search)
  }


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

    <div>
      <header className="flex justify-around items-center my-9">
        <h1 className="text-2xl font-bold dark:text-white">Devfinder</h1>
        <button onClick={changeTheme} className="flex gap-4">
          <p className="uppercase text-sm font-bold items-center text-secondaryText">{theme === 'dark' ? 'light' : 'dark'}</p>
          <img className="size-5" src={theme === 'dark' ? "../src/assets/icon-sun.svg" : "../src/assets/icon-moon.svg"} alt="" />
        </button>
      </header>



      <div className="text-sm flex gap-2 px-4 mx-auto min-w-[327px] max-w-[730px] h-16 shadow-2xl items-center rounded-lg mb-4">
        <div ></div>
        <form className="flex justify-between items-center" onSubmit={handleSubmit} >
          <img className="size-6" src="../src/assets/icon-search.svg" alt="" />
          <label className="flex" htmlFor="user">
            <input
              placeholder='Search Github username...'
              id="user"
              name="user"
              type="text"
              value={search}
              onChange={handleChange}

            />
          </label>
          <div className="flex items-center gap-6">
            <p className="text-[#F74646]">
              {notFound ? "not found" : ""}
            </p>
            <input
              className="w-20 bg-primary text-white font-bold rounded-lg py-3 text-center"
              type="submit"
              value="Search"
            />

          </div>
        </form>

      </div>

      <div className="bg-white dark:bg-softDark rounded-lg px-6 pt-8 pb-10 max-w-[327px] shadow-2xl mx-auto">
        <div>
          <img className="size-[70px] rounded-full" src={user.avatar_url} alt="" />
          <div>
            <div>
              <p className="font-bold text-base dark:text-white">{user.name}</p>
              <p className="text-xs text-primary ">@{user.login}</p>
            </div>
            <div>
              <p className="text-secondaryText text-sm dark:text-white">{formatJoinedDate(user.created_at)}</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-secondaryText dark:text-white">
          {user.bio ? user.bio : "No bio yet"}
        </p>
        <div className="flex justify-around text-center bg-softGray rounded-lg p-4 my-6 dark:text-white dark:bg-darkPrimary">
          <div className="">
            <p className="text-xs text-primaryActive dark:text-white">Repos</p>
            <p className="font-bold">{user.public_repos}</p>
          </div>
          <div>
            <p className="text-xs text-primaryActive dark:text-white">followers</p>
            <p className="font-bold">{user.followers}</p>
          </div>
          <div>
            <p className="text-xs text-primaryActive dark:text-white">Following</p>
            <p className="font-bold">{user.following}</p>
          </div>
        </div>

        <div>
          <div>
            <div className="flex gap-5 mb-4">
              <img className="h-5" src="../src/assets/icon-location.svg" alt="" />
              <p>{user.location ? `${user.location}` : "Not available"}</p>
            </div>
            <div className="flex gap-5 mb-4">
              <img className="h-5" src="../src/assets/icon-website.svg" alt="" />
              <p>{user.blog ? `${user.blog}` : "Not available"}</p>
            </div>
            <div className="flex gap-5 mb-4">
              <img className="h-5" src="../src/assets/icon-twitter.svg" alt="" />
              <p>{user.twitter_username ? `${user.twitter_username}` : "Not available"}</p>
            </div>
            <div className="flex gap-5 mb-4">
              <svg className={user.company === null ? "fill-secondaryText" : "fill-primaryActive"} height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g ><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" /></g></svg>
              <p className={user.company === null ? "text-secondaryText" : "text-primaryActive"}>{user.company ? `@${user.company}` : "Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

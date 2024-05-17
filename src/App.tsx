import { useEffect, useState } from "react"

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
  }

  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    }else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <div>
      <header className="flex justify-around items-center">
        <h1 className="text-2xl font-bold">Devfinder</h1>
        <button onClick={changeTheme} className="flex gap-4">
          <p className="uppercase text-sm font-bold items-center text-secondaryText">dark</p>
          <img className="size-5" src="../src/assets/icon-moon.svg" alt="" />
        </button>
      </header>



      <div className="flex max-w-[327px] shadow-2xl items-center">
        <img className="size-6" src="../src/assets/icon-search.svg" alt="" />
        <input value='Search Github username...' type="text" />
        <button className="w-20 bg-primary text-white font-bold rounded-lg py-3 px-4 text-center">
          Search
        </button>
      </div>

      <div className="bg-white rounded-lg px-6 pt-8 pb-10 max-w-[327px] shadow-2xl">
        <div>
          <img src="../src/assets/" alt="" />
          <div>
            <div>
              <p className="font-bold text-base">The Octocat</p>
              <p className="text-xs text-primary">@octocat</p>
            </div>
            <div>
              <p className="text-secondaryText text-sm">Joined 25 Jan 2011</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-secondaryText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
        <div className="flex justify-around text-center bg-softGray rounded-lg p-4 my-6">
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>followers</p>
            <p>3938</p>
          </div>
          <div>
            <p>Following</p>
            <p>0</p>
          </div>
        </div>


        <div>
          <div>
            <div className="flex gap-5 mb-4">
              <img src="../src/assets/icon-location.svg" alt="" />
              <p>San Franciso</p>
            </div>
            <div className="flex gap-5 mb-4">
              <img src="../src/assets/icon-website.svg" alt="" />
              <p>https://github.blog</p>
            </div>
            <div className="flex gap-5 mb-4">
              <img src="../src/assets/icon-twitter.svg" alt="" />
              <p>Not Available</p>
            </div>
            <div className="flex gap-5 mb-4">
              <img src="../src/assets/icon-company.svg" alt="" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </div>






    </div>
  )
}

export default App

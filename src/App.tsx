function App() {

  return (
    <div className="">
      <header className="flex justify-around">
        <h1>Devfinder</h1>
        <div>
          <p className="uppercase">dark</p>
          <img src="" alt="" />
        </div>
      </header>
      <div className="flex">
        <img className="size-6" src="../src/assets/icon-search.svg" alt="" />
        <input value='Search Github username...' type="text" />
        <input type="submit" />
      </div>

      <div className="bg-white rounded-lg px-6 pt-8 pb-10">

        <div className="">
          <img src="../src/assets/" alt="" />
          <div>
            <div>
              <p>The Octocat</p>
              <p>@octocat</p>
            </div>
            <div>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
        <div className="flex justify-around text-center bg-softGray rounded-lg p-4">
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

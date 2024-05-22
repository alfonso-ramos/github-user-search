import UserDisplay from "./components/UserDisplay";
import { useSearchUser } from "./hooks/useSearchUser"
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";

function App() {
  const { fetchGithubUser, loading, notFound, user } = useSearchUser();

  return (
    <>
      <Header />
      <InputSearch
        notFound={notFound}
        fetchGithubUser={fetchGithubUser}
      />
      <UserDisplay
        loading={loading}
        user={user}
      />
    </>
  )
}

export default App

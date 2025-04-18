import { useState } from "react"
import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"


function App() {
  const [coins, setCoins] = useState(0);

  const handleCoins = coin => {
    setCoins(coin);
  }

  return (
    <main className="w-11/12 mx-auto">
      <Header coins={coins}></Header>
      <Banner handleCoins={handleCoins}></Banner>
    </main>
  )
}

export default App

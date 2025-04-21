import { useState } from "react"
import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import Scholars from "./components/scholars/scholars";
import Footer from "./components/footer/Footer";


function App() {
  const [coins, setCoins] = useState(0);

  const handleCoins = coin => {
    setCoins(coins+coin);
  }

  return (
    <div>
      <main className="w-11/12 mx-auto">
        <Header coins={coins}></Header>
        <Banner handleCoins={handleCoins}></Banner>
        <Scholars coins={coins}></Scholars>
      </main>
        <Footer></Footer>
    </div>
  )
}

export default App

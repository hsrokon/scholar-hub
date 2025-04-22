import { useState } from "react"
import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import Scholars from "./components/scholars/Scholars";
import Footer from "./components/footer/Footer";
import { ToastContainer, Bounce, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coins, setCoins] = useState(0);

  const handleCoins = coin => {
    setCoins(coins+coin);
    toast.success(`${coin} credit claimed!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <div>
      <main className="w-11/12 mx-auto">
        <Header coins={coins}></Header>
        <Banner handleCoins={handleCoins}></Banner>
        <Scholars coins={coins} setCoins={setCoins}></Scholars>
      </main>
        <Footer></Footer>
        <ToastContainer toastClassName="!max-w-[80vw] !break-words" />
    </div>
  )
}

export default App

import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import DeadlineToday from "./components/DeadlineToday"
import DeadlineBaxter from "./components/DeadlineBaxter"
import DeadlineDelivery from "./components/DeadlineDelivery"
import CopyToClipboardPopUp from "./components/CopyToClipBoardPopUp"
import { createContext, useState } from "react"

const AppContext = createContext()

function App() {
    const [showBanner, setShowBanner] = useState(false)

    function handleShowBanner() {
        setShowBanner(true)
        setTimeout(() => {
            setShowBanner(false)
        }, 2000)
        
    }

    return (
        <AppContext.Provider value={{handleShowBanner}}>
            <div className="h-svh flex flex-col">
                {
                    showBanner && <CopyToClipboardPopUp />
                }
                <Header>
                    <h1 className="text-2xl">Medimo deadlines</h1>
                </Header>
                <MainContent>
                    <DeadlineToday />
                    <DeadlineBaxter />
                    <DeadlineDelivery /> 
                </MainContent>
                
                <Footer>
                    <small>Hook88 &copy; 2024 All rights reserved</small>
                </Footer>
            </div>
        </AppContext.Provider>
    )
    
}

export default App

export { AppContext }
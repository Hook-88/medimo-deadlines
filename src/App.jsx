import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import DeadlineToday from "./components/DeadlineToday"
import DeadlineBaxter from "./components/DeadlineBaxter"
import DeadlineDelivery from "./components/DeadlineDelivery"

function App() {

    return (
        <div className="h-svh flex flex-col">
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
    )
    
}

export default App

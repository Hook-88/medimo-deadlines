import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import DeadlineToday from "./components/DeadlineToday"
import DeadlineBaxter from "./components/DeadlineBaxter"

function App() {

    return (
        <div className="h-svh flex flex-col">
            <Header>
                <h1 className="text-2xl">Medimo deadlines</h1>
            </Header>
            <MainContent>
                <DeadlineToday />
                <DeadlineBaxter />
            </MainContent>
            <Footer>
                <small>&copy; Copyright Sheit</small>
            </Footer>
        </div>
    )
    
}

export default App

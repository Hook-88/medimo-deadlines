import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() {

    return (
        <div className="h-svh flex flex-col">
            <Header>
                <h1 className="text-2xl">Medimo deadlines</h1>
            </Header>
            <MainContent>
                <h1>here goes main content</h1>
            </MainContent>
            <Footer>
                <small>&copy; Copyright Sheit</small>
            </Footer>
        </div>
    )
    
}

export default App

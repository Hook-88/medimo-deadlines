import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Card from "./components/Card"

function App() {

    return (
        <div className="h-svh flex flex-col">
            <Header>
                <h1 className="text-2xl">Medimo deadlines</h1>
            </Header>
            <MainContent>
                <Card>
                    <h1>here goes deadline today</h1>
                </Card>
            </MainContent>
            <Footer>
                <small>&copy; Copyright Sheit</small>
            </Footer>
        </div>
    )
    
}

export default App

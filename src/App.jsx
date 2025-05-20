import "./App.css";
import { Chatbot } from "./components/Chatbot";

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">EmpleaBot</h1>
                <p className="app-subtitle">
                    Te ayudo a encontrar a quien buscas
                </p>
            </header>
            <div className="chat-wrapper">
                <Chatbot />
            </div>
        </div>
    );
}

export default App;

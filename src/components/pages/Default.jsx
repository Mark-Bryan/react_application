import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionnaire from "./components/pages/Questionnaire";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/:id" element={<Questionnaire/>}/>
            </Routes>
        </Router>
    )
}



export default App;
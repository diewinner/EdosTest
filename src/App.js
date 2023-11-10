import {NavigationMenu} from "./components/navigationMenu";
import {MainContent} from "./components/mainContent";
import '../src/assets/style/app.scss'

function App() {
    return (
        <div className="app">
            <div className={'app__container'}>
                <NavigationMenu/>
                <MainContent/>
            </div>

        </div>
    );
}

export default App;

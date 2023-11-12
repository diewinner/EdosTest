import {NavigationMenu} from "./components/NavigationMenu";
import {MainContent} from "./components/MainContent";
import '../src/assets/style/app.scss'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const tab = useSelector(state => state.navigate.navigate)

    return (
        <div className="app">
            <div className={'app__container'}>
                <NavigationMenu dispatch={dispatch} tab={tab}/>
                <MainContent tab={tab}/>
            </div>
        </div>
    );
}

export default App;

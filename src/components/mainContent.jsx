import {FilterSvg} from "../assets/img/svg/Filter";
import {SettingTableSvg} from "../assets/img/svg/SettingTable";
import '../assets/style/mainContent.scss'
import {CustomTable} from "./table";
export const MainContent = () => {
    return (
        <div className={'main_container'}>
            <div className={'main_header'}>
                <h4>Учебные сессии</h4>
                <div className={'main_header__btns'}>
                    <input className={'main_header__btns__input'} type={"text"} placeholder={'Поиск'}/>
                    <div className={'main_header__btns__item'}>
                        <FilterSvg/>
                    </div>
                    <div className={'main_header__btns__item'}>
                        <SettingTableSvg/>
                    </div>
                    <a href={'#'} className={'main_header__btns__create'}>
                        Создать
                    </a>
                </div>
            </div>
            <CustomTable/>
        </div>)
}
import {mockNavigationItems} from "../global/mockNavigationItems";
import {LogoSvg} from "../assets/img/svg/logo";
import {RuSvg} from "../assets/img/svg/RU";
import {ChevronRightSvg} from "../assets/img/svg/chevronRight";
import {LogOutSvg} from "../assets/img/svg/logOut";
import {addCustomerAction} from "../global/store/navigationReducer";
import '../assets/style/navigationMenu.scss'


export const NavigationMenu = ({dispatch, tab}) => {
    let avatar = null;
    const userName = 'Барнаби Мармадюк'

    function chooseAvatar(userName) {
        if (avatar) {
            return avatar;
        }
        return userName.split(' ').map(e => e.slice(0, 1).toUpperCase()).join('')
    }

    return (
        <div className={'menu_container'}>
            <div className={'menu_logo_nav_wrapper'}>
                <div className={'menu_logo'}>
                    <LogoSvg/>
                    <span>Сим Центр</span>
                </div>
                <nav className={'menu_navigation_container'}>
                    <ul>
                        {mockNavigationItems.map(e => (
                            <li className={tab === e.name ? 'menu_navigation_item_active padding_around' : 'menu_navigation_item padding_around'}
                                onClick={() => dispatch(addCustomerAction(e.name))}>
                                {e.svg}
                                <span>{e.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={'menu_user_log_wrapper'}>
                <div className={'menu_user_card padding_around'}>
                    <div className={'menu_user_card__text'}>
                        <span className={'menu_user_card__text__name'}>{userName}</span>
                        <span className={'menu_user_card__text__worker'}>Преподаватель</span>
                    </div>
                    <div className={'menu_user_card__avatar'}>
                        {chooseAvatar(userName)}
                    </div>
                </div>
                <div className={'menu_log_out padding_around'}>
                    <LogOutSvg/>
                    <div>Выйти</div>
                </div>
                <div className={'menu_choose_language padding_around'}>
                    <div className={'menu_choose_language__extra'}>
                        <RuSvg/>
                        <span>Русский</span>
                    </div>
                    <ChevronRightSvg/>
                </div>
                <div className={'menu_version'}>
                    Версия 1.02
                </div>
            </div>
        </div>)
}
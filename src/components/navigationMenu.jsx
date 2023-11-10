import {CalendarBlankSvg} from "../assets/img/svg/CalendarBlank";
import {LogoSvg} from "../assets/img/svg/logo";
import '../assets/style/navigationMenu.scss'
import {GraduationCapSvg} from "../assets/img/svg/GraduationCap";
import {DoorSvg} from "../assets/img/svg/Door";
import {StudentSvg} from "../assets/img/svg/Student";
import {UserListSvg} from "../assets/img/svg/UserList";
import {VideoCameraSvg} from "../assets/img/svg/VideoCamera";
import {SettingsIconSvg} from "../assets/img/svg/SettingsIcon";
import {ArchiveIcon} from "../assets/img/svg/ArchiveIcon";
import {RuSvg} from "../assets/img/svg/RU";
import {ChevronRightSvg} from "../assets/img/svg/chevronRight";
import {LogOutSvg} from "../assets/img/svg/logOut";

export const NavigationMenu = () => {
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
                        <li className={'menu_navigation_item padding_around'}>
                            <CalendarBlankSvg/>
                            <div>Расписание</div>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <GraduationCapSvg/>
                            <span>Учебные сессии</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <DoorSvg/>
                            <span>Список комнат</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <StudentSvg/>
                            <span>Пользователи</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <UserListSvg/>
                            <span>Учебные группы</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <VideoCameraSvg/>
                            <span>Список устройств</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <SettingsIconSvg/>
                            <span>Настройки системы</span>
                        </li>
                        <li className={'menu_navigation_item padding_around'}>
                            <ArchiveIcon/>
                            <span>Архив</span>
                        </li>
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
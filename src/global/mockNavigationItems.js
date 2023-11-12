import {CalendarBlankSvg} from "../assets/img/svg/CalendarBlank";
import {GraduationCapSvg} from "../assets/img/svg/GraduationCap";
import {DoorSvg} from "../assets/img/svg/Door";
import {StudentSvg} from "../assets/img/svg/Student";
import {UserListSvg} from "../assets/img/svg/UserList";
import {VideoCameraSvg} from "../assets/img/svg/VideoCamera";
import {SettingsIconSvg} from "../assets/img/svg/SettingsIcon";
import {ArchiveIcon} from "../assets/img/svg/ArchiveIcon";

export const mockNavigationItems = [
    {
        name:'Расписание',
        svg:<CalendarBlankSvg/>
    },
    {
        name:'Учебные сессии',
        svg:<GraduationCapSvg/>
    },
    {
        name:'Список комнат',
        svg:<DoorSvg/>
    },
    {
        name:'Пользователи',
        svg:<StudentSvg/>
    },
    {
        name:'Учебные группы',
        svg:<UserListSvg/>
    },
    {
        name:'Список устройств',
        svg:<VideoCameraSvg/>
    },
    {
        name:'Настройки системы',
        svg:<SettingsIconSvg/>
    },
    {
        name:'Архив',
        svg:<ArchiveIcon/>
    },
]
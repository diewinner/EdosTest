import {createColumnHelper} from "@tanstack/react-table";
import {MockPagination} from "../components/MockPagination";
import ArrowDown from "../assets/img/svg/ArrowDown";

const columnHelper = createColumnHelper()

function checkStatus(status) {
    if (status === 'Запланировано') {
        return 'custom_table_status__plan'
    } else if (status === 'Идет') {
        return 'custom_table_status__going'
    } else if (status === 'Завершено') {
        return 'custom_table_status__complete'
    }
}

export const columns = [
    columnHelper.accessor(row => row.date, {
        id: 'date',
        cell: info => <div className={'custom_table_item__value__date'}>{info.getValue()}</div>,
        header: () =>
            <div className={'custom_table_header_filter'}>
                <span>Дата и время</span>
                <ArrowDown/>
            </div>,
        footer: () => <div className={'custom_table_item__footer'}><MockPagination/></div>,
    }),
    columnHelper.accessor(row => row.status, {
        id: 'status',
        cell: info => <span className={checkStatus(info.getValue())}>{info.getValue()}</span>,
        header: () => <span>Статус</span>,
        footer: () => <></>,

    }),
    columnHelper.accessor('nameStudy', {
        header: () => <span>Название учебного модуля</span>,
        cell: info => <div className={'custom_table_item__value__name'}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('typeSession', {
        header: () => <span>Тип сессии</span>,
        cell: info => <div className={'custom_table_item__value'}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('room', {
        header: () => <span>Комната</span>,
        cell: info => <div className={'custom_table_item__value__room'}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('group', {
        header: () => <span>Группа</span>,
        cell: info => <div className={'custom_table_item__value__group'}>{info.getValue()}</div>,
    }),
]


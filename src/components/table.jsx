import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table'
import {mockItems} from '../global/mockItems'
import {useState} from "react";
import '../assets/style/customTable.scss'
import {MockPagination} from "./mockPagination";

function checkStatus(status) {
    if (status === 'Запланировано') {
        return 'custom_table_status__plan'
    } else if (status === 'Идет') {
        return 'custom_table_status__going'
    } else if (status === 'Завершено') {
        return 'custom_table_status__complete'
    }

}

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor(row => row.date, {
        id: 'date',
        cell: info => <span className={'custom_table_item__value__date'}>{info.getValue()}</span>,
        header: () => <span>Дата и время</span>,
        footer: () => <div className={'custom_table_item__footer'}><MockPagination/></div>,
    }),
    columnHelper.accessor(row => row.status, {
        id: 'status',
        cell: info => <span className={checkStatus(info.getValue())}>{info.getValue()}</span>,
        header: () => <span>Статус</span>,
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
        cell: info => <div className={'custom_table_item__value'}>{info.getValue()}</div>,
    }),
]

export const CustomTable = () => {

    const [data, setData] = useState(() => [...mockItems])


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className={'table_container'}>
            <table>
                <thead className={'custom_table_item__gray'}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} >
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className={row.id % 2 === 1 ? 'custom_table_item__gray' : 'custom_table_item'}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
                <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <tr key={footerGroup.id} className={'custom_table_item__gray'}>
                        {footerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </tfoot>
            </table>
        </div>
    )
}
import { ColumnsType } from "antd/lib/table";

export const standardColumns: ColumnsType<any> = [
    {
        title: 'Time Created',
        dataIndex: 'timeCreated',
        key: 'timeCreated',
        render: (timeCreated: string) => {
            const date = new Date(timeCreated)
            return date.toDateString() + " " + date.toTimeString();
        },
        sorter: (a: any,b: any): any => new Date(a.timeCreated).getTime() - new Date(b.timeCreated).getTime()
    }
]
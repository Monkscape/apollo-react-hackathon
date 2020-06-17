import { ColumnsType } from "antd/lib/table";

export const standardColumns: ColumnsType<any> = [
    {
        title: 'Time Created',
        dataIndex: 'timeCreated',
        key: 'timeCreated',
        render: (timeCreated: string) => {console.log(timeCreated); return new Date(timeCreated).toISOString()},
        sorter: (a: any,b: any): any => new Date(a.timeCreated) < new Date(b.timeCreated)
    }
]
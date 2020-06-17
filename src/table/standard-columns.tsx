export const standardColumns = [
    {
        title: 'Date Created',
        dataIndex: 'dateCreated',
        key: 'dateCreated',
        sorter: (a: any,b: any) => a.dateCreated - b.dateCreated
    },
    {
        title: 'Time Created',
        dataIndex: 'timeCreated',
        key: 'timeCreated',
        sorter: (a: any,b: any) => a.timeCreated - b.timeCreated
    }
]
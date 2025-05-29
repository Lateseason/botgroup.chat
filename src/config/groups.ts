//这里配置群聊的信息
export interface Group {
    id: string;
    name: string;
    description: string;
    members: string[];
}

export const groups: Group[] = [
    {
        id: 'group1',
        name: '小石榴粉丝群',
        description: '小石榴粉丝群',
        members: ['ai1', 'ai2', 'ai3']
    }
];

import { NewsItem, ListItem, User, Ask } from "@/api";

export const state = {
    news: [] as NewsItem[],
    list: [] as ListItem[],
    user: {} as User,
    ask: [] as Ask[]
}

// 가장 최상위로 올라가는 state 네이밍이다. 커뮤니티 레벨에서 보편화 네이밍으로 쓰이는것 같다.
export type RootState = typeof state;
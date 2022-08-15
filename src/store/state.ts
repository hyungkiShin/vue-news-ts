import { ListItem, User } from "@/api";

export const state = {
    // news: [] as NewsItem[],
    // ask: [] as Ask[]
    item: [] as ListItem[],
    user: {} as User,
}

// 가장 최상위로 올라가는 state 네이밍이다. 커뮤니티 레벨에서 보편화 네이밍으로 쓰이는것 같다.
export type RootState = typeof state;
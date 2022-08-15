import { CommitOptions, DispatchOptions, Store } from 'vuex'
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations'
import { RootState } from './state'

type MyMutations = {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
};

type MyActions = {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
}

type MyGetters = {
    getters: {
        // getters 의 키 (속성함수의 이름) : 타입 (속성 함수의 반환 타입)
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
};

export type MyStore = Omit<Store<RootState>, "commit" | "dispatch" | "getters"> &
    MyMutations & MyActions & MyGetters;
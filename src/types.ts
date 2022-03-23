import 'react-redux';
import {StateType} from 'typesafe-actions';

export interface RawTodo {
    id: string,
    name: string,
    value: string
}



export type RootState = StateType<typeof import('./rootReducer').default>;

declare module 'react-redux' {
  export type EqualityFnType<TSelected> = (
    left: TSelected,
    right: TSelected,
  ) => boolean;

  export function useSelector<TSelected>(
    selector: (state: RootState) => TSelected,
    equalityFn?: EqualityFnType<TSelected>,
  ): TSelected;
}

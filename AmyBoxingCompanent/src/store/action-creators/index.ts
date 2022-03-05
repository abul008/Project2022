import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as TraningActionCreators from './traning'
import * as BookActonCreators from "./book"

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...TraningActionCreators,
    ...BookActonCreators
}
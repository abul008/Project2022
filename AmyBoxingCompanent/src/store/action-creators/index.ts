import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as TraningActionCreators from './traning'
import * as BookActonCreators from "./book"
import * as CaruselActonCreators from "./carusel";

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...TraningActionCreators,
    ...BookActonCreators,
    ...CaruselActonCreators
}
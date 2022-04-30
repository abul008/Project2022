import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as TraningActionCreators from './traning'
import * as BookActonCreators from "./book"
import * as HomeActonCreators from "./home";
import * as TableActionCreators from "./table";

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...TraningActionCreators,
    ...BookActonCreators,
    ...HomeActonCreators,
    ...TableActionCreators
}
import * as UserActionCreators from './user'
import * as BookActonCreators from "./book"
import * as HomeActonCreators from "./home";
import * as TableActionCreators from "./table";

export default {
    ...UserActionCreators,
    ...BookActonCreators,
    ...HomeActonCreators,
    ...TableActionCreators
}
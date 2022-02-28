import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as TraningActionCreators from './traning'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...TraningActionCreators
}
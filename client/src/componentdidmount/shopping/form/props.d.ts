import { CardShopList } from '../../../../types/index'

export default interface PropTypes {
    names: string
    lastname: string
    email: string
    phone: string
    message: string
    order: CardShopList[]
}
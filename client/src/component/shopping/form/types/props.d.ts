import { CardShopList } from '../../../../custom_types/index'
import React from 'react'

export default  interface Props {
    data:CardShopList[],
    clossClick:(event: React.MouseEvent<HTMLButtonElement>) => void,
    open: boolean
  }
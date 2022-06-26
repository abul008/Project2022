import React from "react"
import { Discounticon } from "../../cssatributes/cssicons"
import Props from './types/props'

export const Discount: React.FC<Props> = ({discount}) => {

  if(!discount) return null

  return (
    <Discounticon>
      <span>{discount }%</span>
    </Discounticon>
  )
}
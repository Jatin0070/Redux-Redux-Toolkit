import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordered,restock } from './cakeSlice'
const CakeView = () => {
  const nomOfcakes= useSelector((state)=>state.cake.numOfCake)
  const dispatch= useDispatch()
  return (
    <div>
      <h2>Number Of Cakes-{nomOfcakes}</h2>
      <button onClick={()=>dispatch(ordered())}>order cake</button>
      <button onClick={()=>dispatch(restock(2))}>restock cake</button>
    </div>
  )
}

export default CakeView

import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordered,restock } from './icecreamSlice'
const IceView = () => {
  const numOfIce=useSelector((state)=>state.ice.numOfIceCream)
  const dispatch= useDispatch()
  return (
    <div>
      <h2>Number Of icecream-{numOfIce}</h2>
      <button onClick={()=>dispatch(ordered())}>order icecream</button>
      <button onClick={()=>dispatch(restock(2))}>restock icecream</button>
    </div>
  )
}

export default IceView

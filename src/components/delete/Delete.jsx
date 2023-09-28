import { useDispatch, useSelector } from "react-redux"
import {deleted} from '../../redux/crudSlice'
import {MdDelete} from 'react-icons/md';


function Delete({index}) {
    const {data} = useSelector(s=>s)
    const dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(deleted(index))} className="btn btn-outline btn-error sm:hidden">Delete</button>
      <button onClick={()=>dispatch(deleted(index))} className="btn btn-outline btn-error hidden sm:flex sm:btn-sm  "><MdDelete/></button>
    </>
  )
}

export default Delete

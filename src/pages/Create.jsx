import { useDispatch, useSelector } from "react-redux"
import {create} from '../redux/crudSlice'
import { useRef } from "react"
import { Form, Link , useNavigate} from "react-router-dom"
import {FaRightToBracket} from 'react-icons/fa6'


function Create() {
  const dispatch = useDispatch()
  const {data} = useSelector(s=>s)
  const name = useRef()
  const email = useRef()
  const navidate = useNavigate()
  const onAdd = ()=>{
    dispatch(create({name:name.current.value, email:email.current.value, id:data.users[data.users.length - 1].id + 1}))
    navidate('/')
  }
  return (
    <div>
      <div className="create-form flex justify-center items-center flex-col  min-h-[100vh] m-auto">
        <Form className="flex flex-col gap-7">
        <div className="justify-start ml-auto ">
        {/* <Link to='/' className="text-3xl ml-auto">exit</Link> */}
        </div>

          <h1 className="text-4xl mt-9 text-success font-bold sm:text-2xl">
            Create User
          </h1>

          <label className="flex flex-col gap-3">
            <span>User name:</span>
            <input
            ref={name}
              type="text"
              placeholder="name"
              className="input input-bordered input-success w-96 sm:input-sm sm:w-56"
              minLength={5}
            />
          
          </label>

          <label className="flex flex-col gap-3">
            <span>User email</span>
            <input
            ref={email}
              type="email"
              placeholder="email"
              className="input input-bordered input-success w-96 sm:input-sm sm:w-56"
            />
          </label>

          <button type="submit"  onClick={onAdd} className="btn btn-success">Create</button>
          <button onClick={()=>navidate('/')} className="btn btn-success"><FaRightToBracket/></button>
        </Form>
      </div>
    </div>
  
  )
}

export default Create

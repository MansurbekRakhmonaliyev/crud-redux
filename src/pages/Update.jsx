import { useSelector } from "react-redux";
import { Form, Link, useParams , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {update} from '../redux/crudSlice'
import {FaRightToBracket} from 'react-icons/fa6'

import { useRef } from "react";
function Update() {
    const {id} = useParams()
    const {data} = useSelector(s=>s)
    const name = useRef()
    const email = useRef()
    const item = data.users[id]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onUpdate = (e)=>{
        e.preventDefault()
        dispatch(update({name:name.current.value, email:email.current.value, index:id}))
        navigate('/')
    }
  return (
    <div>
      <div className="create-form flex justify-center items-center flex-col  min-h-[100vh] m-auto">
        <Form  className="flex flex-col gap-7">
        <div className="justify-start ml-auto ">
        {/* <Link to='/' className="text-3xl ml-auto">exit</Link> */}
        </div>

          <h1 className="text-4xl mt-9 text-warning font-bold sm:text-2xl">
            Update User
          </h1>

          <label className="flex flex-col gap-3">
            <span>Update name:</span>
            <input
              ref={name}
              type="text"
              placeholder="name"
              className="input input-bordered input-warning w-96 sm:input-sm sm:w-56"
              minLength={4}
              defaultValue={item.name}
            />
          
          </label>

          <label className="flex flex-col gap-3">
            <span>Update email</span>
            <input
              ref={email}
              type="email"
              placeholder="number"
              className="input input-bordered input-warning w-96 sm:input-sm sm:w-56"
              defaultValue={item.email}
            />
          </label>

          <button onClick={onUpdate} type='submit' className="btn btn-warning">update</button>
          <button onClick={()=>navigate('/')} className="btn btn-warning"><FaRightToBracket/></button>
        </Form>
      </div>
    </div>
  );
}

export default Update;

import { useSelector } from "react-redux";
import { Form, Link, useParams , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {update} from '../redux/crudSlice'
import { useRef } from "react";
import {FaRightToBracket} from 'react-icons/fa6'
function Read() {
    const {id} = useParams()
    const {data} = useSelector(s=>s)
    const item = data.users[id]
    const navigate = useNavigate()
    
  return (
    <div>
      <div className="create-form flex justify-center items-center flex-col  min-h-[100vh] m-auto">
        <Form  className="flex flex-col gap-7">
        <div className="justify-start ml-auto ">
        {/* <Link to='/' className="text-3xl ml-auto">exit</Link> */}
        </div>

          <h1 className="text-4xl mt-9 text-info font-bold sm:text-2xl">
            Read User Info
          </h1>

          <label className="flex flex-col gap-3">
            <span>User name:</span>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered input-info w-96 sm:input-sm sm:w-56"
              defaultValue={item.name}
              disabled
            />
          
          </label>

          <label className="flex flex-col gap-3">
            <span>User email</span>
            <input
              type="email"
              className="input input-bordered input-info w-96 sm:input-sm sm:w-56"
              defaultValue={item.email}
              disabled
            />
          </label>

          <button onClick={()=>navigate('/')} type='submit' className="btn btn-info"><FaRightToBracket/></button>
        </Form>
      </div>
    </div>
  );
}

export default Read;

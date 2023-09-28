import { useSelector } from "react-redux";
import Delete from "../delete/Delete";
import { Link } from "react-router-dom";
import {RxUpdate} from 'react-icons/rx';
import {CiRead} from 'react-icons/ci'


function List() {
    const {data} = useSelector(s=>s)
  return (
    <>
      {data.users.map((item, idx) => {
              const { id, name, email } = item;
              return (
                <tr key={id}>
                  <th>{idx + 1}</th>
                  <td>{name}</td>
                  <td className="sm:hidden">{email}</td>
                  <td className="flex gap-x-2">
                  <Link to={`/read/${idx}`} className="btn btn-outline btn-info hidden sm:flex sm:btn-sm"><CiRead/></Link>
                  <Link to={`/update/${idx}`} className="btn btn-outline btn-warning sm:hidden">Update</Link>
                  <Link to={`/update/${idx}`} className="btn btn-outline btn-warning hidden sm:flex sm:btn-sm"><RxUpdate/></Link>
                    <Delete index={idx}/>
                    
                  </td>
                </tr>
              );
            })}
    </>
  )
}

export default List

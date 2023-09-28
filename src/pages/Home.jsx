import { useSelector } from "react-redux";
import ModeBtn from "../components/mode/ModeBtn";
import Create from "./Create";
import { Link } from "react-router-dom";
import List from "../components/list/List";

function Home() {
    const { data } = useSelector((store) => store);
    return (
      <div className="text-2xl container-ms py-6 sm:px-4">
        <div className="flex justify-between">
        <h1 className="text-4xl sm:text-2xl">React Crud App with Redux</h1>
        <ModeBtn/>
        </div>
        <Link to={`/create/`} className="btn btn-success mt-6 ">Create</Link>
        
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th className="sm:hidden">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <List/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

export default Home

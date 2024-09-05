import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div>

      <div className="sidebar  border-2 border-solid ps-6 "  style={{ height: '80vh', width:"15vw" }}>
        <div className="pb-4 pt-9 font-semibold text-2xl">
          <Link to={"/createclient"}><h1>Add Client</h1></Link>
        </div>
        <div> 
          <h1>Mail Page</h1>
        </div>
        <div>
          <h1>Client List</h1>
        </div>
        <div className="text-bold  ">
        <button className="pt-64">Logout</button>
        </div>
        
      </div>
      
     
      </div>

    </div>

  )
}

export default Home
import { Cursor } from "mongoose"


const Nabvbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-3">News1440</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setcategory("technology")}>Technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setcategory("business")}>Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setcategory("health")}>Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setcategory("sports")}>Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setcategory("entertainment")}>Entertainment</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nabvbar

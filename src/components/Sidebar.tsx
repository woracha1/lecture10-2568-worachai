import { Link } from "react-router";
import { BsBox2HeartFill, BsPlusCircleFill } from "react-icons/bs";
export default function Sidebar() {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Note App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <BsBox2HeartFill />
                <span className="d-md-inline px-2">TodoListPage</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/randomuserpage"}
              >
                <BsPlusCircleFill />
                <span className="d-md-inline px-2">RandomUserPage</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

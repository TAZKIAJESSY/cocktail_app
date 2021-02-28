import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: 30,
        marginTop: 20,
      }}
    >
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "greenyellow" }}
        exact
        to="/"
      >
        Home PAge
      </NavLink>

      <NavLink
        activeStyle={{ fontWeight: "bold", color: "teal" }}
        exact
        to="/cocktail"
      >
        Cocktail Category Page
      </NavLink>
    </div>
  );
}

export default NavBar;

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List } from "./Category.styles";
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

export default Category;
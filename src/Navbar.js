import styled from "styled-components";
import navbar from "./Navbar.module.css";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background-color: white;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export default function Navbar(props) {
  const { cartCount } = props;

  return (
    <>
      <Nav color="cadetblue">
        <div className={navbar.title}>Movie App</div>
        <div className={navbar.cartContainer}>
          <CartIcon
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart icon"
          ></CartIcon>
          <CartCount show={true}>{cartCount}</CartCount>
        </div>
      </Nav>
    </>
  );
}

const styles = {
  nav: {
    width: "100%",
    height: "70px",
    backgroundColor: "cadetblue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginleft: "20px",
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: "48px",
    marginRight: "20px",
  },
  cartCount: {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: "12px",
  },
};

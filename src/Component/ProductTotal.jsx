import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const Total = () => {
  return (
    <footer>
      <hr />
      <div>
        <h5 className="cart-total">
          total <span>$2199.96</span>
        </h5>
      </div>
      <button className="btn btn-hipster">clear cart</button>
    </footer>
  );
};

export default Total;

import { Link } from "react-router-dom";

const SubscriptionCard = ({ price, contents, type, btn_text, Monthly }) => {
  const final_price = Monthly
    ? parseInt(price)
    : parseInt(price) - parseInt(price) * 0.1;

  return (
    <div className="card lg:w-96 bg-grey shadow-xl shadow-teal space-y-2 mx-2">
      <div className="px-2 space-y-2">
        <div className="text-center bg-black text-teal font-medium py-2 rounded-lg">
          {type}
        </div>
        <p className="font-medium text-base lg:text-xl text-center">Monthly</p>
        <p className="font-medium text-xl text-center">${final_price}</p>
        <hr />
        <p className="font-medium text-center">
          Yearly total cost: ${final_price * 12}
        </p>
        <hr />

        <div className="space-y-4 mt-4 p-3">{contents}</div>
      </div>
      <Link to={'/user-subscription'}><button className="bg-blue text-white w-full font-medium py-2 hover:bg-gray-950">
        {btn_text ? btn_text : "Take Subscription"}
      </button></Link>
    </div>
  );
};

export default SubscriptionCard;

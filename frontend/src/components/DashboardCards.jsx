import "./DashboardCards.css";
import {
  FaUsers,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function DashboardCards({ buyers = [] }) {
  const buyersCount = buyers.length;

  const emailCount = buyers.reduce(
    (total, buyer) => total + (buyer.emails?.length || 0),
    0
  );

  return (
    <section className="dashboard">

      <div className="dashboard-card">

        <div className="icon users">
          <FaUsers />
        </div>

        <div className="card-content">
          <h1>{buyersCount}</h1>
          <p>Total Buyers</p>
        </div>

      </div>

      <div className="dashboard-card">

        <div className="icon emails">
          <FaEnvelope />
        </div>

        <div className="card-content">
          <h1>{emailCount}</h1>
          <p>Email Addresses</p>
        </div>

      </div>

      <div className="dashboard-card">

        <div className="icon campaign">
          <FaPaperPlane />
        </div>

        <div className="card-content">
          <h1>{buyersCount > 0 ? "Ready" : "--"}</h1>
          <p>Email Campaign</p>
        </div>

      </div>

    </section>
  );
}

export default DashboardCards;
import "./BuyersTable.css";
import {
  FaGlobe,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaBuilding
} from "react-icons/fa";

function BuyersTable({ buyers = [] }) {

  if (buyers.length === 0) {
    return (
      <div className="empty-state">

        <FaBuilding className="empty-icon"/>

        <h2>No Buyers Found</h2>

        <p>
          Search for importers or buyers to view results here.
        </p>

      </div>
    );
  }

  return (

    <div className="buyers-wrapper">

      <table className="buyers-table">

        <thead>

          <tr>

            <th>#</th>

            <th>Company</th>

            <th>Website</th>

            <th>Email Addresses</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {

            buyers.map((buyer,index)=>{

              const emails=buyer.emails || [];

              const website=buyer.website || buyer.link;

              return(

                <tr key={index}>

                  <td>{index+1}</td>

                  <td>

                    <div className="company">

                      <div className="company-logo">

                        <FaBuilding/>

                      </div>

                      <div>

                        <h4>{buyer.title}</h4>

                      </div>

                    </div>

                  </td>

                  <td>

                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      className="visit-btn"
                    >

                      <FaGlobe/>

                      Visit

                    </a>

                  </td>

                  <td>

                    {

                      emails.length>0

                      ?

                      <div className="email-container">

                        {

                          emails.map((email,i)=>(

                            <span
                              key={i}
                              className="email-chip"
                            >

                              <FaEnvelope/>

                              {email}

                            </span>

                          ))

                        }

                      </div>

                      :

                      <span className="no-email">

                        No Email Found

                      </span>

                    }

                  </td>

                  <td>

                    {

                      emails.length>0

                      ?

                      <span className="badge success">

                        <FaCheckCircle/>

                        Found

                      </span>

                      :

                      <span className="badge danger">

                        <FaTimesCircle/>

                        Not Found

                      </span>

                    }

                  </td>

                </tr>

              )

            })

          }

        </tbody>

      </table>

    </div>

  );

}

export default BuyersTable;
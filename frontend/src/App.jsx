import { useState } from "react";

import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import SearchForm from "./components/SearchForm";
import BuyersTable from "./components/BuyersTable";
import UploadPDF from "./components/UploadPDF";
import Footer from "./components/Footer";

import API from "./services/api";

import "./App.css";

function App() {

  const [buyers,setBuyers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [sending,setSending]=useState(false);
  const [pdf,setPdf]=useState(null);

  const searchBuyers=async(keyword)=>{

    try{

      setLoading(true);

      const response=await API.get(
        `/search?keyword=${encodeURIComponent(keyword)}`
      );

      setBuyers(response.data);

    }
    catch(error){

      console.log(error);
      alert("Unable to search buyers");

    }
    finally{

      setLoading(false);

    }

  };

  const sendEmails=async()=>{

    if(!pdf){
      alert("Please upload PDF.");
      return;
    }

    try{

      setSending(true);

      const formData=new FormData();

      formData.append("pdf",pdf);

      const response=await API.post(
        "/send",
        formData,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );

      alert(
        `Emails Sent : ${response.data.sent}\nFailed : ${response.data.failed}`
      );

    }
    catch(error){

      console.log(error);
      alert("Unable to send emails");

    }
    finally{

      setSending(false);

    }

  };

  return(

   
  <div className="app">

    <Navbar />

    <DashboardCards buyers={buyers} />

    <main className="container">

      <section className="section">
        <SearchForm
          onSearch={searchBuyers}
          loading={loading}
        />
      </section>

      
        <BuyersTable buyers={buyers} />
    

      <section className="section">
        <UploadPDF
          pdf={pdf}
          setPdf={setPdf}
        />
      </section>

      {buyers.length > 0 && (
        <section className="section">
          <button
            className="send-btn"
            onClick={sendEmails}
            disabled={sending}
          >
            {sending ? "Sending..." : "📧 Send Emails"}
          </button>
        </section>
      )}

    </main>

    <Footer />

  </div>
);

  

}

export default App;
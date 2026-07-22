import { useRef } from "react";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import "./UploadPDF.css";

function UploadPDF({ pdf, setPdf }) {

  const fileRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setPdf(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="upload-container">

      <div
        className="upload-box"
        onClick={() => fileRef.current.click()}
      >

        <FaCloudUploadAlt className="upload-icon" />

        <h3>Upload Product Catalogue</h3>

        <p>
          Click here or drag & drop your PDF catalogue.
        </p>

        <input
          type="file"
          accept=".pdf"
          hidden
          ref={fileRef}
          onChange={handleChange}
        />

      </div>

      {pdf && (
        <div className="selected-file">

          <FaFilePdf />

          <span>{pdf.name}</span>

        </div>
      )}

    </div>
  );
}

export default UploadPDF;
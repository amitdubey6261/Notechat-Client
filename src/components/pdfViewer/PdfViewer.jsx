import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "./pdfViewer.css";
import PdfPagination from "./PdfPagination";
import { useSelector } from "react-redux";

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const { urlToPdf }= useSelector(state=>state.setPdfReducer) ; 
  console.log( urlToPdf )

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  let [page , setPage] = useState(1) ; 

  let right = () =>{
      if( page < numPages )
        setPage( page += 1 );
  }

  let left = () =>{
    if( page > 1)
      setPage( page -= 1);
  }

  const pdf = "https://res.cloudinary.com/daj3qkez6/image/upload/v1686749020/pdfs/rwuolj2z3j223kg4yhpj.pdf";

  return (
    <div className="pdf-conatiner">
      <div className="pdf-wrapper">
        <Document file={urlToPdf} onLoadSuccess={onDocumentLoadSuccess}> 
          <Page pageNumber={page}/>
        </Document>
      </div>
      <PdfPagination left={left} right={right} val={page} total={numPages} />
    </div>
  );
}

export default MyApp;

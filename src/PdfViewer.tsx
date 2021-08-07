import React from 'react'

import { Document, Page, pdfjs } from 'react-pdf'
import workerSrc from "./pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PdfViewer = () => (
  <Document
    file="sample.pdf"
  >
    <Page pageNumber={1} width={100} />
  </Document>
);

export default PdfViewer;

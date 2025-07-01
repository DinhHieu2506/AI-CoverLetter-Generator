import jsPDF from "jspdf";
import robotoBase64 from "../fonts/Roboto";

export const downloadPdf = (content, fileName = "cover-letter.pdf") => {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  doc.addFileToVFS("Roboto-Regular.ttf", robotoBase64);
  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.setFont("Roboto");
  doc.setFontSize(12);

  const leftMargin = 60;
  const topMargin = 60;
  const maxWidth = doc.internal.pageSize.getWidth() - leftMargin * 2;


  const paragraphs = content.split("\n\n");
  let y = topMargin;

  paragraphs.forEach(paragraph => {
    const lines = doc.splitTextToSize(paragraph, maxWidth);
    doc.text(lines, leftMargin, y);
    y += lines.length * 18 + 10;
  });

  doc.save(fileName);
};



import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export const downloadDocx = (content, fileName = "cover-letter.docx") => {
  const paragraphs = content.split("\n").map(line =>
    new Paragraph({
      children: [new TextRun(line)],
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs,
      },
    ],
  });

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, fileName);
  });
};

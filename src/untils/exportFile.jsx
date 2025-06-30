import jsPDF from "jspdf";

export const downloadPdf = (content, fileName = "cover-letter.pdf") => {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const leftMargin = 60;
  const topMargin = 60;
  const maxWidth = doc.internal.pageSize.getWidth() - leftMargin * 2;

  doc.setFont("Times", "Normal");
  doc.setFontSize(12);

  // Tách từng đoạn nếu có xuống dòng rõ ràng
  const paragraphs = content.split("\n\n");
  let y = topMargin;

  paragraphs.forEach(paragraph => {
    const lines = doc.splitTextToSize(paragraph, maxWidth);
    doc.text(lines, leftMargin, y);
    y += lines.length * 18 + 10; // giãn dòng giữa các đoạn
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

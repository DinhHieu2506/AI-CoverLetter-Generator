import jsPDF from "jspdf";
import timeBase64 from "../assets/fonts/TimeNewRoman";

export const downloadPdf = (content, fileName = "cover-letter.pdf") => {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  
  doc.addFileToVFS("times.ttf", timeBase64);
  doc.addFont("times.ttf", "TimesNewRoman", "normal");
  doc.setFont("TimesNewRoman");
  doc.setFontSize(12);

  const leftMargin = 60;
  const topMargin = 60;
  const lineHeight = 18;
  const paragraphSpacing = 10;
  const maxWidth = doc.internal.pageSize.getWidth() - leftMargin * 2;
  const pageHeight = doc.internal.pageSize.getHeight();

  const paragraphs = content.split("\n\n"); 
  let y = topMargin; 

  paragraphs.forEach(paragraph => {
    const lines = doc.splitTextToSize(paragraph, maxWidth);
    const totalHeight = lines.length * lineHeight + paragraphSpacing;

    
    if (y + totalHeight > pageHeight - topMargin) {
      doc.addPage(); 
      y = topMargin; 
    }

    doc.text(lines, leftMargin, y); 
    y += totalHeight; 
  });

  doc.save(fileName); // Lưu file PDF
};




export const downloadDocx = (content, fileName = "cover-letter.docx") => {
  const paragraphs = content.split("\n").map(line =>
    new paragraphs({
      children: [
        new TextRun({
          text: line,
          font: "Times New Roman", 
          size: 24, 
        }),
      ],
      spacing: {
        after: 200, 
      },
    })
  );

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Times New Roman",
            size: 24,
          },
          paragraph: {
            spacing: { line: 360 }, 
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1134,    
              bottom: 1134,
              left: 1134,
              right: 1134,
            },
          },
        },
        children: paragraphs,
      },
    ],
  });

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, fileName);
  });
};



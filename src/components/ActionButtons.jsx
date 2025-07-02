import React from "react";
import { Button, Tooltip, message, Dropdown, Menu } from "antd";
import { EyeOutlined, CopyOutlined, DownloadOutlined } from "@ant-design/icons";
import { downloadPdf, downloadDocx } from "../utils/exportFile";
import useCoverLetterStore from "../store/useCoverLetterStore";

export default function ActionButtons({ editableRef, title }) {
  const getContent = () => editableRef?.current?.innerText || "";
  const isDisabled = !getContent();

  const handleDownload = (type) => {
    const content = getContent();
    if (!content) return;
    if (type === "pdf") downloadPdf(content, `${title || "cover-letter"}.pdf`);
    if (type === "docx") downloadDocx(content, `${title || "cover-letter"}.docx`);
  };

  const menu = (
    <Menu>
      <Menu.Item key="pdf" onClick={() => handleDownload("pdf")}>
        Download as PDF
      </Menu.Item>
      <Menu.Item key="docx" onClick={() => handleDownload("docx")}>
        Download as DOCX
      </Menu.Item>
    </Menu>
  );

const handlePreview = () => {
  const htmlContent = editableRef?.current?.innerHTML || "";
  if (!htmlContent) return;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cover Letter Preview</title>
        <style>
          body {
            font-family: 'Georgia', serif;
            color: #1f2937; /* text-gray-800 */
            padding: 40px;
            line-height: 1.75;
            max-width: 800px;
            margin: auto;
            background: #f9fafb;
          }

          h1, h2, h3 {
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
          }

          p {
            margin-bottom: 1em;
          }

          .letter-container {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="letter-container">
          ${htmlContent}
        </div>
      </body>
    </html>
  `);
  newWindow.document.close();
};





  const handleCopy = () => {
    navigator.clipboard.writeText(getContent());
    message.success("Copied to clipboard!");
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <Tooltip title="Preview in new tab">
        <Button
          icon={<EyeOutlined />}
          disabled={isDisabled}
          onClick={handlePreview}
        >
          Preview
        </Button>
      </Tooltip>

      <Tooltip title="Copy to clipboard">
        <Button
          icon={<CopyOutlined />}
          disabled={isDisabled}
          onClick={handleCopy}
        >
          Copy
        </Button>
      </Tooltip>

      <Dropdown overlay={menu} disabled={isDisabled}>
        <Button type="primary" icon={<DownloadOutlined />} disabled={isDisabled}>
          Download
        </Button>
      </Dropdown>
    </div>
  );
}

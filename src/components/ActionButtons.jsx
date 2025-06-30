import React from "react";
import { Button, Tooltip, message, Dropdown, Menu } from "antd";
import { EyeOutlined, CopyOutlined, DownloadOutlined } from "@ant-design/icons";
import { downloadPdf, downloadDocx } from "../untils/exportFile";
import useCoverLetterStore from "../store/useCoverLetterStore";

export default function ActionButtons({ editableRef, title }) {
  const getContent = () => editableRef?.current?.innerText || "";

  const handleDownload = (type) => {
    const content = getContent();
    if (!content) return;
    if (type === "pdf") downloadPdf(content, `${title || "cover-letter"}.pdf`);
    if (type === "docx")
      downloadDocx(content, `${title || "cover-letter"}.docx`);
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

  return (
    <div className="flex gap-2">
      <Tooltip title="Preview in new tab">
        <Button
          icon={<EyeOutlined />}
          disabled={!getContent()}
          onClick={() => {
            const htmlContent = getContent();
            const newWindow = window.open("", "_blank");
            newWindow.document.write(
              `<pre style="font-family:Arial;white-space:pre-wrap">${htmlContent}</pre>`
            );
            newWindow.document.close();
          }}
        >
          Preview
        </Button>
      </Tooltip>

      <Tooltip title="Copy to clipboard">
        <Button
          icon={<CopyOutlined />}
          disabled={!getContent()}
          onClick={() => {
            navigator.clipboard.writeText(getContent());
            message.success("Copied to clipboard!");
          }}
        >
          Copy
        </Button>
      </Tooltip>

      <Dropdown overlay={menu} disabled={!getContent()}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          disabled={!getContent()}
          onClick={() =>
            downloadDocx(getContent(), `${title || "cover-letter"}.docx`)
          }
        >
          Download
        </Button>
      </Dropdown>
    </div>
  );
}

import React, { useRef } from "react";
import { Input } from "antd";
import ActionButtons from "./ActionButtons";
import useCoverLetterStore from "../store/useCoverLetterStore";

export default function CoverLetterPreview() {
  const { letter, title } = useCoverLetterStore();
  const editableRef = useRef();

  const formattedLetter = letter
    ? letter.replace(/\n/g, "<br />")
    : 'Click "Generate" to preview your cover letter here...';

  return (
    <div className="flex flex-col h-full space-y-4 min-w-0">
      {/* Title & Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Input
          placeholder="Cover Letter Title"
          value={title}
          onChange={(e) =>
            useCoverLetterStore.getState().setTitle(e.target.value.trim())
          }
          disabled={!letter}
          className="flex-1 min-w-[200px] font-semibold text-lg"
        />
        <ActionButtons editableRef={editableRef} title={title} />
      </div>

      {/* Letter content */}
      <div className="flex-1 border border-gray-300 bg-white p-8 rounded-xl overflow-auto shadow-inner font-serif text-gray-800 text-base leading-7 break-words">
        <div
          className="outline-none"
          ref={editableRef}
          spellCheck="false"
          contentEditable
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: formattedLetter }}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";

const HighlightInput: React.FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  // 하이라이트 버튼 핸들러
  const handleHighlight = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
  };

  // 현재 하이라이트된 텍스트 추출
  const getHighlightedText = () => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    if (selectionState.isCollapsed()) {
      console.log("선택된 텍스트가 없습니다.");
      return;
    }

    const startKey = selectionState.getStartKey();
    const endKey = selectionState.getEndKey();
    const startOffset = selectionState.getStartOffset();
    const endOffset = selectionState.getEndOffset();

    const blockMap = contentState.getBlockMap();
    const highlightedText: string[] = [];

    blockMap.forEach((block: any) => {
      const key = block.getKey();
      if (key === startKey || key === endKey) {
        const text = block.getText();
        const blockStartOffset = key === startKey ? startOffset : 0;
        const blockEndOffset = key === endKey ? endOffset : text.length;
        highlightedText.push(text.slice(blockStartOffset, blockEndOffset));
      }
    });

    console.log("하이라이트된 텍스트:", highlightedText.join(" "));
  };

  return (
    <div className="p-4 border rounded">
      <button
        onClick={handleHighlight}
        className="bg-yellow-400 text-black px-3 py-1 rounded mb-4">
        형광펜 적용
      </button>
      <button
        onClick={getHighlightedText}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4 ml-2">
        하이라이트 텍스트 출력
      </button>
      <div className="border p-2 rounded">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="텍스트를 입력하고 형광펜을 적용해보세요!"
        />
      </div>
    </div>
  );
};

export default HighlightInput;

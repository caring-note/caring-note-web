import { Editor, EditorState, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeEditorState } from "../../reducers/editorStateReducer";

const HighlightInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((state) => state.editorState.editorState);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // 하이라이트 버튼 핸들러
  const applyHighlight = () => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    if (selectionState.isCollapsed()) return;

    // 아래 주석은 유지보수 때를 위해 남김. 10시간의 삽질 끝에 얻은 코드
    // console.log("컨텐츠 스테이트:", contentState.getPlainText());
    // console.log("selectionState:", selectionState.toString());
    // console.log(
    //   "방금 하이라이트한 텍스트:",
    //   contentState
    //     .getPlainText()
    //     .substring(
    //       selectionState.getAnchorOffset(),
    //       selectionState.getFocusOffset(),
    //     ),
    // );

    const newContentState = Modifier.applyInlineStyle(
      contentState,
      selectionState,
      "HIGHLIGHT",
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "change-inline-style",
    );

    // setEditorState(newEditorState);
    dispatch(changeEditorState(newEditorState));
  };

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: "#FFBD14",
    },
  };

  // 현재 하이라이트된 텍스트 추출
  const getHighlightedText = () => {
    if (!containerRef.current) return;

    // container 내에서 background가 yellow(#FFBD14)인 span 요소만 선택
    const yellowSpans = Array.from(
      containerRef.current.querySelectorAll("span"),
    ).filter(
      (span: any) =>
        getComputedStyle(span).backgroundColor === "rgb(255, 189, 20)", // #FFBD14
    );

    yellowSpans.forEach((span: any) => {
      console.log("현재 하이라이트된 텍스트:", span.textContent);
    });
  };

  return (
    <div className="p-2 border rounded">
      <button
        onClick={applyHighlight}
        className="bg-yellow-400 text-black px-3 py-1 rounded mb-4">
        형광펜 적용
      </button>
      <button
        onClick={getHighlightedText}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4 ml-2">
        하이라이트 텍스트 출력
      </button>
      <div ref={containerRef} className="border p-2 rounded">
        <Editor
          editorState={editorState}
          placeholder="내용을 입력해주세요."
          onChange={(editorState) => {
            try {
              dispatch(changeEditorState(editorState));
            } catch (e) {
              console.log(e);
            }
          }}
          customStyleMap={styleMap}
        />
      </div>
    </div>
  );
};

export default HighlightInput;

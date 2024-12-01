import { Editor, EditorState, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeEditorState } from "../../reducers/editorStateReducer";
import highlightpenBlack from "@icon/highlightpenBlack.png";
import trashcanBlue from "@icon/trashcanBlue.png";
import "../../assets/css/DraftJsCss.css";

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

  // 하이라이트 버튼 핸들러
  const removeHighlight = () => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    if (selectionState.isCollapsed()) return;

    const newContentState = Modifier.removeInlineStyle(
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
    CLEAR: {
      backgroundColor: "#FFFFFF",
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
      console.log("현재 하이라이트된 텍스트:\n", span.textContent);
    });

    // TODO : 추출한 텍스트를 String[]으로 저장하여 API로 전송
  };

  return (
    <div className="p-0 rounded-lg bg-white border-2 border-gray-300">
      <div
        ref={containerRef}
        className="border-b p-2 min-h-32"
        onClick={getHighlightedText}>
        <Editor
          editorState={editorState}
          placeholder={`2024.12.1 : 이슈 기록
            0. 텍스트 선택시 그 위에 형광펜 띄우는건 불가능 (예상하셨겠지만..)
            1. 형광펜 버튼 한개로 toggle 하는건 어려움 (지우기 버튼 임시로 만듬)
            2. 여러 줄을 "잘라내기" 하는 경우 화이트스크린 발생 (이유는 모름)
            `}
          onChange={(editorState) => {
            dispatch(changeEditorState(editorState));
          }}
          customStyleMap={styleMap}
        />
      </div>
      <div>
        <img
          className="w-10 h-8 cursor-pointer m-2 inline-block"
          src={highlightpenBlack}
          alt="하이라이트"
          onClick={applyHighlight}
        />
        <img
          className="w-8 h-8 cursor-pointer inline-block"
          src={trashcanBlue}
          alt="하이라이트 지우기"
          onClick={removeHighlight}
        />
      </div>
    </div>
  );
};

export default HighlightInput;

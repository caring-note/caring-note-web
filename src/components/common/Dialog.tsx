import cancel from "@icon/16/close.outlined.black.svg";
interface DialogProps {
  title: string; // 다이얼로그 제목
  content: string; // 다이얼로그 내용
  onCancel: React.MouseEventHandler<HTMLElement>; // 취소 버튼
  onConfirm: React.MouseEventHandler<HTMLElement>; // 확인 버튼
  cancelText: string; // 취소 버튼 이름
  confirmText: string; // 확인 버튼 이름
  isDialogOpen: boolean; // 다이얼로그 열림상태
  width?: string; // 다이얼로그 넓이
  height?: string; // 다이얼로그 높이
}
const Dialog = ({
  title,
  content,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  isDialogOpen,
  width = "w-96", // Default width
  height = "h-auto", // Default height
}: DialogProps) => {
  return isDialogOpen ? (
    <div className="fixed inset-0 bg-grayscale-100 bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-lg p-6 ${width} ${height}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            className="text-grayscale-90 hover:text-gray-800"
            onClick={onCancel}
            aria-label="Close">
            <img src={cancel} />
          </button>
        </div>
        <div className="mt-3">
          <p className="text-gray-700">{content}</p>
        </div>
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-md text-primary-50 border-primary-50 hover:bg-primary-5">
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-primary-50 text-white rounded-md hover:bg-primary-60">
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
export default Dialog;

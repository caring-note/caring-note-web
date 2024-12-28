import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@components/components/ui/dialog";
import { Button } from "@components/components/ui/button";
import arrowForwardIcon from "@icon/24/arrowback.outlined.black.svg";

type AgreementDetailDialogTypes = {
  isDetailOpen: boolean;
  mainOpen: () => void;
  onClose: () => void;
  onAgree: (key: string, checked: boolean) => void;
};

const AgreementDetails3Dialog = ({
  isDetailOpen,
  mainOpen,
  onClose,
  onAgree,
}: AgreementDetailDialogTypes) => {
  return (
    <Dialog open={isDetailOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="w-[480px] h-auto flex flex-col justify-between">
        <DialogHeader>
          <img
            src={arrowForwardIcon}
            className="cursor-pointer"
            onClick={() => {
              mainOpen();
              onClose();
            }}
          />
          <DialogTitle>폐의약품 수거에 관한 동의</DialogTitle>
        </DialogHeader>

        <div className="p-4 mx-auto mt-2 mb-4 rounded-lg shadow-md bg-grayscale-3">
          <p className="mb-4 text-sm text-grayscale-50">
            안전한 폐의약품 분리배출을 위해 귀하의 불용의약품을 폐기하시는 것에
            동의하십니까?
          </p>
        </div>

        <DialogFooter className="justify-around w-full">
          <Button
            variant="secondary"
            onClick={() => {
              mainOpen();
              onClose();
              onAgree("term3", false);
            }}>
            동의하지 않습니다
          </Button>
          <Button
            onClick={() => {
              mainOpen();
              onClose();
              onAgree("term3", true);
            }}>
            동의합니다
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AgreementDetails3Dialog;

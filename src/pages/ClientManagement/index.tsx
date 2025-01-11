import TableComponent from "@/components/common/TableComponent";
import { Button } from "@/components/ui/button";
import { GridColDef } from "@mui/x-data-grid";

const ClientManagement = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: '내담자', flex: 1 },
    { field: 'status', headerName: '장애 여부', flex: 1 },
    { field: 'birthDate', headerName: '생년월일', flex: 1 },
    { field: 'phone', headerName: '전화번호', flex: 1 },
    { field: 'connection', headerName: '연계 기관', flex: 1 },
    { field: 'activity', headerName: '행정동', flex: 1 },
    { field: 'counselor', headerName: '생활지원사', flex: 1 },
    { field: 'note', headerName: '비고', flex: 1 },
  ];

  const rows = [
    {
      id: 1,
      name: '김늘품',
      status: '비장애인',
      birthDate: '550101',
      phone: '010-1234-5678',
      connection: '신림종합사회...',
      activity: '신림동',
      counselor: '김지원',
      note: '3년 전 허리수술로...'
    },
    // 필요한 만큼 더 추가
  ];

  return (
    <div className="p-5">
      <div className="w-full h-[6.25rem] font-bold text-h3 border-b border-grayscale-10 text-grayscale-100 content-center pl-[2.5rem]">
        내담자 관리
      </div>
      <div className="flex justify-center items-center pt-[2rem]">
        
        <div className="w-[66.25rem] h-full">
          <div className="w-full h-[3.3125rem] bg-grayscale-3 rounded-[0.5rem] mb-[0.5rem] justify-between flex">
          </div>
          <div className="w-full h-full bg-grayscale-3 rounded-[0.5rem] items-center flex flex-col">
            <div className="w-[63.75rem] h-[3.125rem] rounded-[0.5rem] flex justify-between ">
              <div className="w-[14.6875rem] h-[3.125rem]">
                <div className="text-subtitle-2 font-bold text-grayscale-90">내담자 리스트</div>
                <div className="text-body-2 font-medium text-grayscale-60 h-[1.25rem]">복약 상담소를 방문해준 모든 내담자의 정보</div>
              </div>
              <div className="w-[22.8125rem] h-[1.25rem]"><Button size="lg" property="secondary" className="w-[6.825rem] text-body-1 font-bold" disabled={true}>리스트 삭제</Button> 버튼2 버튼3</div>
            </div>
            <TableComponent className="w-full h-full"
            tableKey="client-management"
          rows={rows}
          columns={columns}
            checkboxSelection={true}
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
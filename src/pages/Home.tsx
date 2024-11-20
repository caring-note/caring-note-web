function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start mt-20 bg-red-100">
        <p className="text-black">
          박진완님, <br />
          오늘도 힘찬 하루를 보내세요!{" "}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-20">
        <div className="w-20 h-20 bg-red-200">대쉬보드1</div>
        <div className="w-20 h-20 bg-red-300">대쉬보드2</div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 bg-red-500">
        <div className="h-96">테이블</div>
      </div>
    </>
  );
}

export default Home;

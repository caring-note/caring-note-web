import "./App.css";
import adminBlack from "./assets/icon/adminBlack.png";
import homeBlack from "./assets/icon/homeBlack.png";
import homeBlue from "./assets/icon/homeBlue.png";
import noteBlack from "./assets/icon/noteBlack.png";
import questionBlack from "./assets/icon/questionBlack.png";
import settingBlack from "./assets/icon/settingBlack.png";
import logoBlack from "./assets/logoBlack.png";
import Badge from "./components/Badge";
import Button from "./components/Button";
import NavigationLeft from "./components/NavigationLeft";
import NavigationLeftMenu from "./components/NavigationLeftMenu";
import Tooltip from "./components/Tooltip";

function App() {

  return (
    <div className="flex justify-start ">
      <div>
        <NavigationLeft>
          <div className="flex justify-center items-center">
            <img src={logoBlack} alt="logo" className="" />
          </div>
          <Button _class="mb-5" variant="primary" size="xl" icon="none" onClick={() => {}} children={"박진완 약사님"} />
          <NavigationLeftMenu isActive={true} imgSrc={homeBlack} activeImgSrc={homeBlue} menuName="홈" />
          <NavigationLeftMenu imgSrc={noteBlack} activeImgSrc={homeBlue} menuName="상담노트" />
          <NavigationLeftMenu imgSrc={adminBlack} activeImgSrc={homeBlue} menuName="계정관리" />
          <div className="absolute bottom-5 w-full">
            <NavigationLeftMenu imgSrc={settingBlack} activeImgSrc={homeBlue} menuName="설정" />
            <NavigationLeftMenu imgSrc={questionBlack} activeImgSrc={homeBlue} menuName="도움말" />
          </div>
        </NavigationLeft>
      </div>

      <div>
        <p className="read-the-docs">힘내 진완아</p>
        <Button variant="primary" size="sm" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />
        <Button variant="primary" size="md" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />
        <Button variant="primary" size="lg" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} disabled />
        <Button variant="primary" size="xl" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />

        <Button variant="secondary" size="sm" icon="search" onClick={() => {}} children={"테스트 버튼"} />
        <Button variant="secondary" size="md" icon="search" onClick={() => {}} children={"테스트 버튼"} disabled />
        <Button variant="secondary" size="lg" icon="search" onClick={() => {}} children={"테스트 버튼"} />
        <Button variant="secondary" size="xl" icon="search" onClick={() => {}} children={"테스트 버튼"} />

        <Badge variant="primary" size="sm" type="tint" />
        <Badge variant="primary" size="md" type="tint" />
        <Badge variant="primary" size="lg" type="tint" />
        <Badge variant="primary" size="xl" type="tint" />
        <Badge variant="primary" size="sm" type="outline" />
        <Badge variant="primary" size="md" type="outline" />
        <Badge variant="primary" size="lg" type="outline" />
        <Badge variant="primary" size="xl" type="outline" />

        <Badge variant="error" size="sm" type="tint" />
        <Badge variant="error" size="md" type="tint" />
        <Badge variant="error" size="lg" type="tint" />
        <Badge variant="error" size="xl" type="tint" />
        <Badge variant="error" size="sm" type="outline" />
        <Badge variant="error" size="md" type="outline" />
        <Badge variant="error" size="lg" type="outline" />
        <Badge variant="error" size="xl" type="outline" />

        <Tooltip id="test-id" text="툴팁 테스트 호버" />
        <Tooltip id="test-id-2" text="툴팁 테스트 클릭" eventType="click" />
      </div>
    </div>
  );
}

export default App;

import { Checkbox } from "@components/components/ui/checkbox";
import { Button } from "@components/components/ui/button";
import DatePickerComponent from "@components/components/ui/datepicker";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/components/ui/tabs";
import { Label } from "@components/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@components/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import Tooltip from "@components/Tooltip";
import Badge from "@components/common/Badge";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 bg-blue-100">
        <p className="w-full text-4xl font-bold text-blue-600 pl-28">
          박진완님, <br />
          오늘도 힘찬 하루를 보내세요!{" "}
        </p>
        <div className="flex flex-row items-center justify-center w-full px-24 mt-10 space-x-5">
          <div className="w-1/2 h-32 bg-gray-100 border-4 border-white rounded-xl">
            <div className="flex flex-row w-full h-full">
              <div className="flex flex-col items-start justify-center w-1/2 pl-5 space-y-2">
                <p>올해 케어링 메세지 공유 수</p>
                <p className="text-3xl font-bold text-blue-500">{"1,234"}회</p>
              </div>
              <div className="flex flex-col items-start justify-center w-1/2 pl-5 space-y-2">
                <p>올해 상담한 내담자 수</p>
                <p className="text-3xl font-bold text-blue-500">{"201"}명</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-32 bg-gray-100 border-4 border-white rounded-xl">
            <div className="flex flex-row w-full h-full">
              <div className="flex flex-col items-start justify-center w-1/2 pl-5 space-y-2">
                <p>올해 케어링 메세지 공유 수</p>
                <p className="text-3xl font-bold text-yellow-500">
                  {"1,234"}회
                </p>
              </div>
              <div className="flex flex-col items-start justify-center w-1/2 pl-5 space-y-2">
                <p>올해 상담한 내담자 수</p>
                <p className="text-3xl font-bold text-yellow-500">{"201"}명</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-20 pt-10 bg-blue-300">
          <div className="w-full h-screen bg-gray-100 cursor-pointer rounded-xl">
            <p
              className="mt-10 text-3xl text-center"
              onClick={() => {
                navigate("/consult");
              }}>
              박진완 : 본상담 화면으로 이동 (임시){" "}
            </p>
            <p
              className="mt-10 text-3xl text-center"
              onClick={() => {
                navigate("/assistant");
              }}>
              조영호 : 기초상담 화면으로 이동 (임시){" "}
            </p>
            <DatePickerComponent></DatePickerComponent>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>

            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
            <Checkbox></Checkbox>
            <Button variant={"secondary"} disabled={true}>
              wwwwww
            </Button>

            <Tooltip id="tooltip" text="This is a tooltip" eventType="hover" />
            <Tooltip id="tooltip2" text="This is a tooltip" eventType="click" />
            
            <div className="grid grid-cols-4 gap-4 items-start">
              <div>
                <Badge variant="filled" size="extra-large" color="primary">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="tint" size="large" color="primary">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="outline" size="medium" color="primary">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="ghost" size="small" color="primary">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="filled" size="extra-large" color="error">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="tint" size="large" color="error">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="outline" size="medium" color="error">
                  Badge
                </Badge>
              </div>
              <div>
                <Badge variant="ghost" size="small" color="error">
                  Badge
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

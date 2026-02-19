import svgPaths from "./svg-xfluzo35a8";
import imgAvatar from "figma:asset/d376a8d5ecfe876fbb2d1cb2b96c4c0b94fa6852.png";
import imgImageMarkThompson from "figma:asset/944c136466787d5f51c21db76d313a1ee7743fca.png";

function List() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="List">
          <path d={svgPaths.p2136a900} fill="var(--fill-0, #E2E8F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[32px] shrink-0" data-name="div">
      <List />
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[39.997px]" data-name="div">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9969 40">
        <g id="div">
          <rect fill="var(--fill-0, white)" fillOpacity="0.1" height="40" rx="19.9984" width="39.9969" />
          <g id="BellSimple">
            <path d={svgPaths.p3cce1d80} fill="var(--fill-0, #E2E8F0)" id="Vector" />
          </g>
          <circle cx="29.9961" cy="10" fill="var(--fill-0, #F83B48)" id="Ellipse 1" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="div">
      <Div />
      <Div1 />
    </div>
  );
}

function Div3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[20px] py-[16px] relative w-full">
          <Div2 />
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
        <p className="css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[22px] text-white">Profile</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[19998px] shrink-0 size-[64px]" data-name="avatar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d3e3c0] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="ProfileView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-4hzbpn font-['FT_Polar:Semibold',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]">Sarah</p>
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#e2e8f0] text-[16px]">BrewCraft Coffee Roasters</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="div">
      <Avatar />
      <ProfileView />
    </div>
  );
}

function Div6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
        <Div5 />
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="div">
      <Div4 />
      <Div6 />
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="div">
      <Div3 />
      <Div7 />
    </div>
  );
}

function Container() {
  return <div className="bg-[#34d399] opacity-98 rounded-[16777200px] shrink-0 size-[8.321px]" data-name="Container" />;
}

function Div9() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between pl-0 pr-[-0.16px] py-0 relative shrink-0 w-full" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f82] text-[12px] tracking-[0.3px]">PRIVATE BANKING CONCIERGE</p>
      <Container />
    </div>
  );
}

function ImageMarkThompson() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Image (Mark Thompson)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMarkThompson} />
    </div>
  );
}

function Div10() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[64px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageMarkThompson />
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-4hzbpn font-['FT_Polar:Bold',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#062a65] text-[18px] w-[min-content]">Mark Thompson</p>
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#475569] text-[14px]">Senior Relationship Manager</p>
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#0041ad] text-[12px]">London Cheapside Branch</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="div">
      <Div10 />
      <Div11 />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Phone">
          <path d={svgPaths.p2740b080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0046ad] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Phone />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Call</p>
        </div>
      </div>
    </div>
  );
}

function ChatCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChatCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChatCircle">
          <path d={svgPaths.p1610e200} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f1f5f9] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <ChatCircle />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#0046ad] text-[16px] text-center">Chat</p>
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="div">
      <Button />
      <Button1 />
    </div>
  );
}

function ProfileView1() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="ProfileView">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
          <Div9 />
          <Div12 />
          <Div13 />
        </div>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sparkle">
          <path d={svgPaths.p3dfd1f00} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Sparkle />
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div14() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">Payment Automation</p>
          <CaretRight />
        </div>
      </div>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FileText">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FileText">
          <path d={svgPaths.p2f9b1080} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FileText />
    </div>
  );
}

function CaretRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div15() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon1 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">{`Statements & Documents`}</p>
          <CaretRight1 />
        </div>
      </div>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CreditCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CreditCard">
          <path d={svgPaths.p2dd92770} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CreditCard />
    </div>
  );
}

function CaretRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div16() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon2 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">{`Card Limits & Controls`}</p>
          <CaretRight2 />
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Users">
          <path d={svgPaths.pf166c00} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Users />
    </div>
  );
}

function Div17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">3 Users</p>
    </div>
  );
}

function CaretRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div18() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon3 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">Team Access</p>
          <Div17 />
          <CaretRight3 />
        </div>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <Div14 />
      <Div15 />
      <Div16 />
      <Div18 />
    </div>
  );
}

function Div20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[361px]" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[20px]">Management</p>
      <Div19 />
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Shield">
          <path d={svgPaths.p3c4c1100} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Shield />
    </div>
  );
}

function CaretRight4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div21() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon4 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">Security Settings</p>
          <CaretRight4 />
        </div>
      </div>
    </div>
  );
}

function FingerprintSimple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FingerprintSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FingerprintSimple">
          <path d={svgPaths.p13297000} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FingerprintSimple />
    </div>
  );
}

function CaretRight5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div22() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon5 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">{`Face ID & Passcode`}</p>
          <CaretRight5 />
        </div>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <Div21 />
      <Div22 />
    </div>
  );
}

function Div24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[361px]" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[20px]">Security</p>
      <Div23 />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Question">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Question">
          <path d={svgPaths.p28d41b80} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Question />
    </div>
  );
}

function CaretRight6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div25() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon6 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">Help Center</p>
          <CaretRight6 />
        </div>
      </div>
    </div>
  );
}

function GlobeSimple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="GlobeSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="GlobeSimple">
          <path d={svgPaths.p38fa3600} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <GlobeSimple />
    </div>
  );
}

function CaretRight7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <path d={svgPaths.p2c0b8700} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div26() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <Icon7 />
          <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">{`Legal & Privacy`}</p>
          <CaretRight7 />
        </div>
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <Div25 />
      <Div26 />
    </div>
  );
}

function Div28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[361px]" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[20px]">Support</p>
      <Div27 />
    </div>
  );
}

function SignOut() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SignOut">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SignOut">
          <path d={svgPaths.p1335b280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0046ad] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <SignOut />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Log Out</p>
        </div>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
        <ProfileView1 />
        <Div20 />
        <Div24 />
        <Div28 />
        <Button2 />
        <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[min-content]">Version 2.4.0 (Build 1042)</p>
      </div>
    </div>
  );
}

function HouseSimple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="HouseSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="HouseSimple">
          <path d={svgPaths.p37582e00} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <HouseSimple />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[17px] not-italic text-[#64748b] text-[12px] text-center top-px translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container1 />
      <Text />
    </div>
  );
}

function Wallet() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Wallet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Wallet">
          <path d={svgPaths.p1d983540} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Wallet />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[28px] not-italic text-[#64748b] text-[12px] text-center top-px translate-x-[-50%]">Accounts</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container2 />
      <Text1 />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChartBar">
          <path d={svgPaths.p33b23600} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ChartBar />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[24.5px] not-italic text-[#64748b] text-[12px] text-center top-px translate-x-[-50%]">Insights</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container3 />
      <Text2 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User">
          <path d={svgPaths.p6f90b00} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <User />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[24px] not-italic text-[#0046ad] text-[12px] text-center top-px translate-x-[-50%]">Account</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container4 />
      <Text3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_22px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TabBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="TabBar">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[28px] pt-[12px] px-[12px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

export default function ProfileV() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0046ad] items-start relative size-full to-[#000c45] to-[19.798%]" data-name="Profile - V2">
      <Div8 />
      <Div29 />
      <TabBar />
    </div>
  );
}
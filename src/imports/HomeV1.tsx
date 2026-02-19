import svgPaths from "./svg-zc302nnrbk";

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
    <div className="h-[54px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-[20px] py-0 relative size-full">
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#e2e8f0] text-[16px]">Good afternoon Sarah</p>
        <p className="css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[22px] text-white">BrewCraft Coffee Roasters</p>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Eye">
          <path d={svgPaths.p29ea800} fill="var(--fill-0, #E2E8F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="div">
      <Eye />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#e2e8f0] text-[16px]">Total Balance</p>
    </div>
  );
}

function CaretUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretUp">
          <path d={svgPaths.p75e79d8} fill="var(--fill-0, #34D399)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="div">
      <CaretUp />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#34d399] text-[16px]">2.8%</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#34d399] text-[16px]">{`+£4,250.00 `}</p>
      <Div6 />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#cbd5e1] text-[14px]">This Month</p>
    </div>
  );
}

function Div8() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-0 relative w-full">
          <Div5 />
          <p className="css-4hzbpn font-['FT_Polar:Semibold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-white w-full">£158,750.00</p>
          <Div7 />
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="div">
      <Div4 />
      <Div8 />
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[20px] pt-0 px-0 relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full" data-name="div">
      <Div3 />
      <Div9 />
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sparkle">
          <path d={svgPaths.p2edaed00} fill="var(--fill-0, #000C45)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p5ff8500} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <Sparkle />
      <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Bold',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#000c45] text-[18px]">Great News!</p>
      <X />
    </div>
  );
}

function Div11() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
        <Container />
        <p className="css-4hzbpn font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#000c45] text-[16px] w-full">You are on track to meet all your financial commitments this month.</p>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Warning">
          <path d={svgPaths.p8de6c00} fill="var(--fill-0, #DE1927)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <Warning />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[240px]" data-name="Container">
      <Icon />
      <p className="css-4hzbpn font-['FT_Polar:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[min-content]">Unusual Card Activity</p>
      <p className="css-4hzbpn font-['FT_Polar:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#475569] text-[16px] w-[min-content]">Unusual £600 online transaction on an employee card detected</p>
    </div>
  );
}

function Warning1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Warning">
          <path d={svgPaths.p8de6c00} fill="var(--fill-0, #DE1927)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <Warning1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[240px]" data-name="Container">
      <Icon1 />
      <p className="css-4hzbpn font-['FT_Polar:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[min-content]">Your RM Noticed the Cashflow Dip</p>
      <p className="css-4hzbpn font-['FT_Polar:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#475569] text-[16px] w-[min-content]">Ben can help optimise your payment timings</p>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="div">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Button() {
  return <div className="bg-[#0046ad] h-[8px] rounded-[16777200px] shrink-0 w-[24px]" data-name="Button" />;
}

function Button1() {
  return <div className="bg-[#cbd5e1] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Div13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[8px] items-start justify-center relative shrink-0 w-full" data-name="div">
      <Button />
      {[...Array(2).keys()].map((_, i) => (
        <Button1 key={i} />
      ))}
    </div>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[20px]">Highlights</p>
      <Div12 />
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start leading-[22px] not-italic relative w-full">
        <p className="css-4hzbpn font-['FT_Polar:Semibold',sans-serif] h-[22px] relative shrink-0 text-[#0f172a] text-[20px] w-[191.352px]">Liquidity+ Line</p>
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] relative shrink-0 text-[#64748b] text-[14px]">Pre-approved lending limit</p>
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
    <div className="bg-[#eaf3ff] relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <CreditCard />
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[20px] relative w-full">
          <Div15 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="div">
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">Available</p>
    </div>
  );
}

function Div18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div">
      <p className="css-4hzbpn flex-[1_0_0] font-['FT_Polar:Semibold',sans-serif] leading-[36px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[30px]">£42,550</p>
      <Div17 />
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <Div18 />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#475569] text-[16px]">of £50,000 total limit</p>
    </div>
  );
}

function Div20() {
  return <div className="bg-[#10b981] h-full rounded-[6px] shrink-0 w-[226px]" data-name="div" />;
}

function Div21() {
  return <div className="bg-[#f97316] h-full rounded-[6px] shrink-0 w-[31px]" data-name="div" />;
}

function Div22() {
  return <div className="bg-[#f83b48] flex-[1_0_0] h-full min-h-px min-w-px rounded-[6px]" data-name="div" />;
}

function Div23() {
  return (
    <div className="content-stretch flex h-[6px] items-start overflow-clip relative rounded-[16777200px] shrink-0 w-full" data-name="div">
      <Div20 />
      <Div21 />
      <Div22 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#10b981] rounded-[9999px] shrink-0 size-[10px]" data-name="Container" />;
}

function Div24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.148px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container3 />
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">Unused</p>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Div24 />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">£42,550</p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#f97316] rounded-[9999px] shrink-0 size-[10px]" data-name="Container" />;
}

function Div26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.148px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container4 />
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">Credit Cards</p>
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Div26 />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">£2,450</p>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#f83b48] rounded-[9999px] shrink-0 size-[10px]" data-name="Container" />;
}

function Div28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.148px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container5 />
        <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">Overdrafts</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Div28 />
      <p className="css-ew64yg font-['FT_Polar:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px]">£5,000</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Dashboard">
      <Div25 />
      <Div27 />
      <Div29 />
    </div>
  );
}

function Div30() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
        <Div19 />
        <Div23 />
        <Dashboard />
      </div>
    </div>
  );
}

function Div31() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <Div16 />
      <Div30 />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[20px] left-[32.5px] not-italic text-[#0046ad] text-[14px] text-center top-[0.5px] translate-x-[-50%]">See More</p>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-0 relative size-full">
          <p className="css-ew64yg font-['FT_Polar:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[20px]">Recent Transactions</p>
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function ArrowDownLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowDownLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDownLeft">
          <path d={svgPaths.p2211a100} fill="var(--fill-0, #059669)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ArrowDownLeft />
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['FT_Polar:Regular',sans-serif] gap-[4px] items-start leading-[22px] not-italic relative w-full">
        <p className="css-g0mm18 h-[22px] overflow-hidden relative shrink-0 text-[#0f172a] text-[18px] text-ellipsis w-full">Card Settlements - BrewBank Merchant</p>
        <p className="css-4hzbpn relative shrink-0 text-[#64748b] text-[14px] w-full">06 Dec 2024 • Income</p>
      </div>
    </div>
  );
}

function Div34() {
  return (
    <div className="bg-white h-[81px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Icon3 />
          <Div33 />
          <p className="css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-right">-£820.40</p>
        </div>
      </div>
    </div>
  );
}

function Receipt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Receipt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Receipt">
          <path d={svgPaths.pd72cb72} fill="var(--fill-0, #2561EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#eaf3ff] relative rounded-[12px] shrink-0 size-[48px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Receipt />
      </div>
    </div>
  );
}

function Div35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['FT_Polar:Regular',sans-serif] gap-[4px] items-start leading-[22px] not-italic relative w-full">
        <p className="css-g0mm18 h-[22px] overflow-hidden relative shrink-0 text-[#0f172a] text-[18px] text-ellipsis w-full">Milk Supplier - DairyFresh Ltd</p>
        <p className="css-4hzbpn relative shrink-0 text-[#64748b] text-[14px] w-full">06 Dec 2024 • Suppliers</p>
      </div>
    </div>
  );
}

function Div36() {
  return (
    <div className="bg-white h-[81px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Icon4 />
          <Div35 />
          <p className="css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-right">-£820.40</p>
        </div>
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="div">
      <Div34 />
      <Div36 />
    </div>
  );
}

function Div38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div">
      <Div32 />
      <Div37 />
    </div>
  );
}

function Div39() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
        <Div11 />
        <Div14 />
        <Div31 />
        <Div38 />
      </div>
    </div>
  );
}

function HouseSimple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="HouseSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="HouseSimple">
          <path d={svgPaths.p2443c400} fill="var(--fill-0, #0046AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
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
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[17px] not-italic text-[#0046ad] text-[12px] text-center top-px translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container6 />
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

function Container7() {
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
      <Container7 />
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

function Container8() {
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
      <Container8 />
      <Text2 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User">
          <path d={svgPaths.p2402fb00} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
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
        <p className="absolute css-ew64yg font-['FT_Polar:Semibold',sans-serif] leading-[16px] left-[24px] not-italic text-[#64748b] text-[12px] text-center top-px translate-x-[-50%]">Account</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[66px] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name="Button">
      <Container9 />
      <Text3 />
    </div>
  );
}

function Container10() {
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
        <Container10 />
      </div>
    </div>
  );
}

export default function HomeV() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0046ad] items-start relative size-full to-[#000c45] to-[23.544%]" data-name="Home - V1">
      <Div10 />
      <Div39 />
      <TabBar />
    </div>
  );
}
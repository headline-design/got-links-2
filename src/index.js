import React from "react";
import { render } from "react-dom";
import {
  Header,
  SideNav,
  Tabs,
  Tab,
  PageTitleBar
} from "carbon-addons-iot-react";
import LogoTwitter from "@carbon/icons-react/lib/logo--twitter/24";
import Email from "@carbon/icons-react/lib/email/24";
import NavaidHelipad from "@carbon/icons-react/lib/navaid--helipad/24";
import Settings from "@carbon/icons-react/lib/settings/24";
import Forum from "@carbon/icons-react/lib/forum/24";
import Rocket from "@carbon/icons-react/lib/rocket/24";
import Rss from "@carbon/icons-react/lib/rss/24";
import Scales from "@carbon/icons-react/lib/scales/24";
import Send from "@carbon/icons-react/lib/send/24";
import InfrastructureClassic from "@carbon/icons-react/lib/infrastructure--classic/24";
import LogoGithub from "@carbon/icons-react/lib/logo--github/24";
import Wallet from "@carbon/icons-react/lib/wallet/24";
import Compare from "@carbon/icons-react/lib/compare/24";
import Fire from "@carbon/icons-react/lib/fire/24";
import ReportData from "@carbon/icons-react/lib/report--data/24";
import IotPlatform from "@carbon/icons-react/lib/iot--platform/24";
import Chat from "@carbon/icons-react/lib/chat/24";
import ChartAverage from "@carbon/icons-react/lib/chart--average/24";
import Finance from "@carbon/icons-react/lib/finance/24";
import FirewallClassic from "@carbon/icons-react/lib/firewall--classic/24";
import Tools from "@carbon/icons-react/lib/tools/24";
import LogoLinkedin from "@carbon/icons-react/lib/logo--linkedin/24";

const conf = {
  hasSideNav: false,
  skipto: "",
  appName: "Links",
  prefix:"HEADLINE",
  tenant: "TenantId: Acme",
  user: "JohnDoe@HEADLINE.com",
  actionItems: [
    {
      label: "email",
      btnContent:  <a href="mailto:contact@headline-inc.com" aria-label="email" class="Header__StyledGlobalAction-sc-14tpcyv-1 hzqpaE bx--header__action-1" type="button"><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="white" description="Icon" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path></svg></a>
    },
    {
      btnContent: (
<a href="https://twitter.com/headline_crypto/" aria-label="twitter" class="Header__StyledGlobalAction-sc-14tpcyv-1 hzqpaE bx--header__action-1" type="button"><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="white" description="Icon" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path></svg></a>
      ),
      label: "twitter"
    },
    {
      
      btnContent: (
        <a href="https://github.com/headline-design" aria-label="email" target="_blank" class="Header__StyledGlobalAction-sc-14tpcyv-1 hzqpaE bx--header__action-1" type="button"><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"></path></svg></a>
      ),
      label: "github"
    },
  ]
};
const links = [
    {
    icon: NavaidHelipad,
    isEnabled: true,
    metaData: {
      label: "HEADLINE Design",
      href: "https://github.com/headline-design",
      element: "a",
      target: "_blank"
    },
    linkContent: "HEADLINE Design"
  },
          {
        isEnabled: true,
        icon: Rocket,
        metaData: {
          label: "NFT Factory",
          href: "https://nftfactory.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "NFT Factory"
      },
        {
        isEnabled: true,
        icon: ChartAverage,
        metaData: {
          label: "Silo DeFi",
          href: "https://www.silodefi.com/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Silo DeFi"
      },
        {
        isEnabled: true,
        icon: Finance,
        metaData: {
          label: "HDX",
          href: "https://hdx.fi/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "HEADLINE Trust"
      },

  {
    icon: Settings,
    isEnabled: true,
    metaData: {
      label: "PIPELINE-UI",
      href: "https://www.pipeline-ui.com/",
      element: "a",
      target: "_blank"
    },
    linkContent: "PIPELINE-UI"
  },
    {
    icon: Wallet,
    isEnabled: true,
    metaData: {
      label: "AlgoPay",
      href: "https://www.algopay.finance/",
      element: "a",
      target: "_blank"
    },
    linkContent: "AlgoPay"
    },
    {
      icon: Compare,
      isEnabled: true,
      metaData: {
        label: "AlgoSwap",
        href: "https://www.algopay.finance/algoswap/",
        element: "a",
        target: "_blank"
      },
      linkContent: "AlgoSwap"
      },
      {
        isEnabled: true,
        icon: Rocket,
        metaData: {
          label: "Algo Astros",
          href: "https://algoastros.com/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Algo Astros"
      },
      {
        isEnabled: true,
        icon: Fire,
        metaData: {
          label: "Algo Burner",
          href: "https://algoburner.daotools.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Algo Burner - DAO Tools"
      },
      {
        isEnabled: true,
        icon: ReportData,
        metaData: {
          label: "Algo Vote",
          href: "https://daotools.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Algo Vote - DAO Tools"
      },
      {
        isEnabled: true,
        icon: Chat,
        metaData: {
          label: "Algo Chat",
          href: "https://algochat.daotools.org/",
          element: "a",
          target: "_blank"
        }, 
        isActive:false,
        linkContent: "Algo Chat - DAO Tools"
      },
      {
        isEnabled: true,
        icon: IotPlatform,
        metaData: {
          label: "ARC Minter",
          href: "https://arcminter.daotools.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "ARC Minter - DAO Tools"
      },
      {
        isEnabled: true,
        icon: FirewallClassic,
        metaData: {
          label: "Vaults Protocol",
          href: "https://vaults.algocloud.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Vaults Protocol"
      },
  {
    icon: Forum,
    isEnabled: true,
    metaData: {
      label: "FORUM",
      href: "https://www.forum.ax",
      element: "a",
      target: "_blank"
    },
    linkContent: "FORUM"
  },
  {
    icon: Scales,
    isEnabled: true,
    metaData: {
      label: "Libra Network",
      href: "https://www.libra-network.com/bias-barometer/",
      element: "a",
      target: "_blank"
    },
    linkContent: "Libra Network"
  },
      {
        isEnabled: true,
        icon: Tools,
        metaData: {
          label: "DAO Tools",
          href: "https://daotools.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "DAO Tools"
      },
  {
    icon: Settings,
    isEnabled: true,
    metaData: {
      label: "HEADLINE INC",
      href: "https://www.headline-inc.com",
      element: "a",
      target: "_blank"
    },
    linkContent: "HEADLINE INC"
  },
      {
        isEnabled: true,
        icon: LogoLinkedin,
        metaData: {
          label: "LogoLinkedin",
          href: "https://www.linkedin.com/company/hdlne",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "LinkedIn"
      },
  
      {
        isEnabled: true,
        icon: Rocket,
        metaData: {
          label: "Crunchbase",
          href: "https://www.crunchbase.com/organization/headline-inc",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Crunchbase"
      },
      {
        isEnabled: true,
        icon: Rss,
        metaData: {
          label: "Reddit",
          href: "https://www.reddit.com/r/HEADLINECrypto/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Reddit"
      },
      {
        isEnabled: true,
        icon: Send,
        metaData: {
          label: "Telegram",
          href: "https://t.me/headline_crypto",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Telegram"
      },
      {
        isEnabled: true,
        icon: LogoGithub,
        metaData: {
          label: "Github",
          href: "https://github.com/headline-design/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Github"
      },
  {
    isEnabled: true,
    icon: LogoTwitter,
    metaData: {
      label: "Twitter",
      href: "https://twitter.com/headline_crypto/",
      element: "a",
      target: "_blank"
    },
    isActive:false,
    linkContent: "Twitter"
  },
  
]
;

// const App = () => (
//   <React.Fragment>
//     <HeaderContainer
//       render={({ isSideNavExpanded, onClickSideNavExpand }) => (
//         <React.Fragment>
//           <Header
//             {...conf}
//             isSideNavExpanded={isSideNavExpanded}
//             onClickSideNavExpand={onClickSideNavExpand}
//           />
//           <SideNav
//             links={links}
//             isSideNavExpanded={isSideNavExpanded}
//             onClickSideNavExpand={onClickSideNavExpand}
//           />
//         </React.Fragment>
//       )}
//     />
//     <Tbl />
//   </React.Fragment>
// );
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSideNavExpanded: true };
  }
  render() {
    return (
      <React.Fragment>
        <Header
          {...conf}
          isSideNavExpanded={this.state.isSideNavExpanded}
          onClickSideNavExpand={() => {
            this.setState({ isSideNavExpanded: !this.state.isSideNavExpanded });
          }}
        />
        <SideNav
          links={links}
          isSideNavExpanded={true}
        />
        <footer aria-label="HEADLINE INC" href="https://twitter.com/headline_crypto/" label="HEADLINE INC" target="_blank" class="bx--side-nav__link disabled">  
        
        
        <svg
    id="Layer_1"
    width={200}
    height={50}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 115.70971 14.07114"
  >
    <path
      d="M20.71646,12.08583V13.573a.31245.31245,0,0,1-.06793.19919.26714.26714,0,0,1-.22139.08639H12.39937c-.21361,0-.3219-.11455-.3219-.34054V.53827c0-.21387.08628-.32236.25646-.32236H20.296c.1484,0,.22362.09613.22362.28566V1.91522c0,.22614-.10288.34076-.30586.34076H14.79629c-.18094,0-.26889.08066-.26889.24666V5.71547c0,.17843.07187.26522.21977.26522h3.743c.17018,0,.25646.096.25646.28558v1.487a.25179.25179,0,0,1-.052.172.24641.24641,0,0,1-.18818.0584H14.73056c-.13671,0-.20316.06875-.20316.21018V11.6085c0,.14152.05572.21027.17035.21027h5.74594A.23927.23927,0,0,1,20.71646,12.08583ZM72.09.21591H70.547c-.17024,0-.25655.10227-.25655.304V8.92805c0,.09293-.02256.14852-.06724.165-.04451.01733-.10433-.02241-.1766-.1151L64.77686.45913a.619.619,0,0,0-.18434-.1959.53184.53184,0,0,0-.2512-.04732H62.69978c-.181,0-.27281.10849-.27281.32236V13.55476a.27012.27012,0,0,0,.30559.30385h1.44477a.25505.25505,0,0,0,.28931-.30385V4.74253c0-.05679.01644-.08966.0501-.10052.03374-.01044.07068.019.1116.08751l5.61473,8.92263a.40319.40319,0,0,0,.19414.17837.70793.70793,0,0,0,.20829.02809h1.36243a.28858.28858,0,0,0,.21243-.07643.28274.28274,0,0,0,.0769-.20915V.48313C72.29726.30582,72.22755.21591,72.09.21591Zm-12.47648,0H57.65993c-.17014,0-.25646.10849-.25646.32236v12.9798a.4035.4035,0,0,0,.0679.25407.33483.33483,0,0,0,.27057.08647h1.70728a.42684.42684,0,0,0,.3111-.09478.44939.44939,0,0,0,.09309-.3193V.51992C59.85341.31818,59.77268.21591,59.61347.21591ZM55.247,11.81877H49.86218c-.11462,0-.17038-.06875-.17038-.21027V.51992c0-.20174-.08073-.304-.23986-.304H47.49842c-.17023,0-.25653.10849-.25653.32236v12.9798a.40336.40336,0,0,0,.068.25407.31044.31044,0,0,0,.254.08647h7.66668a.26749.26749,0,0,0,.22135-.08639.31215.31215,0,0,0,.0679-.19919v-1.4872A.23924.23924,0,0,0,55.247,11.81877ZM44.454,3.4072A8.57742,8.57742,0,0,1,45.128,6.96384a8.82539,8.82539,0,0,1-.71505,3.71289,5.11835,5.11835,0,0,1-2.17113,2.36352,7.41971,7.41971,0,0,1-3.658.81836H35.41564c-.22464,0-.33849-.13314-.33849-.39582V.55669A.36749.36749,0,0,1,35.154.29241a.36569.36569,0,0,1,.26161-.0765h2.60187c.29667,0,.52619.00623.68231.01844a7.69742,7.69742,0,0,1,3.65689.87338A4.9969,4.9969,0,0,1,44.454,3.4072ZM42.563,7.00061a7.19667,7.19667,0,0,0-.45882-2.81408,2.97733,2.97733,0,0,0-1.407-1.52786,5.38791,5.38791,0,0,0-2.40864-.47615h-.6074c-.10365,0-.154.08073-.154.24681V11.682c0,.1415.06645.21026.20318.21026h.41052a5.73309,5.73309,0,0,0,2.49073-.4763,3.01031,3.01031,0,0,0,1.4564-1.55555A7.23618,7.23618,0,0,0,42.563,7.00061Zm-9.38681,6.40411a.46261.46261,0,0,1,0,.3.19369.19369,0,0,1-.19029.15389H30.9995a.29538.29538,0,0,1-.30527-.24617l-.95208-2.97369a.277.277,0,0,0-.05546-.13423.199.199,0,0,0-.14819-.04237H25.27007a.187.187,0,0,0-.18733.15794l-.98487,3.0111a.2493.2493,0,0,1-.094.17038.34745.34745,0,0,1-.21138.057H22.20011a.20442.20442,0,0,1-.198-.13449.46991.46991,0,0,1,.00778-.338L26.14684.55358a.72059.72059,0,0,1,.14207-.26117.36582.36582,0,0,1,.26164-.0765h2.052A.46673.46673,0,0,1,29.072.59027ZM29.08526,8.08641,27.50953,3.18513c-.03087-.0804-.06641-.12149-.10538-.12149-.0386,0-.074.04706-.10514.14L25.7066,8.08688c-.03646.10873-.0386.18642-.00641.23117a.14859.14859,0,0,0,.12814.049H28.9637a.13906.13906,0,0,0,.11753-.0457A.27983.27983,0,0,0,29.08526,8.08641Zm54.15158,3.73236h-5.746c-.11463,0-.17031-.06875-.17031-.21027V8.19385c0-.14143.06645-.21018.20318-.21018h3.77591a.24655.24655,0,0,0,.18825-.0584.25223.25223,0,0,0,.05192-.172v-1.487c0-.18954-.08629-.28558-.25645-.28558h-3.743c-.1479,0-.21977-.08679-.21977-.26522V2.50264c0-.166.088-.24666.26891-.24666h5.41745c.203,0,.30592-.11462.30592-.34076V.50157c0-.18953-.07522-.28566-.22367-.28566H75.127c-.17015,0-.25645.10849-.25645.32236v12.9798c0,.226.10832.34054.32193.34054h8.02773a.267.267,0,0,0,.22143-.08647.31238.31238,0,0,0,.0679-.19911v-1.4872A.23924.23924,0,0,0,83.23684,11.81877ZM9.39543.22677H7.454a.25223.25223,0,0,0-.25192.252V3.84083a.383.383,0,0,1-.3826.38256H2.828a.383.383,0,0,1-.38261-.38256V.4616A.25221.25221,0,0,0,2.19342.20969H.252A.25224.25224,0,0,0,0,.4616V13.61244a.25224.25224,0,0,0,.252.25192H2.19342a.25222.25222,0,0,0,.25192-.25192V7.14753A.383.383,0,0,1,2.828,6.765H6.81943a.383.383,0,0,1,.3826.38256v6.482a.25221.25221,0,0,0,.25192.25192H9.39543a.2522.2522,0,0,0,.2519-.25192V.47876A.25221.25221,0,0,0,9.39543.22677ZM90.91011.2211q.22662,0,.2265.29391V13.4457a.44286.44286,0,0,1-.08889.31228.40536.40536,0,0,1-.29957.09175H89.06472a.31784.31784,0,0,1-.25889-.08263.39707.39707,0,0,1-.06479-.24788V.53338q0-.31206.24282-.31228Zm-.162,13.66606h-1.6834a.3464.3464,0,0,1-.28857-.097.43549.43549,0,0,1-.07266-.271V.53335c0-.28916.15234-.34981.28037-.34981h1.92627c.12041,0,.264.05757.264.3315V13.44566a.47944.47944,0,0,1-.09932.33837A.43651.43651,0,0,1,90.74813,13.88716ZM88.98387.25854c-.08818,0-.20537.02842-.20537.27481V13.51919a.36366.36366,0,0,0,.05684.22471.28682.28682,0,0,0,.22939.06826h1.6834a.37453.37453,0,0,0,.27275-.08027.41258.41258,0,0,0,.07823-.28623V.515c0-.22983-.10782-.2565-.189-.2565ZM103.2124.2211q.19437,0,.19437.25715v13.096a.25338.25338,0,0,1-.27522.27553h-1.34342a.67758.67758,0,0,1-.2024-.02764.39356.39356,0,0,1-.18607-.17437L95.86347,4.72124c-.04327-.07351-.0837-.10394-.12153-.09189-.03784.01235-.0565.04911-.0565.11027V13.556a.24377.24377,0,0,1-.27522.29376H93.98569a.25849.25849,0,0,1-.29128-.29376V.53338q0-.31206.25888-.31228h1.61864a.50717.50717,0,0,1,.24283.046.60363.60363,0,0,1,.17829.19275L101.189,8.98232q.11312.14732.18633.11938.07269-.02734.07282-.17437V.515q0-.29353.24281-.29391Zm-.08077,13.66606h-1.34356a.72239.72239,0,0,1-.21357-.0293.42094.42094,0,0,1-.20625-.18955L95.83143,4.741c-.03691-.06255-.065-.08218-.07793-.07588-.00732.00234-.03047.00981-.03047.07456V13.5561a.2798.2798,0,0,1-.31289.33106H93.98573a.295.295,0,0,1-.32871-.33106V.53335c0-.28916.16113-.34981.29619-.34981h1.61865a.542.542,0,0,1,.26133.051.62839.62839,0,0,1,.19131.20464l5.19638,8.52349c.058.075.10957.1166.14122.104.04013-.01523.04863-.08437.04863-.13945V.515c0-.27393.15234-.3315.28008-.3315h1.52168c.10576,0,.23173.05113.23173.29473v13.096a.29029.29029,0,0,1-.31259.31289ZM95.75877,4.58921c.04688,0,.09288.03779.13682.11294l5.53594,8.926a.36274.36274,0,0,0,.16494.15821.65505.65505,0,0,0,.1916.02578h1.34356a.21615.21615,0,0,0,.23759-.23789V.47827c0-.197-.08935-.21973-.15673-.21973h-1.52168c-.08789,0-.20508.02667-.20508.2565V8.9272c0,.11455-.03252.18515-.097.20976-.06885.02549-.14209-.01816-.22969-.13183L95.96122.4793a.56628.56628,0,0,0-.16495-.17945.47313.47313,0,0,0-.22441-.04131H93.95321c-.09492,0-.22119.02842-.22119.27481V13.5561a.22224.22224,0,0,0,.25371.25606h1.42441a.24861.24861,0,0,0,.18662-.06094.25369.25369,0,0,0,.05127-.19306V4.73965c0-.09859.04483-.13389.08262-.146A.0938.0938,0,0,1,95.75877,4.58921ZM112.53631.34049a4.80909,4.80909,0,0,1,1.42453.845,4.69,4.69,0,0,1,1.03608,1.25824,4.549,4.549,0,0,1,.53411,1.54288.60762.60762,0,0,1,.008.33051.2128.2128,0,0,1-.17.09189l-1.8454.14688c-.0863,0-.1402-.02117-.16171-.06425a.96883.96883,0,0,1-.06478-.1929,3.34082,3.34082,0,0,0-.79326-1.68049,2.05165,2.05165,0,0,0-1.58624-.65206,2.39175,2.39175,0,0,0-2.13695,1.21222,7.39985,7.39985,0,0,0-.7606,3.82045,7.50452,7.50452,0,0,0,.73651,3.78368,2.4176,2.4176,0,0,0,2.20949,1.21208,2.68935,2.68935,0,0,0,1.71583-.56017,3.97368,3.97368,0,0,0,1.16565-1.8828c.03239-.09762.12931-.1285.29128-.09174l1.37581.33051a.246.246,0,0,1,.12155.092.46846.46846,0,0,1,.02436.31228,4.69669,4.69669,0,0,1-.34.93655,5.86485,5.86485,0,0,1-.63128,1.02858,4.8145,4.8145,0,0,1-2.21779,1.6164,5.08648,5.08648,0,0,1-4.45968-.62457,5.574,5.574,0,0,1-1.85343-2.47031,9.8094,9.8094,0,0,1-.64736-3.71929,9.51412,9.51412,0,0,1,.64736-3.69194A5.381,5.381,0,0,1,108.0038.88242a4.81614,4.81614,0,0,1,2.84907-.84495A4.67822,4.67822,0,0,1,112.53631.34049Zm-1.66738,13.73065a4.76449,4.76449,0,0,1-2.8793-.88945,5.6347,5.6347,0,0,1-1.86621-2.48643,9.89363,9.89363,0,0,1-.6498-3.73315,9.60121,9.60121,0,0,1,.6501-3.70649A5.44153,5.44153,0,0,1,107.982.85181,4.87431,4.87431,0,0,1,110.85282,0a4.73515,4.73515,0,0,1,1.69687.30542h0a4.86332,4.86332,0,0,1,1.43555.85166,4.75022,4.75022,0,0,1,1.04414,1.26812,4.59656,4.59656,0,0,1,.53848,1.55551.60691.60691,0,0,1,.0041.3545.24851.24851,0,0,1-.19775.111l-1.84776.14692h-.00058c-.104,0-.16934-.02856-.19747-.08481a1.00449,1.00449,0,0,1-.06767-.20039,3.321,3.321,0,0,0-.78428-1.66436,2.02439,2.02439,0,0,0-1.55889-.64,2.366,2.366,0,0,0-2.10527,1.19473,7.40322,7.40322,0,0,0-.75469,3.80054,7.51194,7.51194,0,0,0,.731,3.76435,2.39206,2.39206,0,0,0,2.17764,1.19385,2.6636,2.6636,0,0,0,1.69248-.55225,3.95568,3.95568,0,0,0,1.15342-1.86562c.02695-.08145.10722-.16787.33486-.116l1.37666.33077a.2825.2825,0,0,1,.14209.10517.48928.48928,0,0,1,.03223.34043,4.7589,4.7589,0,0,1-.34336.94776,5.92611,5.92611,0,0,1-.63545,1.03505,4.848,4.848,0,0,1-2.23506,1.62891A4.75056,4.75056,0,0,1,110.86893,14.07114ZM110.85282.075a4.80149,4.80149,0,0,0-2.82744.838,5.36846,5.36846,0,0,0-1.83252,2.37158,9.52678,9.52678,0,0,0-.64424,3.67749,9.81792,9.81792,0,0,0,.64453,3.705,5.56028,5.56028,0,0,0,1.841,2.4542,5.04769,5.04769,0,0,0,4.4247.61963,4.77525,4.77525,0,0,0,2.20049-1.60371,5.84107,5.84107,0,0,0,.62725-1.02217,4.68159,4.68159,0,0,0,.3375-.929c.02431-.18076.00381-.25283-.01787-.281a.21313.21313,0,0,0-.10166-.07881L114.13,9.49614c-.2083-.04687-.23731.039-.247.06709a4.027,4.027,0,0,1-1.178,1.90078,2.73906,2.73906,0,0,1-1.73877.56807,2.46252,2.46252,0,0,1-2.24151-1.23017,7.573,7.573,0,0,1-.74209-3.803A7.467,7.467,0,0,1,108.749,3.1585a2.43627,2.43627,0,0,1,2.16855-1.22989,2.09619,2.09619,0,0,1,1.614.66431A3.39178,3.39178,0,0,1,113.334,4.2917a.91305.91305,0,0,0,.06152.18281c.01788.03633.0794.0438.128.0438l1.84248-.14663a.1787.1787,0,0,0,.14033-.07266c.0126-.02314.02813-.09316-.0123-.30542a4.53475,4.53475,0,0,0-.52969-1.53149,4.68418,4.68418,0,0,0-1.02773-1.24819,4.79785,4.79785,0,0,0-1.41387-.83848h0A4.66,4.66,0,0,0,110.85282.075Z"
      fill="#f4f4f4"
    />
  </svg>
        
        <span class="bx--side-nav__link-text footer-text">HEADLINE is a Texas-based fintech startup and media company. 
        <br />We build software on the Algorand blockchain. Copyright © 2021 HEADLINE INC. Built with React.js and Carbon Design</span></footer>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));

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

FirewallClassic

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
      label: "HEADLINE INC",
      href: "https://www.headline-inc.com",
      element: "a",
      target: "_blank"
    },
    linkContent: "HEADLINE INC"
  },
  {
    icon: Settings,
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
        icon: InfrastructureClassic,
        metaData: {
          label: "Algo Cloud",
          href: "https://algocloud.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "Algo Cloud"
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
        icon: ChartAverage,
        metaData: {
          label: "AlgOptions",
          href: "https://www.algoptions.org/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "AlgOptions"
      },
      {
        isEnabled: true,
        icon: Finance,
        metaData: {
          label: "HEADLINE Trust",
          href: "/",
          element: "a",
          target: "_blank"
        },
        isActive:false,
        linkContent: "HEADLINE Trust"
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
  {
    isEnabled: true,
    metaData: {
      label: "HEADLINE INC",
      href: "https://twitter.com/headline_crypto/",
      element: "h6",
      target: "_blank"
    },
    isActive:false,
    linkContent: ""
  },
  {
    isEnabled: true,
    metaData: {
      label: "HEADLINE INC",
      href: "https://twitter.com/headline_crypto/",
      element: "footer",
      target: "_blank"
    },
    isActive:false,
    linkContent: "HEADLINE is a Texas-based fintech startup and media company. We build software on the Algorand blockchain. Copyright © 2021 HEADLINE INC. Built with React.js and Carbon Design"
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
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));

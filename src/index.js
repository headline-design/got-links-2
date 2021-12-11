import React from "react";
import { render } from "react-dom";
import {
  Header,
  HeaderContainer,
  SideNav,
  Tabs,
  Tab,
  PageTitleBar
} from "carbon-addons-iot-react";
import Avatar from "@carbon/icons-react/lib/user--avatar/20";
import NotificationOn from "@carbon/icons-react/lib/notification/20";
import AppSwitcher from "@carbon/icons-react/lib/app-switcher/24";
import Chip from "@carbon/icons-react/lib/chip/24";
import { Tbl } from "./tbl";
const conf = {
  hasSideNav: true,
  skipto: "",
  appName: "test",
  tenant: "TenantId: Acme",
  user: "JohnDoe@ibm.com",
  actionItems: [
    {
      label: "alerts",
      btnContent: <NotificationOn fill="white" description="Icon" />
    },
    {
      btnContent: (
        <React.Fragment>
          <Avatar fill="white" description="Icon" />
        </React.Fragment>
      ),
      label: "user"
    }
  ]
};
const links = [
  {
    icon: AppSwitcher,
    isEnabled: true,
    metaData: {
      label: "Devices",
      href: "https://google.com",
      element: "a",
      target: "_blank"
    },
    linkContent: "Boards"
  },
  {
    isEnabled: true,
    icon: Chip,
    metaData: {
      label: "Devices",
      href: "https://google.com",
      element: "a",
      target: "_blank"
    },
    isActive:true,
    linkContent: "Devices"
  }
];

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
    this.state = { isSideNavExpanded: false };
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
          headerPanel={{
            content: React.forwardRef((props, ref) => (
              <div>Some content </div>
            )),
          }}
        />
        <SideNav
          links={links}
          isSideNavExpanded={true}
        />
        <div style={{ marginTop: "4rem", marginLeft: "4rem" }}>
          {/* <div class="bx--grid">
            <div class="bx--row">
              <Tabs
                ariaLabel="listbox"
                iconDescription="show menu options"
                role="navigation"
                selected={1}
                tabContentClassName="tab-content"
                triggerHref="#"
              >
                <Tab
                  href="#"
                  label="Tab label 1"
                  role="presentation"
                  selected={false}
                  tabIndex={0}
                >
                  Content for first tab goes here.
                </Tab>
                <Tab
                  href="#"
                  label="Tab label 2"
                  role="presentation"
                  selected={false}
                  tabIndex={0}
                >
                  <div class="bx--grid bx--grid--condensed">
                    <div class="bx--row">
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                    </div>
                    <div class="bx--row">
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                      <div class="bx--col">
                        <div class="outside">
                          <div class="inside">1/4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div> */}
          <PageTitleBar
            breadcrumb={[<a href="#">test</a>, <a href="#">testb</a>]}
            className={null}
            collapsed={false}
            description={
              <span style={{ background: "red" }}>last updated time:</span>
            }
            editable={false}
            extraContent={null}
            isLoading={false}
            rightContent={<div>SOme COntent </div>}
            tabs={null}
            title="Page title"
          />
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));

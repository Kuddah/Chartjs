import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import UploadButton from '../Upload';
import {
  SubMenu,
  SidebarHeader,
  SidebarContent
} from 'react-pro-sidebar';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart
} from 'react-icons/fa';
import sidebarBg from '../assets/bg.png';

export default function Sidebar({ 
    image,
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange,
    handleFileUpload,
})

{
  return (
    <ProSidebar
    image={image ? sidebarBg : false}
    collapsed={collapsed}
    toggled={toggled}
    onToggle={handleToggleSidebar}
    breakPoint="md"
    >
        <SidebarHeader>
    <Menu iconShape="circle">
    {collapsed ? (
    <MenuItem
        icon={<FaAngleDoubleRight />}
        onClick={handleCollapsedChange}
    ></MenuItem>
    ) : (
    <MenuItem
        suffix={<FaAngleDoubleLeft />}
        onClick={handleCollapsedChange}
    >
        <div
        style={{
            padding: '9px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 15,
            letterSpacing: '1px'
        }}
        >
        Chart Builder
        </div>
    </MenuItem>
    )}
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">NEW</span>}
          >
            <UploadButton onFileUpload={handleFileUpload} />
            Dashboard
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          <MenuItem icon={<FaGem />}>
            Components 
          </MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'With Suffix'}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'With Prefix'}
            icon={<FaHeart />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title={'Multi Level'} icon={<FaList />}>
            <MenuItem>Submenu 1 </MenuItem>
            <MenuItem>Submenu 2 </MenuItem>
            <SubMenu title={'Submenu 3'}>
              <MenuItem>Submenu 3.1 </MenuItem>
              <MenuItem>Submenu 3.2 </MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>            
    </ProSidebar>
  );
}

import { Component, Vue, Prop } from 'vue-property-decorator';
import { Menu, MenuItem, Icon, Submenu, MenuGroup } from '@idg/iview';
import { IDefaultState, IHoverState, ISelectedState} from '../interfaces';
import '@idg/iview/dist/styles/iview.css';
import insertCss from 'insert-css';


@Component
export default class MenuComponent extends Vue {
  @Prop({ default: 'vertical' }) private mode: string;
  @Prop({ default: "1"}) private activeName: string;
  @Prop({ default: () => ({
    backgroundColor: "#FFFFFF",
    textColor: "#515a6e",
    textSize: 12,
    width: 200,
    height: 60,
  }) }) private defaultState: IDefaultState;

  @Prop({ default: () => ({
    underline: true,
    backgroundColor: "#FFFFFF",
    textColor: '#515a6e',
    borderBottomColor: "#2d8cf0",
  }) }) private selectedState: ISelectedState;

  @Prop({ default: () => ({
    backgroundColor: "#FFFFFF",
    textColor: '#2d8cf0',
    underline: true,
    borderBottomColor: "#515a6e",
  }) }) private hoverState: IHoverState;


  private handlePropsStyling(){
    insertCss(`
      .ivu-menu{
        position: inherit;
      }
      .ivu-menu-horizontal{
        height: ${this.defaultState.height + "px"}  !important;
      }
      .ivu-select-dropdown{
        margin-top: ${this.defaultState.height/2-25 + "px"}  !important;
        padding: 0px !important;
      }
      .menuitem-text:hover{
        text-decoration: ${this.hoverState.underline ? "underline" : "none"} !important;
      }
      .ivu-menu-item-selected .menuitem-text{
        text-decoration: ${this.selectedState.underline ? "underline" : "none"} !important;
      }
      .ivu-menu-item, 
      .ivu-menu-submenu{
        background-color: ${this.defaultState.backgroundColor} !important;
        color: ${this.defaultState.textColor} !important;
        font-size: ${this.defaultState.textSize + "px"} !important;
        width: ${this.defaultState.width< 300 ? "inherit": this.defaultState.width + "px"} !important;
      }
      .ivu-menu-horizontal > .ivu-menu-item,
      .ivu-menu-horizontal > .ivu-menu-submenu{
        display: flex;
        align-items: center;
        width: ${this.defaultState.width + "px"} !important;
      }
      .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item{
        font-size: ${this.defaultState.textSize + "px"} !important;
      }
      .ivu-menu-horizontal .ivu-menu-item-group-title{
        background-color: ${this.defaultState.backgroundColor} !important;
        font-size: ${this.defaultState.textSize + "px"} !important;
      }
      .ivu-menu-horizontal .ivu-menu-item-selected{
        background-color: ${this.selectedState.backgroundColor} !important;
        border-bottom: 2px solid ${this.selectedState.borderBottomColor} !important;
      }
      .ivu-menu-horizontal .ivu-menu-submenu:hover,
      .ivu-menu-horizontal .ivu-menu-item:hover{
        background-color: ${this.hoverState.backgroundColor} !important;
        border-bottom: 2px solid ${this.hoverState.borderBottomColor} !important;
        color: ${this.hoverState.textColor} !important;
      }
      .ivu-menu-horizontal:hover.ivu-menu-item-active{
        border-bottom: 2px solid ${this.selectedState.borderBottomColor} !important;
        color: ${this.selectedState.textColor} !important;
      }
      .ivu-menu-horizontal .ivu-menu-submenu .ivu-menu-item{
        border-bottom: 2px solid ${this.defaultState.backgroundColor} !important;
      }
      .ivu-menu-horizontal .ivu-menu-item-active,
      .ivu-menu-horizontal .ivu-menu-item-active .ivu-menu-item-active{
        border-bottom: 2px solid ${this.selectedState.borderBottomColor} !important;
      }
      .ivu-menu-horizontal .ivu-menu-item-active .ivu-menu-item-active{
        color: ${this.selectedState.textColor} !important;
        text-decoration: ${this.selectedState.underline ? "underline" : "none"} !important;
      }
      .ivu-menu-vertical .ivu-menu-item-group-title{
        background-color: ${this.defaultState.backgroundColor} !important;
        font-size: ${this.defaultState.textSize + "px"} !important;
        padding-left: 24px !important;
      }
      .ivu-menu-vertical > .ivu-menu-item,
      .ivu-menu-vertical > .ivu-menu-submenu,
      .ivu-menu-vertical > .ivu-menu-submenu > .ivu-menu-item{
        padding: ${this.defaultState.height  + "px"} 0px !important;
        font-size: ${this.defaultState.textSize + "px"} !important;
      }
      .ivu-menu-vertical > .ivu-menu-submenu > .ivu-menu-item{
        padding: ${this.defaultState.height/2  + "px"} 0px !important;
        font-size: ${this.defaultState.textSize + "px"} !important;
      }
      .ivu-menu-vertical .ivu-menu-item-selected{
        background-color: ${this.selectedState.backgroundColor} !important;
        text-decoration: ${this.selectedState.underline ? "underline" : "none"} !important;
      }
      .ivu-menu-vertical .ivu-menu-item{
        padding-left: 24px !important;
      }
      .ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
        background-color: ${this.selectedState.borderBottomColor} !important;
      }
      .ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
        background: ${this.selectedState.borderBottomColor} !important;
      }
      .ivu-menu-vertical .ivu-menu-submenu-title:hover{
        color: ${this.hoverState.textColor} !important;
      }
      .ivu-menu-vertical .ivu-menu-item:hover:not(.ivu-menu-item-selected){
        background-color: ${this.hoverState.backgroundColor} !important;
        color: ${this.hoverState.textColor} !important;
        border-right: 2px solid ${this.hoverState.borderBottomColor} !important;
      }
    `)
  }
  
  mounted() {
    this.handlePropsStyling();
  }

  change(){
    console.log('change');
  }

  render() {
    return (
      <div ref='container'>
        <Menu mode={this.mode} active-name={this.activeName} theme='light'>
          <MenuItem name='1' >
            <Icon type='ios-paper' />
            <span class="menuitem-text">内容管理</span>
          </MenuItem>
          <MenuItem name='2'>
            <Icon type='ios-people' />
            <span class="menuitem-text"> 用户管理</span>
          </MenuItem>
          <Submenu name='3'>
            <template slot='title'>
              <Icon type='ios-stats' />
              <span class="menuitem-text">统计分析</span>
            </template>
            <MenuGroup title='使用'>
              <MenuItem name='3-1' class="menuitem-text">新增和启动</MenuItem>
              <MenuItem name='3-2' class="menuitem-text">活跃分析</MenuItem>
              <MenuItem name='3-3' class="menuitem-text">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title='留存'>
              <MenuItem name='3-4' class="menuitem-text">用户留存</MenuItem>
              <MenuItem name='3-5' class="menuitem-text">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name='4'>
            <Icon type='ios-construct' />
            <span class="menuitem-text">综合设置</span>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

import { IDefaultState, ISelectedState, IHoverState } from 'packages/menu/interfaces';
import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: ['component.menu.MenuItem'],
})
export default class MenuPage extends Vue {
  private mode: string = 'horizontal';             // mode = 'vertical' | 'horizontal';
  private activeName: string = '1';               // activeName = '1' | '2' | '3' default: '1';

  private defaultState: IDefaultState = {
    backgroundColor: "#282A35",
    textColor: "#E5E5E5",
    textSize: 18,
    width: 300,
    height: 60,
  };

  private hoverState: IHoverState = {
    backgroundColor: "#000000",
    textColor: '#FFFFFF',
    underline: true,
    borderBottomColor: "#04AA6D",
  };

  private selectedState: ISelectedState = {
    underline: true,
    backgroundColor: "#04AA6D",
    textColor: "#FFFFFF",
    borderBottomColor: "#FC0",
  };

  public render() {
    return (
      <div>
        <menu-item 
        mode={this.mode}
        activeName = {this.activeName}
        defaultState={this.defaultState}
        hoverState = {this.hoverState}
        selectedState={this.selectedState}
        />
      </div>

    );
  }
 }

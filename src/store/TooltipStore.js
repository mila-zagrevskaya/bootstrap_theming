import { makeObservable, observable, action } from "mobx";

export class TooltipStore {
  isShowTooltip = false;
  activeTooltip = 0;

  elementParams = {
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  };

  tooltipParams = {};

  constructor() {
    makeObservable(this, {
      isShowTooltip: observable,
      elementParams: observable,
      tooltipParams: observable,
      toggleTooltip: action.bound,
      setElementParams: action.bound,
      setTooltipParams: action.bound,
    });
  }

  setElementParams(element) {
    this.elementParams = element;
  }

  setTooltipParams = (tooltipParams) => {
    // console.log('tooltipParams', tooltipParams);
    const tooltipPosition = tooltipParams;
    // console.log('tooltipPosition', tooltipPosition);
    return tooltipPosition;
  };

  toggleTooltip() {
    this.isShowTooltip = !this.isShowTooltip;
  }
}

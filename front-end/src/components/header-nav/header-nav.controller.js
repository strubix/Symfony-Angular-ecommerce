export default class HeaderNavController {
  constructor() {
    this.dropMenu = function(object) {
      const icon = object.target.attributes[0];
      if(icon.value == "img/drop.svg") {
        this.console();
        icon.value = "img/hamburger.svg";
      } else {
        icon.value = "img/drop.svg";
      }
    };

    this.console = function (){
      console.log('drop menu');
    }
  }

}
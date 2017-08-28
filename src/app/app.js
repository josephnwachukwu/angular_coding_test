import angular from 'angular';

import '../style/app.css';

const app = { controller: AppCtrl,
              controllerAs: 'vm',
              template: require('./app.html')
            }

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/josephnwachukwu/angular_coding_test';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .component('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
import angular from 'angular';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import HeaderNav from './components/header-nav/header-nav';

const components = 'app.components';

angular.module(components, [])
    .component('home', Home)
    .component('navbar', Navbar)
    .component('headerNav', HeaderNav)
;

export default components;
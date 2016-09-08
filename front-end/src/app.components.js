import angular from 'angular';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import HeaderNav from './components/header-nav/header-nav';
import Footer from './components/footer-component/footer-component';

const components = 'app.components';

angular.module(components, [])
    .component('home', Home)
    .component('navbar', Navbar)
    .component('headerNav', HeaderNav)
    .component('footerComponent', Footer)
;

export default components;
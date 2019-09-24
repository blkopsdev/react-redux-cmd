import React, {Fragment} from 'react';

// Import routing components
import {Route, Switch} from 'react-router-dom';

// Import custom components

/**
 * User components
 */
import UserLayout from '../components/user/common/UserLayout';  // Layout for user pages
import Home from '../containers/user/HomeContainer';
import NotFound from '../components/error/NotFound';

/**
 * Admin components
 */
import AdminLayout from '../components/admin/common/AdminLayout';  // Layout for admin pages
import Authentication from './Authentication';
import LoginForm from '../containers/admin/auth/LoginContainer';
import Pages from '../containers/admin/PagesContainer';
import EditPages from '../containers/admin/EditPagesContainer';
import Categories from '../containers/admin/CategoriesContainter';
import EditCategories from '../containers/admin/EditCategoriesContainer';
import Template from '../containers/admin/TemplateContainer';
import Dashboard from '../components/admin/Dashboard';

const userLayout = Comp => props => <UserLayout><Comp {...props}/></UserLayout>
const adminLayout = Comp => props => <AdminLayout><Comp {...props}/></AdminLayout>

const Router = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={userLayout(Home)}/>

      <Authentication path="/admin/dashboard" component={adminLayout(Dashboard)}/>
      <Authentication path="/admin/pages/edit" component={adminLayout(EditPages)}/>
      <Authentication path="/admin/pages" component={adminLayout(Pages)}/>
      <Authentication path="/admin/categories/edit" component={adminLayout(EditCategories)}/>
      <Authentication path="/admin/categories" component={adminLayout(Categories)}/>
      <Authentication path="/admin/template" component={adminLayout(Template)}/>
      <Route path="/admin" component={LoginForm}/>

      <Route component={NotFound}/>
    </Switch>
  </Fragment>
);

export default Router;

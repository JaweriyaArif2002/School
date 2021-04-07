import React from 'react';

import {Route} from 'react-router-dom';
import {Router} from 'react-router-dom'
import history from '../history'
// import {Router} from 'react-router-dom'
// import history from '../history'
import Login from '../components/login'
import Home from '../components/home'
import Department from '../AllForms/Department'
import ClassApp from '../AllForms/class'
import Fee from '../AllForms/Fee'
import Index from '../AllForms/index.component';
import Edit from '../AllForms/edit.department';
import EditClass from '../AllForms/edit.class';
import Option from '../AllForms/option';
import classRow from '../AllForms/classRow'
import feesType from '../AllForms/feeType'
import createVoucher from '../AllForms/createVoucher'
import Admission from '../AllForms/Admission'
import admissionRow from '../AllForms/admissionRow'
import createDues from '../AllForms/createDues'
import RegDetail from '../AllForms/registrationDetails'
class AppRouter extends React.Component{
    render(){
        return(
            // <Router history={history}>
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/Department" component={Department}/>
                <Route path="/Class" component={ClassApp}/>
                <Route path="/Fee" component={Fee}/>
                <Route path="/Index" component={Index}/>
                <Route path='/edit/:id' component={Edit} />
                <Route path='/EditClass/:id' component={EditClass} /> 
                <Route path='/option' component={Option} /> 
                <Route path='/classRow' component={classRow}/>
                <Route path='/feesType' component={feesType}/>
                <Route path='/createVoucher' component={createVoucher}/>
                <Route path='/Admission' component={Admission}/>
                <Route path='admissionRow' component={admissionRow}/>
                <Route path='/createDues' component={createDues}/>
                <Route path='/RegDetail' component={RegDetail}/>
           
            </Router>
        )
    }
}
export default AppRouter
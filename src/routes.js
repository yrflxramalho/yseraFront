import {Route, BrowserRouter, Switch} from 'react-router-dom'
import React from 'react';

import Main from './Pages/Main'
import Layout from './Components/Layout'
import Calculate from './Pages/Calculate';
import Help from './Pages/Help';

function Routes() {
	return(
		
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path='/' component={ Main } />
					<Route exact path='/calculate' component={ Calculate } />
					<Route exact path='/help' component={ Help } />
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
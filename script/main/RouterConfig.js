/**
 * Created by mlamp on 2017/9/14.
 */
import {
    React,
    ReactDOM,
    Provider,
    Router,
    Route,
    IndexRoute,
    storeCreateByReducer,
    historyCreateByStore
} from '../common/Util';
import {reducers} from './reducers'
export default class RouterConfig{
   init(){
       let store = storeCreateByReducer(reducers);
       let history = historyCreateByStore(store);
       let routes =
           <Route path="/" component={Home}>
               <Route path="Topics" component={Topics} />
           </Route>;
       ReactDOM.render(
           <Provider store={store}>
               <Router history={history} routes={routes}/>
           </Provider>,
           document.querySelector('#main')
       )
   }

}
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ReduxDemo/>
            </div>
        )
    }
}

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)
const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
/**
 * Created by anchao on 2017/2/27.
 */
import {React, connect, createSelector, Link} from '../../common/Util';
import ReactComponentBase from '../../base/ReactComponentBase';
import actionCreator from '../../login/actions/actionCreator';

class MainAppView extends ReactComponentBase {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div id="chief" >

            </div>
        );
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


export default MainAppView;

/**
 * Created by mlamp on 2017/9/14.
 */
import {
    $,
    React
} from '../common/Util';
import RouterConfig from './RouterConfig'
class Main {
    init() {
        new RouterConfig().init();
        this.event()
    }

    event() {

    }
}
export default Main
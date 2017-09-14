import {React, PureRenderMixin} from '../common/Util';
class ReactComponentBase extends React.Component {
    constructor(props, context, updater) {
        super(props);
        this.stateChange = this.stateChange.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate(this);
        //禁止空格
        this.forbitBlackSpace = this.forbitBlackSpace.bind(this);
    }
    forbitBlackSpace(e) {
        if (e.which == 32) {
            e.preventDefault();
        }
    }
    stateChange(key, value, fnCb = () => {}) {
        if (typeof key == 'string') {
            this.setState({
                [key]: value
            }, fnCb)
        } else {
            //key可以传一个对象
            //value，则为一个回调
            this.setState(key, value)
        }
    }

    render() {
        return null;
    }

}
export default ReactComponentBase
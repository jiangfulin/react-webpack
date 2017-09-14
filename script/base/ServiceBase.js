/**
 * Created by mlamp on 2017/9/14.
 */
import {$} from '../common/Util';

export default class ServiceBase {
    /**
     * POST请求统一接口
     * @param url{string}请求的地址
     * @param oSettings{JSON}具体参数
     * @returns {success:true|false,result:{}|{error:{anchor: "",code: 0,msg: "",scope: ""}}}
     */
    static postWithParameter(url, oSettings) {
        oSettings = oSettings ? oSettings : {};
        let settings = {
            method: 'POST',
            data: JSON.stringify(Object.assign(oSettings, {_timestamp: Date.now()})),
            contentType: 'application/json;charset=UTF-8',
            dataType: 'json'
        };

        return $.ajax(url, settings);
    }

    static getWithParameter(url, oSettings) {
        let obj = {_timestamp: Date.now()};
        if (oSettings) {
            Object.assign(oSettings, {_timestamp: Date.now()});
            return $.get(url, oSettings);
        } else {
            return $.get(url,obj);
        }
    }
}
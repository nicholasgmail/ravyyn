import { mapKeys, camelCase, snakeCase, isArray } from 'lodash-es';
import { LoginStatusEnum } from '@/constants';


const transform = (object) => {
    const res = Object.entries(object).reduce((acc,current) => {
        const [key, val] = current;

        if (isArray(val)) {
            acc[camelCase(key)] = val.map(transform);
        }

        else if (typeof val === 'object' && val !== null) {
            acc[camelCase(key)] = transform(val);
        }

        else {
            acc[camelCase(key)] = val;
        }

        return acc;
    }, {})
    // debugger;
    // console.log(res);
    return res;
}


/**
 * Transforms keys from camelCase to snake_case
 * TODO: recursive support for nested objects/arrays ?
 * @param {*} data
 */
const transformRequest = (data = {}) => {
    const res = mapKeys(data, (_, key) => snakeCase(key));
    return JSON.stringify(res);
}

/**
 * Transforms keys from snake_case to camelCase
 * @param {string} data 
 */
const transformResponse = (data = "{}") => {
    const jsonData = JSON.parse(data);
    console.log('response', {jsonData});

    // transform res.data.data => res.data
    if (typeof jsonData.data === 'object') {
        // const res = mapKeys(jsonData.data, (_, key) => camelCase(key));
        let res = isArray(jsonData.data) 
            ? jsonData.data.map(transformRequest)
            : transform(jsonData.data);
            
        res.status = jsonData.status;
        
        return res; 
    }

    return jsonData;
}


/**
 * Get URL to rediret user to to after successful login
 * @param {int} status 
 * @param {string} userType 
 */
const getUserRedirectURL = (status, userType) => {
    let url = '';

    if (status === LoginStatusEnum.OK) {
        url = userType === 'advertiser' ? '/dashboard/advertiser' : '/find-jobs';
    }

    if (status === LoginStatusEnum.INCOMPLETE) {
        url = `/signup/${userType}/complete-account`;
    }

    if (status === LoginStatusEnum.DISABLED) {
        url = '/login';
    }

    return url;
}


export {
    transformRequest,
    transformResponse,
    getUserRedirectURL
}
        
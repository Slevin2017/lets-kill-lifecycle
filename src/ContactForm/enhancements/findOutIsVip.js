import {connect} from '@redneckz/react-redux-rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {getLastName} from '../selectors';
import {isVipApiCall} from '../../api';

export const findOutIsVip = connect(state$ =>
    state$
        .map(getLastName)
        .distinctUntilChanged()
        .switchMap(isVipApiCall)
        .map(isVip => ({isVip}))
);

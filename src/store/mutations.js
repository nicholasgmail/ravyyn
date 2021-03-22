import Mutations from './mutation-types'


export default {
    auth_request(state) {
        state.status = 'loading';
    },
    auth_success(state, { token, userId }) {
        state.status = 'success';
        state.token = token;
        state.userId = userId;
    },
    auth_error(state) {
        state.status = 'error';
    },
    logout(state) {
        state.isLoggedIn = false;
        state.accountTypeMissing = false;
        state.status = null;
        state.token = null;
        state.userId = null;
    },
    passwordResetKey(state, payload) {
        state.passwordResetKey = payload;
    },
    accountTypeMissing(state, payload) {
        state.accountTypeMissing = payload;
    },
    [Mutations.SHOW_CAMPAIGN_INFLUENCERS](state, payload) {
        state.selectedCampaign = payload;
        state.showCampaignInfluencers = true;
    },
    [Mutations.HIDE_CAMPAIGN_INFLUENCERS](state, _) {
        state.showCampaignInfluencers = false;
    }
}
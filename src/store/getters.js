export default {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    passwordResetKey: state => state.passwordResetKey,
    accountTypeMissing: state => state.accountTypeMissing,
    userId: state => state.userId,
    selectedCampaign: state => state.selectedCampaign,
    showCampaignInfluencers: state => state.showCampaignInfluencers,
    getName: state => state.inpScreen.name
}
<template>
        <section class="center dashboardCampaigns">
            <CampaignInfluencers />
            <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <p class="text-left pt-4" id="activeCampaignTitle">CAMPAIGNS</p>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12" md="6" lg="6" class="d-flex justify-content-start">
                    <Search placeholder="Search Campaigns" :width="40" @on-search="onSearch" />
                </b-col>
                <b-col class="d-flex justify-content-end sortByContainer">
                    <Dropdown class="mr-2" :multiple="false" :width="60" :options="campaignSortByOptions" @selected="onSortBy" />
          	        <img @click="sortHighLow" class="sortHighLow" src="@/assets/icons/arrow-up-down.jpg">
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-tabs content-class="mt-3" lazy align="center" @activate-tab="onTabActivate">
                        <CampaignTab id="today" :campaigns="campaigns" title="TODAY" />
                        <CampaignTab id="pending" :campaigns="campaigns" title="PENDING" />
                        <CampaignTab id="draft" :campaigns="campaigns" title="DRAFTS" />
                        <CampaignTab id="completed" :campaigns="campaigns" title="COMPLETED" />
                    </b-tabs>
                </b-col>
            </b-row>
            </b-container>
        </section>
</template>

<script>
import Dropdown from '@/components/base/Dropdown/Dropdown'
import Search from '@/components/base/Search/Search'
import SearchMixin from '@/components/base/Search/searchMixin.js'
import CampaignTab from '@/components/campaign/CampaignTab'
import CampaignInfluencers from '@/components/campaign/CampaignInfluencers'

const tabs = {
    0: 'today',
    1: 'pending',
    2: 'draft',
    3: 'completed'
}

const sortByFuncs = {
    1: (a,b) => {},
    2: (a,b) => { },
    3: (a,b) => { return Number(a.campaign.budget) - Number(b.campaign.budget) },
    4: (a,b) => {},
    5: (a,b) => { return a.campaign.influencersHired.length - b.campaign.influencersHired.length },
    6: (a,b) => {},
    7: (a,b) => {}
}

export default {
    components: {
        Dropdown,
        Search,
        CampaignTab,
        CampaignInfluencers
    },
    mixins: [
        SearchMixin
    ],
    data() {
        return {
            campaignSortByOptions: [
                { id: 1, label: 'Date Completed' },
                { id: 2, label: 'Date Created' },
                { id: 3, label: 'Budget' },
                { id: 4, label: 'Engagement Rate' },
                { id: 5, label: '# Of Influencers' },
            ],
            sortBy: 0,
            sortByHighLow: true,
            campaignsRaw: []
        }
    },
    computed: {
        campaigns() {
            const res = this.campaignsRaw
                .filter(c => c.campaign.campaignName.includes(this.searchTerm))

            if(this.sortBy > 0 ) {
                res.sort(sortByFuncs[this.sortBy])
            }

            return res;
        }
    },
    beforeMount() {
        this.fetchCampaigns('today');
    },
    methods: {
        fetchCampaigns(type) {
            this.$http.get(`/advertiser/dashboard/campaigns/${type}`).then(res => {
                // console.log(res.data.campaigns);
                this.campaignsRaw = res.data.campaigns;
            });
        },
        sortHighLow(e) {
            console.log(e);
            this.sortByHighLow = !this.sortHighLow;
            this.sortBy = this.sortHighLow ? 6:7;
        },
        onTabActivate(newIdx) {
            console.log(newIdx);
            this.fetchCampaigns(tabs[newIdx]);
        },
        onSortBy(e) {
            console.log('onSortBye',e);
            this.sortBy = e.id;
        },
    }
}
</script>

<style scoped>
.campaignNav {
    height: unset;
}
.sortHighLow {
    position:unset;
}

@media only screen and (max-width: 730px) {
    .sortByContainer {
        display: none !important;
    }
    .container{
        padding: 0 !important;
    }
}

</style>
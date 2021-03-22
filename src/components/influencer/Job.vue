<template>
            <div class="articlesContainer hide" id="findInfluencersContainerDesktop">
            <div id="cloneStemDesktopActive" class="articleJob">
                
                <div class="articleJobInfo">

                    <h1 class="contractTotal">{{ job.contractTotal || '$300' }}</h1>
                    
                    <p class="articleJobTitle">{{ job.name }}</p>

                    <div class="articleJobDate">
                    <div class="flexRow">
                        <p>Start Date</p>
                        <p>{{ startDate }}</p>
                    </div>
                    <div class="flexRow">
                        <p>Start Time</p>
                        <p>{{ startTime }}</p>
                    </div>
                    </div>
                    <div class="articleJobDescription">
                    <p class="font-la-nord-light">{{ job.description }}</p>
                    <p class="articleJobDescriptionMore" @click="showMore">more</p>
                    </div>
                    <div class="rowColumns boldRowColumns">
                    <div>
                        <p>{{ job.budget || '100$' }}</p>
                        <p>Budget</p>
                    </div>
                    <div @click="$emit('showScreen', 'couponScreen')">
                        <p>{{ job.code }}</p>
                        <p>Code</p>
                    </div>
                    <div>
                        <p>{{ job.post }}</p>
                        <p>Post</p>
                    </div>
                    <div>
                        <p>{{ job.story }}</p>
                        <p>Story</p>
                    </div>
                    <div>
                        <p>{{ job.linkInBio }}</p>
                        <p>Link In Bio</p>
                    </div>
                    <div>
                        <p>{{ job.customPost }}</p>
                        <p>Custom Post</p>
                    </div>
                    </div>
                </div>

                <div class="articlePicRow">
                    <div class="bigPic">
                    <img :src="job.imageUrl" @click="$emit('showScreen', 'photoViewScreen')">
                    <img v-if="job.status === 'active'" src="@/assets/icons/gift.png" class="giftIcon" onclick="togglePopOut(this)">
                    <div class="popOut">
                        <p>Lorem ipsum productus alonsi fou toq es quo fehdi ipsol se il sentus sipmal</p>
                    </div>
                    </div>
                </div>

                <div class="articleJobsButtons">
                    <div class="findInfluencerButtons">
                        <a  :class="['buttonBeige', appliedBtnClass]"
                            @click="updateJobStatus">{{ applyBtnLabel }}</a>
                        <a v-if="job.status === 'active'" class="buttonOrange" @click="$emit('showScreen', 'bidViewScreen')">Bid On Job</a>
                    </div>
                    <div class="articleJobRatingInfo">
                    <div class="flexColumn" @click="$emit('showScreen', 'reviewScreen')">
                        <div class="flexRow starRow">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        </div>
                        <p class="hoverHighlight">Reviews</p>
                    </div>
                    <div class="flexColumn">
                        <p class="orangeText">{{ job.spent }}</p>
                        <p>Spent</p>
                    </div>
                    </div>
                </div>

            </div> 

            </div>
</template>

<script>
import { CAMPAIGN_STATUS } from '@/constants'
import { mapKeys, camelCase } from 'lodash-es'
import dayjs from 'dayjs'

export default {
    components: {
    },
    data() {
        return {
            job: {},
            showCouponCodeScreen: false,
            showReviewsScreen: false,
        }
    },
    props: {
        jobId: Number
    },
    computed: {
        startDate() {
            return dayjs(this.job.startDate).format('M/DD/YY')
        },
        startTime() {
            return dayjs(this.job.startDate + 'T' + this.job.startTime).format('h:mm A')
        },
        applyBtnLabel() {
            return this.job.status === CAMPAIGN_STATUS.ACTIVE ? 'Quick Apply' : 'Withdraw application';
        },
        appliedBtnClass() {
            return this.job.status === CAMPAIGN_STATUS.APPLIED ? 'greenBgWhiteTex' : '';
        }
    },
    created() {
        Promise.all([
            this.$http.get(`/influencer/campaign/${this.jobId}/apply`),
            this.$http.get(`/influencer/campaign/${this.jobId}/overview`)
        ]).then(res => {
            // console.log({res});

            const applicationStatusRes = res[0];
            const overviewRes = res[1];

            const missingProps = {
                contactTotal: '300$',
                name: 'FITNESS INFLUENCER FOR PROTEIN SHAKE',
                budget: '100$',
                code:'Yes',
                post:'No',
                story:'Yes',
                linkInBio:'Yes',
                customPost:'No',
                spent: '2K'
            }

            const overview = mapKeys(overviewRes.data.overview, (_, key) => camelCase(key));
            const media = mapKeys(overviewRes.data.media[0], (_, key) => camelCase(key));
            this.job = { ...overview, ...media, ...missingProps }

            this.job.status = applicationStatusRes.data.applied ? CAMPAIGN_STATUS.APPLIED : CAMPAIGN_STATUS.ACTIVE;

            console.log('job', this.job)
        })
    },
    methods: {
        updateJobStatus() {
            const promise = this.job.status === CAMPAIGN_STATUS.APPLIED 
                ? this.$http.delete(`/influencer/campaign/${this.jobId}/apply`)
                : this.$http.post(`/influencer/campaign/${this.jobId}/apply`)
            
            promise.then(res => {
                console.log('updateJobStatus', res)
                this.job.status = res.data === 'User has applied to the campaign' ? CAMPAIGN_STATUS.APPLIED : CAMPAIGN_STATUS.ACTIVE
            });
        },
        showMore(e) {
            e.target.parentElement.classList.toggle("noMaxHeight");
        }
    }

}
</script>
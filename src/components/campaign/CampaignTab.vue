<template>
    <b-tab :title="title">
        <div class="tabContainer d-flex flex-wrap">
            <Campaign v-for="campaign in campaigns" v-bind="campaign" :key="campaign.id" />
        </div>
    </b-tab>
</template>

<script>
import Campaign from '@/components/campaign/Campaign'

export default {
    components: {
        Campaign
    },
    props: {
        title: String,
        campaigns: Array
    }
}
</script>

<style>
.campaignsContainer {
    width: 100%;
    max-height: 600px;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
}
</style>
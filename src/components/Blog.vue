<template>
  <main role="main">
    <section class="blogSection">
      <h3 class="display-4 my-5">Blog</h3>

      <div class="blogFilterContainer">
        <!-- <form class="mb-4">
          <div class="d-flex">
          <div class="form-field w-50 ml-2 country-field-wrap">
            <label for="influencer-settings-country" class="sr-only">Country</label>
              <div class="field-wrap country-dropdown position-relative">
                <div class="button" id="influencer-settings-country">Filter</div>
                  <ul class="dropdown" style="display: none;">
                    <li class="checkbox">
                      <label for="usa">Advertiser</label>
                      <input type="checkbox" name="Advertiser" value="Advertiser" id="advertiserFilter">
                      <span class="checkmark"></span>
                    </li>
                    <li class="checkbox">
                      <label for="brazil">Influencer</label>
                      <input type="checkbox" name="influencer" value="influencer" id="influencerFilter">
                      <span class="checkmark"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form> -->

        <div class="d-flex">
          <div class="form-field w-50 ml-2 country-field-wrap">
            <v-select
              :closeOnSelect="true"
              placeholder="Filter"
              multiple
              :value="selected"
              @input="onFilterChange"
              label="value"
              :options="filterOptions"
            />
          </div>
        </div>
      </div>

      <div class="blogContainer" id="blogContainer">
        <div class="blogArticle advertiserArticle">
          <div
            class="blogImage"
            id="https://www.smallbusinessrainmaker.com/small-business-marketing-blog/how-influencer-marketing-benefits-small-businesses"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-0.png"
            />
          </div>
          <p>How Influencer Marketing Benefits Small Businesses</p>
          <p>Staff Writer</p>
        </div>

        <div class="blogArticle advertiserArticle">
          <div
            class="blogImage"
            id="https://www.biznessapps.com/blog/influencers-small-business/"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-1.png"
            />
          </div>
          <p>How to Use Micro-Influencers For Your Small Business</p>
          <p>Kimberly de Silva</p>
        </div>

        <div class="blogArticle advertiserArticle">
          <div
            class="blogImage"
            id="https://www.impactbnd.com/blog/power-of-micro-influencers"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-2.png"
            />
          </div>
          <p>What Are Micro-Influencers & Why Are They So Effective?</p>
          <p>Myriah Anderson</p>
        </div>

        <div class="blogArticle advertiserArticle">
          <div
            class="blogImage"
            id="https://www.usatoday.com/story/money/small-business/2018/03/29/micro-influencers-how-small-businesses-sidestep-traditional-advertising-grow-sales/465217002/"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-3.png"
            />
          </div>
          <p>The State of Influencer Marketing 2020: Benchmark Report</p>
          <p>Influencer Marketing Hub</p>
        </div>

        <div class="blogArticle advertiserArticle">
          <div class="blogImage">
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-4.png"
            />
          </div>
          <p>3 Benefits of Micro-Influencers for Your Small Business</p>
          <p>Gaurav Sharma</p>
        </div>

        <!-- INFLUENCER ARTICLES -->

        <div class="blogArticle influencerArticle">
          <div
            class="blogImage"
            id="https://blog.hootsuite.com/how-to-get-more-instagram-followers-the-ultimate-guide/"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-5.png"
            />
          </div>
          <p>How to Get Free Instagram Followers: 35 Tips that Actually Work</p>
          <p>Christina Newberry</p>
        </div>

        <div class="blogArticle influencerArticle">
          <div
            class="blogImage"
            id="https://yfsmagazine.com/2019/04/18/the-ultimate-quick-start-guide-to-becoming-a-micro-influencer/#:~:text=That's%20because%20a%20micro%2Dinfluencer,and%20established%20trust%20with%20them"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-6.png"
            />
          </div>
          <p>The Ultimate Quick-Start Guide To Becoming A Micro-Influencer</p>
          <p>Luke Fitzpatrick</p>
        </div>

        <div class="blogArticle influencerArticle">
          <div class="blogImage" id="https://later.com/blog/instagram-themes">
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-7.png"
            />
          </div>
          <p>20 Awesome Instagram Themes (and How to Get Them)</p>
          <p>Benjamin Chacon</p>
        </div>

        <div class="blogArticle influencerArticle">
          <div
            class="blogImage"
            id="https://www.pagecloud.com/blog/instagram-aesthetics"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-8.png"
            />
          </div>
          <p>
            Instagram Aesthetics: 7 Pro Tips to Stand Out & Increase Followers
          </p>
          <p>Lauren Olson</p>
        </div>

        <div class="blogArticle influencerArticle">
          <div
            class="blogImage"
            id="https://www.insidehook.com/article/news-opinion/is-there-an-art-to-being-an-influencer"
          >
            <img
              src="@/assets/images/blog/blogArticleImages/blog-article-thumbnail-9.png"
            />
          </div>
          <p>Is There Really an Art to Being an Influencer?</p>
          <p>Kayla Kibbe</p>
        </div>
      </div>
    </section>

    <div id="articleSelection" class="articleSelection">
      <p id="articleSelectionCancel">X</p>
      <div class="articleSelectionIframeDiv">
        <iframe
          src=""
          id="articleSelectionIframe"
          class="articleSelectionIframe"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selected: [],
      filterOptions: [
        {
          id: 1,
          value: "Advertiser",
        },
        {
          id: 2,
          value: "Influencer",
        },
      ],
    };
  },
  methods: {
    onFilterChange(e) {
      this.selected = e;
      console.log({ e });
      if (e.length === 0 || e.length === this.filterOptions.length) {
        document
          .getElementsByClassName("advertiserArticle")
          .forEach((el) => el.classList.remove("d-none"));
        document
          .getElementsByClassName("influencerArticle")
          .forEach((el) => el.classList.remove("d-none"));
      } else {
        const type = this.selected[0].value.toLowerCase();
        console.log({ type });
        type == "influencer"
          ? document
              .getElementsByClassName(`advertiserArticle`)
              .forEach((el) => el.classList.add("d-none"))
          : document
              .getElementsByClassName(`influencerArticle`)
              .forEach((el) => el.classList.add("d-none"));
      }
    },
  },
};
</script>

<style lang="scss">
@import "~vue-select/dist/vue-select.css";

.vs__dropdown-toggle {
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 0px;
  font-size: 1.2rem;
  width: 400px;
  padding: inherit;
  padding: 16px;
}
</style>
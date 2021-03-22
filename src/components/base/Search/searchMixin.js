const SearchMixin = {
    data() {
        return {
            searchTerm: ""
        }
    },
    methods: {
        onSearch(e) {
            this.searchTerm = e.target.value;
        }
    }
}

export default SearchMixin;
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const search = instantsearch({
  indexName: "products",
  routing: true,
  searchClient: instantMeiliSearch(
    "http://localhost:7700"
    )
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox"
  }),
  instantsearch.widgets.clearRefinements({
    container: "#clear-refinements"
  }),
  instantsearch.widgets.refinementList({
    container: "#type-list",
    attribute: "type"
  }),
  instantsearch.widgets.refinementList({
    container: "#category-list",
    attribute: "category.name"
  }),
  instantsearch.widgets.refinementList({
    container: "#manufacturer-list",
    attribute: "manufacturer"
  }),
  instantsearch.widgets.rangeSlider({
    container: "#price-list",
    attribute: "price"
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
    snippetEllipsisText: "...",
    attributesToSnippet: ["description:50"]
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `
        <div>
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <img src="{{image}}" align="left" />
          <div class="hit-description">
            {{#helpers.snippet}}{ "attribute": "description" }{{/helpers.snippet}}
          </div>
          <div class="hit-info">price: {{price}}</div>
        </div>
      `
    }
  }),
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
]);

search.start();

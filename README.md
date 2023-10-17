# meilisearch-ecommerce-example
Project to show meilisearch in action (products dataset)

Usage
---
This repo uses parcel to build a simple frontend using vanilla js + instantsearch

1. Run meilisearch
```
$ docker run -d -it --rm -p 7700:7700  -v $(pwd)/meili_data:/meili_data getmeili/meilisearch:v1.1
```

2. Index data
```
$ curl -X POST 'http://localhost:7700/indexes/products/documents?primaryKey=sku' -H 'Content-Type: application/json' --data-binary @dataset/products.json
```

3. Configure filterable / sortable fields (to facet and use in filters)
```bash
curl \                                                                             
  -X PATCH 'http://localhost:7700/indexes/products/settings' \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "filterableAttributes": [
      "type",
      "category.name",
      "manufacturer",
      "price"
    ],
    "sortableAttributes": [
      "type",
      "category.name",
      "manufacturer",
      "price"
    ]
  }'
```
4. Start project
```
$ npm install && npm run start
```

Images
---
![image](https://github.com/girorme/meilisearch-ecommerce-example/assets/54730507/8e8cf82f-8cd0-4714-9f9c-1410dea066ac)


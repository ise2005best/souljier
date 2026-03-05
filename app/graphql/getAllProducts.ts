export const Get_PRODUCTS_QUERY = `{
  products(first: 10) {
    edges {
      cursor
      node {
        id
        title
        tags
        handle
        vendor
        variants(first: 5) {
          edges {
            node {
              id
              title
              inventoryItem {
                id
              }
              price
            }
          }
        }
        media(first: 2) {
          edges {
            node {
              ... on MediaImage {
                id
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}`;
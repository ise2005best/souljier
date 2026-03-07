export const GET_ONE_PRODUCT = `
query getProductById($handle: String!, $locationId: ID!) {
  product: productByIdentifier(identifier: {handle: $handle}) {
    id
    title
    description
    vendor
    totalInventory
    tags
    metafields(first:5){
      edges{
      node{
      key
      value
      reference{
      ... on MediaImage{
      image{
      url
      }
      }
      }
      }}
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          price
          inventoryItem {
            id
            inventoryLevel(locationId: $locationId){
              quantities(names: "available"){
                quantity
              }
            }
          }
        }
      }
    }
    media(first:7){
            edges{
              node{
                ... on MediaImage{
                  id
                  image{
                    url
                  }
                }
              }
            }
          }
  }
}`;

export interface Product {
    product: {
      id: string;
      title: string;
      description: string;
      vendor: string;
      totalInventory: number;
      tags: string[];
      collections: ProductCollections
      translations: ProductTranslation[];
      metafields: ProductMetafields;
      variants: Variant;
      media: MediaImage;
    };
  }
  
  export interface ProductCollections {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
      };
    }[];
  }
  
  export interface ProductTranslation {
    key: string;
    value: string;
  }
  
  export interface ProductMetafields {
    edges: {
      node: {
        key: string;
        value: string;
        reference?: {
          image: {
            url: string;
          };
        };
      };
    }[];
  }
  
  export interface InventoryLevel {
    quantities: {
      quantity: number;
    }[];
  }
  
  export interface Variant {
    edges: {
      node: {
        id: string;
        title: string;
        price: string;
        inventoryItem: {
          id: string;
        };
        contextualPricing?: {
          price: {
            amount: number;
            currencyCode: string;
          };
        };
      };
    }[];
  }
  
  export interface MediaImage {
    edges: {
      node: {
        id: string;
        image: {
          url: string;
        };
      };
    }[];
  }
  
  export interface ProductNode {
    data: Product;
    extensions: [];
  }
  
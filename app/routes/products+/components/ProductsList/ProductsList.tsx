import React from 'react';

import {Grid2} from '@mui/material';

import {ApiProduct} from '~/api-client/types';

import {ProductCard} from '../ProductCard';

type ProductsListProps = {
  products?: Array<ApiProduct>;
  isLoading: boolean;
};

export const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  return (
    <Grid2>
      {products?.map(product => <ProductCard key={product.productId} product={product} />)}
    </Grid2>
  );
};

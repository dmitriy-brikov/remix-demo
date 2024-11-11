import React from 'react';

import {Grid2} from '@mui/material';

import {ApiProduct} from '~/api-client/types';

import {ProductCard} from '../ProductCard';
import {ProductsListSkeleton} from '../ProductsListSkeleton';
import {ProductsListEmpty} from '../ProductsListEmpty';

type ProductsListProps = {
  products?: Array<ApiProduct>;
  isLoading: boolean;
};

export const ProductsList: React.FC<ProductsListProps> = ({products, isLoading}) => {
  return (
    <Grid2 container sx={{gap: '20px'}}>
      {isLoading && !products?.length && <ProductsListSkeleton />}
      {!isLoading && !products?.length && <ProductsListEmpty actionURL="/products/create" />}
      {Number(products?.length) > 0 &&
        products!.map(product => <ProductCard key={product.productId} product={product} />)}
    </Grid2>
  );
};

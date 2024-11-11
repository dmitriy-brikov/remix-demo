import React, {ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {format} from 'date-fns';

import {Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography} from '@mui/material';

import {ApiProduct} from '~/api-client/types';
import {returnApiFieldTranslated} from '~/utils';

type ProductCardProps = {
  product: ApiProduct;
};

const SpaceBetweenBox = ({children}: {children: ReactNode}) => (
  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>{children}</Box>
);

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const {t} = useTranslation(['products']);

  return (
    <Card sx={{width: '100%'}}>
      <CardHeader title={returnApiFieldTranslated(product, 'title')} />
      {product.image && <CardMedia component="img" height={200} image={product.image} />}
      <CardContent>
        <SpaceBetweenBox>
          <Typography>
            {t('products:sku')} | {t('products:quantity')}
          </Typography>
          <Typography>
            {product.sku || '---'} | {product.quantity || '---'}
          </Typography>
        </SpaceBetweenBox>
        <SpaceBetweenBox>
          <Typography>{t('products:price')}</Typography>
          <Typography>{product.price}</Typography>
        </SpaceBetweenBox>
        <SpaceBetweenBox>
          <Typography>{t('products:priceSale')}</Typography>
          <Typography>{product.priceSale}</Typography>
        </SpaceBetweenBox>
        <Divider sx={{my: 1}} />
        <SpaceBetweenBox>
          <Typography>{t('common:createdAt')}</Typography>
          <Typography>{format(product.createdAt ?? new Date(), 'MM-dd-yyyy')}</Typography>
        </SpaceBetweenBox>
        <SpaceBetweenBox>
          <Typography>{t('common:updatedAt')}</Typography>
          <Typography>{format(product.updatedAt ?? new Date(), 'MM-dd-yyyy')}</Typography>
        </SpaceBetweenBox>
      </CardContent>
    </Card>
  );
};

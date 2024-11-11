import {ReactNode} from 'react';

import {Box, Card, CardContent, CardHeader, Divider, Skeleton, Typography} from '@mui/material';

const SpaceBetweenBox = ({children}: {children: ReactNode}) => (
  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>{children}</Box>
);

type ProductsListSkeletonProps = {
  count?: number;
};

export const ProductsListSkeleton: React.FC<ProductsListSkeletonProps> = ({count = 3}) => {
  const rows = [];

  for (let index = 0; index < count; index++) {
    rows.push(
      <Card sx={{width: '100%'}}>
        <CardHeader title={<Skeleton />} />
        <Skeleton height={300} width="100%" />
        <CardContent>
          <SpaceBetweenBox>
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
          </SpaceBetweenBox>
          <SpaceBetweenBox>
            <Typography>
              <Skeleton width={100} />
            </Typography>
            <Typography>
              <Skeleton width={100} />
            </Typography>
          </SpaceBetweenBox>
          <SpaceBetweenBox>
            <Typography>
              <Skeleton width={100} />
            </Typography>
            <Typography>
              <Skeleton width={100} />
            </Typography>
          </SpaceBetweenBox>
          <Divider sx={{my: 1}} />
          <SpaceBetweenBox>
            <Typography>
              <Skeleton width={100} />
            </Typography>
            <Typography>
              <Skeleton width={100} />
            </Typography>
          </SpaceBetweenBox>
          <SpaceBetweenBox>
            <Typography>
              <Skeleton width={100} />
            </Typography>
            <Typography>
              <Skeleton width={100} />
            </Typography>
          </SpaceBetweenBox>
        </CardContent>
      </Card>,
    );
  }

  return rows;
};

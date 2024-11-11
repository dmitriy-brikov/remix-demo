import {useTranslation} from 'react-i18next';
import React from 'react';

import {Box, Stack, Typography} from '@mui/material';

import {AppButton} from '~/global/components/app-button';

type ProductsListEmptyProps = {
  actionLabel?: React.ReactNode;
  actionURL: string;
};

export const ProductsListEmpty: React.FC<ProductsListEmptyProps> = ({actionURL, actionLabel}) => {
  const {t} = useTranslation(['common']);

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack p={3} alignItems="center" spacing={2}>
        <Typography variant="caption" fontSize="0.9rem">
          {t('common:noResults')}
        </Typography>

        {actionURL ? (
          <AppButton to={actionURL} variant="contained">
            {actionLabel || t('common:create')}
          </AppButton>
        ) : null}
      </Stack>
    </Box>
  );
};

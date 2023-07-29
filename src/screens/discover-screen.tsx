import { HeaderText } from '@components/header/header-text';
import { PRODUCT_BY_SKU } from '@constants/react-query';
import { getProductBySku } from '@services/getProductBySku';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, ScrollView, Spinner, Text, YStack } from 'tamagui';

export function DiscoverScreen(): JSX.Element {
  const [isQuering, setIsQuering] = useState(false);

  const skuTest = '1868231';

  const { data, isFetching, error } = useQuery({
    queryKey: [PRODUCT_BY_SKU, skuTest],
    queryFn: () => getProductBySku(skuTest),
    enabled: isQuering
  });

  function handleOnPress() {
    setIsQuering(true);

    console.log('data :>> ', data);
    console.log('isFetching :>> ', isFetching);
    console.log('error :>> ', error);
  }

  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <HeaderText title='Discover' />

        {error && <Text>{error}</Text>}

        {isFetching && (
          <Spinner
            size='large'
            color={'$black'}
          />
        )}

        {!isFetching && (
          <Button onPress={handleOnPress}>
            <Text>Api test</Text>
          </Button>
        )}

        {!isFetching && data && <Text>{JSON.stringify(data)}</Text>}
      </YStack>
    </ScrollView>
  );
}

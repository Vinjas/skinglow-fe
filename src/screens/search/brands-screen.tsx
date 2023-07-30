import { ImageCard } from '@components/image-card';
import { LoadingSpinner } from '@components/loading-spinner';
import { SearchBar } from '@components/search-bar';
import { SkinglowSeparator } from '@components/separator';
import { SEARCH_CONTEXT } from '@constants/constants';
import { DEFAULT_LOCALE } from '@constants/locales';
import { ALL_BRANDS } from '@constants/react-query';
import { ITEMS_CONTEXT } from '@constants/services';
import { getAllItems } from '@services/getAllItems';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View, YStack } from 'tamagui';

export function BrandsScreen(): JSX.Element {
  const {
    data: brands,
    isLoading,
    error
  } = useQuery({
    queryKey: [ALL_BRANDS],
    queryFn: () => getAllItems(ITEMS_CONTEXT.BRANDS, DEFAULT_LOCALE),
    enabled: true
  });

  return (
    <YStack
      bg='$background'
      f={1}
      jc={'center'}
      px={8}
    >
      <SearchBar
        px={8}
        context={SEARCH_CONTEXT.PRODUCTS}
      />

      {isLoading && <LoadingSpinner isAbsolute />}

      {!isLoading && brands && (
        <FlatList
          data={brands}
          renderItem={({ item }) => (
            <View
              f={1}
              p={8}
            >
              <ImageCard
                f={1}
                key={item}
                bg={'#878787'}
                title={item}
                height={70}
                isHalf
              />
            </View>
          )}
          keyExtractor={item => item}
          numColumns={2}
        />
      )}

      {error && <Text>{JSON.stringify((error as Error).message)}</Text>}
    </YStack>
  );
}

import { ImageCard } from '@components/image-card';
import { LoadingSpinner } from '@components/loading-spinner';
import { SearchBar } from '@components/search-bar';
import { SEARCH_CONTEXT } from '@constants/constants';
import { DEFAULT_LOCALE } from '@constants/locales';
import { ALL_INGREDIENTS } from '@constants/react-query';
import { ITEMS_CONTEXT } from '@constants/services';
import { getAllItems } from '@services/getAllItems';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View, YStack } from 'tamagui';

export function IngredientsScreen(): JSX.Element {
  const {
    data: ingredients,
    isLoading,
    error
  } = useQuery({
    queryKey: [ALL_INGREDIENTS],
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

      {!isLoading && ingredients && (
        <FlatList
          data={ingredients}
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
        />
      )}

      {error && <Text>{JSON.stringify((error as Error).message)}</Text>}
    </YStack>
  );
}

import { ImageCard } from '@components/image-card';
import { LoadingSpinner } from '@components/loading-spinner';
import { SearchBar } from '@components/search-bar';
import { SEARCH_CONTEXT } from '@constants/constants';
import { DEFAULT_LOCALE } from '@constants/locales';
import { ALL_CATEGORIES } from '@constants/react-query';
import { ITEMS_CONTEXT } from '@constants/services';
import { getAllItems } from '@services/getAllItems';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { Text, View, YStack } from 'tamagui';

export function ProductCategoriesScreen(): JSX.Element {
  const { t } = useTranslation();

  const mockImage = require('@assets/img/mock_product.png');

  const {
    data: categories,
    isLoading,
    error
  } = useQuery({
    queryKey: [ALL_CATEGORIES],
    queryFn: () => getAllItems(ITEMS_CONTEXT.CATEGORIES, DEFAULT_LOCALE),
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

      {!isLoading && categories && (
        <FlatList
          data={Object.keys(categories)}
          renderItem={({ item }) => (
            <View
              f={1}
              p={8}
            >
              <ImageCard
                f={1}
                key={item}
                bg={'#E8EFF9'}
                title={t(`categories.${item}`)}
                height={170}
                image={mockImage}
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

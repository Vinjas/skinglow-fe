import { SearchBar } from '@components/search-bar';
import { SEARCH_CONTEXT } from '@constants/constants';
import React from 'react';
import { ScrollView, YStack } from 'tamagui';

export function BrandsScreen(): JSX.Element {
  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <SearchBar context={SEARCH_CONTEXT.INGREDIENTS} />
      </YStack>
    </ScrollView>
  );
}

import React from 'react';
import { Button, Form, Input, XStack } from 'tamagui';
import SearchIcon from '@assets/svg/search.svg';
import FilterIcon from '@assets/svg/filter.svg';
import { useTranslation } from 'react-i18next';

export function SearchBar() {
  const { t } = useTranslation();

  function handleSearch() {
    return null;
  }

  return (
    <Form onSubmit={handleSearch}>
      <XStack
        jc='space-between'
        ai='center'
        px={16}
        my={12}
        bg='$light-gray-1'
        br={10}
      >
        <Form.Trigger asChild>
          <Button unstyled>
            <SearchIcon />
          </Button>
        </Form.Trigger>
        <Input
          f={1}
          px={16}
          fontFamily={'$heading'}
          col='$dark-gray-1'
          placeholderTextColor={'$dark-gray-1'}
          bg='$light-gray-1'
          placeholder={t('form.search-placeholder')}
          unstyled
        />
        <Button unstyled>
          <FilterIcon />
        </Button>
      </XStack>
    </Form>
  );
}

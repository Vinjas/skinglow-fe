import React, { useContext, useEffect } from 'react';
import { YStack, XStack, ScrollView } from 'tamagui';
import { Logo } from '../../components/logo';
import { SearchBar } from '@components/search-bar';
import { WelcomeMessage } from '@components/welcome-message';
import { ImageCard } from '@components/image-card';
import { useTranslation } from 'react-i18next';
import { SkinglowSeparator } from '@components/separator';
import { SettingsButton } from '@components/buttons/settings-button';
import { StatusBarContext } from 'contexts/status-bar-context';
import { SEARCH_CONTEXT } from '@constants/constants';

type HomeScreenProps = {
  navigation: any;
};

const productsImage = require('@assets/img/home/products_2.png');
const ingredientsImage = require('@assets/img/home/ingredients.png');
const brandsImage = require('@assets/img/home/brands_2.png');
const tipsImage = require('@assets/img/home/woman_reading.png');
const modelImage = require('@assets/img/home/model_15.png');

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const { t } = useTranslation();

  const { setIsStatusBarTransparent } = useContext(StatusBarContext);

  useEffect(() => {
    setIsStatusBarTransparent(false);
  }, [setIsStatusBarTransparent]);

  function handleBrands() {
    navigation.navigate('Brands');
  }

  function hanldeIngredients() {
    navigation.navigate('Ingredients');
  }

  function handleProducts() {
    navigation.navigate('ProductsCategories');
  }

  return (
    <ScrollView bg='$background'>
      <YStack mx={'$4'}>
        <XStack
          ai='center'
          jc='space-between'
        >
          <Logo />

          <SettingsButton navigation={navigation} />
        </XStack>

        <SearchBar context={SEARCH_CONTEXT.ALL} />

        <WelcomeMessage />

        <SkinglowSeparator />

        <XStack
          jc={'space-between'}
          bg='$background'
          gap={16}
        >
          <ImageCard
            f={1}
            title={t('home.product-catalog')}
            height={225}
            image={productsImage}
            onPress={handleProducts}
          />
          <YStack
            f={1}
            jc={'space-between'}
            ai={'center'}
            gap={16}
          >
            <ImageCard
              title={t('home.brands')}
              height={105}
              image={brandsImage}
              onPress={handleBrands}
            />
            <ImageCard
              title={t('home.ingredients')}
              height={105}
              image={ingredientsImage}
              onPress={hanldeIngredients}
            />
          </YStack>
        </XStack>

        <XStack
          mt={16}
          jc={'space-between'}
          bg='$background'
          gap={16}
        >
          <ImageCard
            f={1}
            title={t('home.tips')}
            height={170}
            image={tipsImage}
          />
          <ImageCard
            f={2}
            title={t('home.my-routines')}
            height={170}
            image={modelImage}
          />
        </XStack>
      </YStack>
      <SkinglowSeparator />
    </ScrollView>
  );
}

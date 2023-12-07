import { useState } from 'react';
import Select from '../common/select/Select';
import MultiSelect from '../common/select/MultiSelect';
import Products from './Products';
import Summary from './Summary';
import { getPriceListsData } from '../../helpers';
import {
  IActivePriceListObject,
  ISelectedProductObject,
  IData,
} from '../../types';
import {
  PRICELISTS_LABEL,
  PRICELISTS_PLACEHOLDER,
  PRICELISTS_DISABLED_MESSAGE,
  PRODUCTS_LABEL,
  PRODUCTS_PLACEHOLDER,
  PRODUCTS_NO_PRICELIST_MESSAGE,
  PRODUCTS_NO_PRODUCTS_MESSAGE,
} from '../../constants';

function Layout({ data }: IData) {
  const [activePriceList, setActivePriceList] =
    useState<IActivePriceListObject>();
  const [selectedProducts, setSelectedProducts] =
    useState<ISelectedProductObject[]>();

  return (
    <>
      <section>
        <Select
          data={getPriceListsData(data)}
          stateValue={activePriceList}
          setStateValue={setActivePriceList}
          additionalOnChangeAction={() => setSelectedProducts([])}
          label={PRICELISTS_LABEL}
          defaultPlaceholder={PRICELISTS_PLACEHOLDER}
          disabledMessage={PRICELISTS_DISABLED_MESSAGE}
        />
        <MultiSelect
          data={activePriceList?.products}
          stateValues={selectedProducts}
          setStateValues={setSelectedProducts}
          label={PRODUCTS_LABEL}
          defaultPlaceholder={PRODUCTS_PLACEHOLDER}
          disabledMessage={
            activePriceList
              ? PRODUCTS_NO_PRODUCTS_MESSAGE
              : PRODUCTS_NO_PRICELIST_MESSAGE
          }
        />
      </section>
      {selectedProducts && selectedProducts?.length > 0 && (
        <Products data={selectedProducts} />
      )}
      {activePriceList && selectedProducts && (
        <Summary
          activePriceList={activePriceList}
          selectedProducts={selectedProducts}
        />
      )}
    </>
  );
}

export default Layout;

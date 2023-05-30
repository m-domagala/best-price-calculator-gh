import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorMessage from './components/messages/ErrorMessage/ErrorMessage';
import LoadingMessage from './components/messages/LoadingMessage/LoadingMessage';
import Select from './components/common/Select/Select';
import { IDataPriceList, TId, TIds } from './types/types';
import {
  API_URL,
  DATA_QUERY,
  PRICELISTS_LABEL,
  PRICELISTS_PLACEHOLDER,
  PRICELISTS_DISABLED_MESSAGE,
  PRODUCTS_LABEL,
  PRODUCTS_PLACEHOLDER,
  PRODUCTS_NO_PRICELIST_MESSAGE,
  PRODUCTS_NO_PRODUCTS_MESSAGE,
} from './constants/constants';
import styles from './App.module.scss';
import {
  getElementName,
  getElementPrice,
  getPriceListProducts,
  getPriceListProductsIds,
  getProducts,
} from './helpers/helpers';
import MultiSelect from './components/common/Select/MultiSelect';
import List from './components/List/List';

function App() {
  const { isLoading, error, data } = useQuery(DATA_QUERY, () =>
    axios(API_URL).then((response) => response.data),
  );
  const [activePriceList, setActivePriceList] = useState<TId>(null);
  const [selectedProducts, setSelectedProducts] = useState<TIds>([]);

  return (
    <main className={styles.app}>
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {data && (
        <>
          <section>
            <Select
              data={data.priceLists.map((priceList: IDataPriceList) => ({
                id: priceList.id,
                name: String(priceList.year),
              }))}
              stateValue={activePriceList}
              setStateValue={setActivePriceList}
              additionalOnChangeAction={() => setSelectedProducts([])}
              label={PRICELISTS_LABEL}
              defaultPlaceholder={PRICELISTS_PLACEHOLDER}
              disabledMessage={PRICELISTS_DISABLED_MESSAGE}
            />
            <MultiSelect
              data={getProducts(
                getPriceListProductsIds(activePriceList, data.priceLists),
                data.products,
              )}
              stateValue={selectedProducts}
              setStateValue={setSelectedProducts}
              label={PRODUCTS_LABEL}
              defaultPlaceholder={PRODUCTS_PLACEHOLDER}
              disabledMessage={
                activePriceList !== null
                  ? PRODUCTS_NO_PRODUCTS_MESSAGE
                  : PRODUCTS_NO_PRICELIST_MESSAGE
              }
            />
          </section>
          {selectedProducts.length > 0 && (
            <section>
              <List
                data={selectedProducts.map((selectedProduct) => {
                  return {
                    name: getElementName(selectedProduct, data.products),
                    price: getElementPrice(
                      selectedProduct,
                      getPriceListProducts(activePriceList, data.priceLists),
                    ),
                  };
                })}
              />
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default App;

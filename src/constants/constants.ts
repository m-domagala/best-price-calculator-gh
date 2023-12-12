export const CURRENCY = 'zł';

export const PRICELISTS_DISABLED_MESSAGE = 'Brak dostępnych cenników';
export const PRICELISTS_LABEL = 'Wybierz cennik';
export const PRICELISTS_PLACEHOLDER = 'Cenniki';

export const PRODUCTS_LABEL = 'Wybierz usługi';
export const PRODUCTS_NO_PRICELIST_MESSAGE = 'Nie wybrano cennika';
export const PRODUCTS_NO_PRODUCTS_MESSAGE = 'Brak usług w wybranym cenniku';
export const PRODUCTS_PLACEHOLDER = 'Usługi';

export const DATA_FETCHING_MESSAGE = 'Trwa pobieranie danych';
export const DATA_FETCHING_ERROR_MESSAGE = 'Nie udało się pobrać danych';

export const SPECIALOFFERS_ACTIVE_LABEL = 'Uwzględnione rabaty';

export const SUMMARY_LABEL = 'RAZEM';

export const DATA_EXAMPLE = {
  products: [
    {
      id: 'uzhCixiiBJXgNb6GG2SMC',
      name: 'Internet',
    },
    {
      id: 'ADHsLYxXKo_6elF-0cFoS',
      name: 'Telewizja',
    },
    {
      id: '4Y39mcqPv7D3M1eU6hRQC',
      name: 'Abonament telefoniczny',
    },
    {
      id: '9qdd55dzp68XHOD4dMmre',
      name: 'Dekoder 4K',
      requiredProductId: 'ADHsLYxXKo_6elF-0cFoS',
    },
  ],

  specialOffers: [
    {
      id: 'kealFxyyP9KfHfYfnGMPF',
      name: 'Internet + telewizja',
      requiredProductsIds: ['uzhCixiiBJXgNb6GG2SMC', 'ADHsLYxXKo_6elF-0cFoS'],
      freeProductId: '9qdd55dzp68XHOD4dMmre',
    },
    {
      id: 'XOnET7zX7r_RmzKH11HWM',
      name: 'Internet + abonament telefoniczny',
      requiredProductsIds: ['uzhCixiiBJXgNb6GG2SMC', '4Y39mcqPv7D3M1eU6hRQC'],
    },
  ],

  priceLists: [
    {
      id: 'U0wvgmsNZoyVD1DxA_-tj',
      year: 2023,
      products: [
        {
          productId: 'uzhCixiiBJXgNb6GG2SMC',
          price: 39,
        },
        {
          productId: 'ADHsLYxXKo_6elF-0cFoS',
          price: 49,
        },
        {
          productId: '4Y39mcqPv7D3M1eU6hRQC',
          price: 29,
        },
        {
          productId: '9qdd55dzp68XHOD4dMmre',
          price: 29,
        },
      ],
      specialOffers: [
        {
          specialOfferId: 'kealFxyyP9KfHfYfnGMPF',
          price: 79,
        },
        {
          specialOfferId: 'XOnET7zX7r_RmzKH11HWM',
          price: 64,
        },
      ],
    },
    {
      id: '3wgMj-xBnLeki9Klw3IBS',
      year: 2024,
      products: [
        {
          productId: 'uzhCixiiBJXgNb6GG2SMC',
          price: 49,
        },
        {
          productId: 'ADHsLYxXKo_6elF-0cFoS',
          price: 49,
        },
        {
          productId: '4Y39mcqPv7D3M1eU6hRQC',
          price: 29,
        },
        {
          productId: '9qdd55dzp68XHOD4dMmre',
          price: 29,
        },
      ],
      specialOffers: [
        {
          specialOfferId: 'kealFxyyP9KfHfYfnGMPF',
          price: 89,
        },
        {
          specialOfferId: 'XOnET7zX7r_RmzKH11HWM',
          price: 64,
        },
      ],
    },
    {
      id: 'EGT5WC3ZgrKPIFCjokbzH',
      year: 2025,
      products: [
        {
          productId: 'uzhCixiiBJXgNb6GG2SMC',
          price: 59,
        },
        {
          productId: 'ADHsLYxXKo_6elF-0cFoS',
          price: 59,
        },
        {
          productId: '4Y39mcqPv7D3M1eU6hRQC',
          price: 29,
        },
        {
          productId: '9qdd55dzp68XHOD4dMmre',
          price: 29,
        },
      ],
      specialOffers: [
        {
          specialOfferId: 'kealFxyyP9KfHfYfnGMPF',
          price: 99,
        },
        {
          specialOfferId: 'XOnET7zX7r_RmzKH11HWM',
          price: 64,
        },
      ],
    },
  ],
};

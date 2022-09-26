import {
  createContext,
  useState,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from 'react';
import { OrderForm, OrderFormItem } from 'typings/OrderForm';

interface StoreContextProps {
  minicartIsOpen: boolean;
  setMinicartIsOpen: React.Dispatch<SetStateAction<boolean>>;
  itemsCount: number;
  setItemsCount: React.Dispatch<SetStateAction<number>>;
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<SetStateAction<boolean>>;
  orderForm: OrderForm;
  setOrderForm: React.Dispatch<
    SetStateAction<{
      items: OrderFormItem[];
      subTotal?: number;
    }>
  >;
  orderFormSubTotal: number;
  setOrderFormSubTotal: React.Dispatch<SetStateAction<number>>;
}

export const StoreContext = createContext<StoreContextProps>({
  minicartIsOpen: false,
  setMinicartIsOpen: () => {},
  itemsCount: 0,
  setItemsCount: () => {},
  menuIsOpen: false,
  setMenuIsOpen: () => {},
  orderForm: { items: [], subTotal: 0 },
  setOrderForm: () => {},
  orderFormSubTotal: 0,
  setOrderFormSubTotal: () => {},
});

const Store = ({ children }: PropsWithChildren) => {
  const storageCount = Number(localStorage.getItem('itemsCount'));
  const storageOrderForm = localStorage.getItem('orderForm');

  const [minicartIsOpen, setMinicartIsOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(storageCount ? storageCount : 0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [orderFormSubTotal, setOrderFormSubTotal] = useState(0);
  const [orderForm, setOrderForm] = useState(
    storageOrderForm
      ? (JSON.parse(storageOrderForm) as OrderForm)
      : {
          items: [],
          subTotal: orderFormSubTotal,
        }
  );

  useEffect(() => {
    localStorage.setItem('itemsCount', `${itemsCount}`);
  }, [itemsCount]);

  useEffect(() => {
    console.log(orderForm);
    const subTotal = orderForm.items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    setOrderFormSubTotal(subTotal);

    localStorage.setItem('orderForm', `${JSON.stringify(orderForm)}`);
  }, [orderForm]);

  const values = {
    minicartIsOpen,
    setMinicartIsOpen,
    itemsCount,
    setItemsCount,
    menuIsOpen,
    setMenuIsOpen,
    orderForm,
    setOrderForm,
    orderFormSubTotal,
    setOrderFormSubTotal,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default Store;

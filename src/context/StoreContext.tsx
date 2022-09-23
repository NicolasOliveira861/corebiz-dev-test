import {
  createContext,
  useState,
  PropsWithChildren,
  SetStateAction,
} from 'react';

interface StoreContextProps {
  minicartIsOpen: boolean;
  setMinicartIsOpen: React.Dispatch<SetStateAction<boolean>>;
  itemsCount: number;
  setItemsCount: React.Dispatch<SetStateAction<number>>;
}

export const StoreContext = createContext<StoreContextProps>({
  minicartIsOpen: false,
  setMinicartIsOpen: () => {},
  itemsCount: 0,
  setItemsCount: () => {},
});

const Store = ({ children }: PropsWithChildren) => {
  const [minicartIsOpen, setMinicartIsOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);

  const values = {
    minicartIsOpen,
    setMinicartIsOpen,
    itemsCount,
    setItemsCount,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default Store;

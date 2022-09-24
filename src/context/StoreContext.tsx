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
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext<StoreContextProps>({
  minicartIsOpen: false,
  setMinicartIsOpen: () => {},
  itemsCount: 0,
  setItemsCount: () => {},
  menuIsOpen: false,
  setMenuIsOpen: () => {},
});

const Store = ({ children }: PropsWithChildren) => {
  const [minicartIsOpen, setMinicartIsOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const values = {
    minicartIsOpen,
    setMinicartIsOpen,
    itemsCount,
    setItemsCount,
    menuIsOpen,
    setMenuIsOpen,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default Store;

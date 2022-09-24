import { Installments } from 'typings/Product';

export const GetHigherInstallment = (installments: Installments[]) => {
  const higherQuantity = Math.max.apply(
    Math,
    installments.map((installment) => installment.quantity)
  );
  const bestInstallment = installments.find(
    (installment) => installment.quantity === higherQuantity
  );

  return {
    quantity: higherQuantity,
    value: bestInstallment?.value,
  };
};

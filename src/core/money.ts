export const toCents = (valueInReais: number) => Math.round(valueInReais * 100);

export const fromCents = (valueInCents: number) => valueInCents / 100;

export const formatBRL = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
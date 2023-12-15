export const priceSlicer = (price: number | string) =>
  (Math.round(Number(price) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
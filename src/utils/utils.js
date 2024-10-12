// src/utils.js

/**
 * Formatea un número a formato de moneda mexicana.
 * @param {number} amount - Cantidad numérica a formatear.
 * @returns {string} - Cantidad formateada como moneda.
 */
const moneyConfig = { style: "currency", currency: "MXN" };

export const Money = (number) =>
  new Intl.NumberFormat("es-MX", moneyConfig).format(number);

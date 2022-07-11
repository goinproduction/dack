export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
export function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime + ' ' + date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
}

export function calcPercentSale(regularPrice, salePrice) {
  const percent = Math.round(((regularPrice - salePrice) / regularPrice) * 100);
  return `-${percent}%`;
}

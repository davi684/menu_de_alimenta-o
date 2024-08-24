document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartCountElem = document.getElementById('cart-count');
  const cartItemsElem = document.getElementById('cart-items');
  const cartTotalElem = document.getElementById('cart-total');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const menuItem = button.closest('.menu-item');
      const id = menuItem.getAttribute('data-id');
      const name = menuItem.getAttribute('data-name');
      const price = parseFloat(menuItem.getAttribute('data-price'));

      // Adiciona o item ao carrinho
      cart.push({ id, name, price });

      updateCart();
    });
  });

  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Pedido finalizado com sucesso!');
    // Limpa o carrinho

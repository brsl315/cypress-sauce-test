describe('sauce test', () => {
  beforeEach('Авторизация', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce", {log:false})
    cy.get("#login-button").click()
  })

  it('Добавить в корзину', () => {
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click()
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    cy.get("#add-to-cart-sauce-labs-onesie").click()
  })

  it('Сортировка Z to A', () => {
    cy.get('span[class=select_container]').click()
    cy.get('select[class="product_sort_container"]').select('za')
  })

  it('Сортировка товаров от дешевых к дорогим', () => {
    cy.get('span[class=select_container]').click()
    cy.get('select[class="product_sort_container"]').select('lohi')
  })

  it('Убрать из корзины', () => {
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click()
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    cy.get("#add-to-cart-sauce-labs-onesie").click()
    cy.get("#remove-sauce-labs-fleece-jacket").click()
    cy.get("#remove-sauce-labs-bolt-t-shirt").click()
    cy.get("#remove-sauce-labs-onesie").click()
  })

  it('Покупка товара', () => {
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click()
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    cy.get("#add-to-cart-sauce-labs-onesie").click()
    cy.get('a[class=shopping_cart_link]').click()
    cy.get('button[id=checkout]').click()
    cy.get("#first-name").type("standard_user")
    cy.get("#last-name").type("saucy")
    cy.get("#postal-code").type("123456")
    cy.get("#continue").click()
    cy.get("#finish").click()
    cy.get("#back-to-products").click()
  })

  it('Переход на страницу товара и обратно', () => {
    cy.get('a[id=item_4_title_link]').click()
    cy.get('button[id=back-to-products]').click()
  })
})

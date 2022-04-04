context("Signup form", () => {
  it("should sign up", () => {
      cy.visit("/signup")
      cy.get('input[name="name"]').type('Pierre')
      cy.get('input[name="email"]').type('pierre@mail.com')
      cy.get('input[name="cpf"]').type('11122233344')
      cy.get('button[type="submit"]').click()
  })
})
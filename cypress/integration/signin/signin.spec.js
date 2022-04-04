context("Signin form", () => {
  it("should sign in", () => {
      cy.visit("/")
      cy.get('input[name="email"]').type('pierre@mail.com')
      cy.get('input[name="cpf"]').type('11122233344')
      cy.get('button[type="submit"]').click()
      cy.visit("/dashboard")
  })
})
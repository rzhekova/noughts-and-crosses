describe("Grid", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("checks there is a grid of 9 boxes", () => {
    cy.get(".grid")
      .children()
      .should("have.length", 9);
  });
  it("clicks the grid boxes", () => {
    cy.get("#square")
      .click()
      .should("have.value", "");
  });
});

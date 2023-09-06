describe("My first Test Basics", () => {
  it("does not do much but is honest job!", () => {
    expect(true).to.equal(true);
  });

  it("visits the Kitchen Sink site", () => {
    cy.visit("https://example.cypress.io");
  });

  it("visits the Google site and find a place", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf").type("leo messi{enter}");

    cy.url().should("include", "q=leo+messi");
  });
});

describe("My first Test Basic Commands", () => {
  const BASE_URL = "https://example.cypress.io";

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('finds the content "type"', () => {
    cy.contains("type");
  });

  it('click on "type" link', () => {
    cy.contains("type").click();
  });

  it('clicking "type" navigates to a new url', () => {
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });

  it("gets, types and asserts", () => {
    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });

  it.only('clicking "type" shows the right headings', () => {
    cy.pause();
    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});

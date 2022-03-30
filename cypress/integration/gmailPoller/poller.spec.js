/// <reference types="Cypress" />

describe("Check gmail for email", async function () {
  it("Email is delievered", function () {
    const from = "balachsubra@gmail.com"
    const incoming_mailbox = `poketriohq@gmail.com`;
    const subject = "";

    cy.task("gmail:get-messages", {
      options: {
        from: from,
        to: incoming_mailbox,
        subject: subject,
        include_body: true
      }
    }).then((email) => {
      assert.isAtLeast(
        email.length,
        1,
        "Expected to find at least one email, but none were found!"
      );
      expect(email[0].subject).to.equal("Hey Yo Shabz!");
    });
  });
});

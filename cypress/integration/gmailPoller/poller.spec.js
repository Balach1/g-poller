/// <reference types="Cypress" />

describe("Check gmail for email", async function () {
  it("Email is delievered", function () {
    const from = "balachsubra@gmail.com"
    const incoming_mailbox = `outertestheaven@gmail.com`;
    const subject = "hello?";

    function gmailPoller () {
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
        expect(email[0].subject).to.equal("hello?");
      });
    }
    gmailPoller();
  });
});

/*
    Given
        API URL: https://automationexercise.com/api/brandsList
    When
        Request Method: PUT
    Then
        Response Code: 405
    And
        Response Message: This request method is not supported.
*/

describe("Put Method Testing", () => {
  it("should verify that Put method is not working with this url", function () {
    // 1) Set the url
    const pathParam = "/brandsList";
    // 2) Set the expected data
    cy.fixture("putToAllBrandsList").as("expectedData");
    // 3) Send the request
    cy.request({
      method: "PUT",
      url: `${pathParam}`,
    }).then((response) => {
      // 4) Do the assertions
      const responseBodyJson = JSON.parse(response.body);
      // i) Assert that status code is 200
      expect(response.status).to.eq(200);
      // ii) Assert that response code is 405
      expect(responseBodyJson.responseCode).to.eq(this.expectedData.responseCode);
      // iii) Assert that response message is "This request method is not supported"
      expect(responseBodyJson.message).to.eq(this.expectedData.message);
    });
  });
});

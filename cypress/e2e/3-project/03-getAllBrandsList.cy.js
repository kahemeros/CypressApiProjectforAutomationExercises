/*
    Given
        API URL: https://automationexercise.com/api/brandsList
    When    
        Request Method: GET
    Then
        Response Code: 200
    And
        Response JSON: All brands list
*/

describe("Get Method Testing", () => {
  it("should verify all brands list", function (){
    // 1) set the endpoint
    const pathParam = "/brandsList";
    // 2) set the expected data
    cy.fixture("getAllBrandsListTestData").as("expectedData");
    // 3) send the request
    cy.request({
      method: "GET",
      url: `${pathParam}`,
    }).then((response) => {
      // 4) do the assertions
      const responseBodyJson = JSON.parse(response.body);
      // i) assert that status code is 200
      expect(response.status).to.eq(200);
      // ii) assert that response code is 200
      expect(responseBodyJson.responseCode).to.eq(this.expectedData.responseCode);
      // iii) assert that response json is all brands list
      expect(responseBodyJson.brands).to.deep.eq(this.expectedData.brands);
    });
  });
});

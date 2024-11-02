const { PactV3 } = require('@pact-foundation/pact');
const path = require('path');
const {fetchUrl} = require("./fetchUrl")

const mockProvider = new PactV3({
  consumer: 'ConsumerService',
  provider: 'ProviderService',
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});

describe('Pact Consumer Test', () => {
  describe('when a call to the provider is made', () => {
    beforeEach(() => {
      mockProvider.addInteraction({
        uponReceiving: 'a request for user data',
        withRequest: {
          method: 'GET',
          path: '/user',
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: {
            message: "Hello, John Doe",
            user: {
              id: 1,
              name: "John Doe",
              email: "johndoe@example.com"
            }
          },
        },
      });
    });

    it('should receive the correct user data', async () => {
      await mockProvider.executeTest(async (mockserver) => {
        const res = await fetchUrl({
          config: {
            port: mockserver.port,
            url: '/user',
            method: "GET"
          }
        });
        expect(res.data).toEqual({
          message: "Hello, John Doe",
          user: {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com"
          }
        });
        expect(res.status).toEqual(200);
      });
    });
  });
});
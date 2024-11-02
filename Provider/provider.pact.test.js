const { Verifier } = require('@pact-foundation/pact');

describe('Pact Provider Test', () => {
  it('should validate the expectations of ConsumerService', async () => {
    const opts = {
      provider: 'ProviderService',
      providerBaseUrl: 'http://localhost:5000',
      pactBrokerUrl: 'http://localhost:9292',
      publishVerificationResult: true,
      providerVersion: "1.0.0",
      logLevel: "info",
      pactUrls: []
    };

    return new Verifier(opts).verifyProvider()
  });
});
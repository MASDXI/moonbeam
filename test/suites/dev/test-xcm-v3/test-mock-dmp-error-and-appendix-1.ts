import "@moonbeam-network/api-augment";
import { beforeAll, describeSuite, expect, customDevRpcRequest } from "@moonwall/cli";

import { alith } from "@moonwall/util";
import { RELAY_SOURCE_LOCATION, relayAssetMetadata } from "../../../helpers/assets.js";
import { registerForeignAsset, XcmFragment } from "../../../helpers/xcm.js";
import type { XcmVersionedXcm } from "@polkadot/types/lookup";

// Twelve decimal places in the moonbase relay chain's token
const RELAY_TOKEN = 1_000_000_000_000n;

const palletId = "0x6D6f646c617373746d6E67720000000000000000";

describeSuite({
  id: "D3502",
  title: "Mock XCM V3 - downward transfer with non-triggered error handler",
  foundationMethods: "dev",
  testCases: ({ context, it, log }) => {
    let assetId: string;

    beforeAll(async () => {
      // registerForeignAsset
      const { registeredAssetId, registeredAsset } = await registerForeignAsset(
        context,
        RELAY_SOURCE_LOCATION,
        relayAssetMetadata
      );
      assetId = registeredAssetId;
      expect(registeredAsset.owner.toHex()).to.eq(palletId.toLowerCase());
    });

    it({
      id: "T01",
      title: "Should make sure that Alith does not receive 10 dot without error",
      test: async function () {
        const xcmMessage = new XcmFragment({
          assets: [
            {
              multilocation: {
                parents: 1,
                interior: {
                  Here: null,
                },
              },
              fungible: 10n * RELAY_TOKEN,
            },
          ],
          beneficiary: alith.address,
        })
          .reserve_asset_deposited()
          .buy_execution()
          // BuyExecution does not charge for fees because we registered it for not doing so
          // But since there is no error, and the deposit is on the error handler, the assets
          // will be trapped
          .with(function () {
            return this.set_error_handler_with([this.deposit_asset_v3]);
          })
          .clear_origin()
          .as_v3();

        const receivedMessage: XcmVersionedXcm = context
          .polkadotJs()
          .createType("StagingXcmVersionedXcm", xcmMessage) as any;

        const totalMessage = [...receivedMessage.toU8a()];
        // Send RPC call to inject XCM message
        await customDevRpcRequest("xcm_injectDownwardMessage", [totalMessage]);

        // Create a block in which the XCM will be executed
        await context.createBlock();
        // Make sure ALITH did not reveive anything
        const alith_dot_balance = await context
          .polkadotJs()
          .query.localAssets.account(assetId, alith.address);

        expect(alith_dot_balance.isNone, "Alith's DOT balance is not empty").to.be.true;
      },
    });
  },
});

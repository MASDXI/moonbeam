(function() {var implementors = {};
implementors["runtime_common"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">ParachainStakingConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.ParachainStakingSplitCandidateState.html\" title=\"struct runtime_common::migrations::ParachainStakingSplitCandidateState\">ParachainStakingSplitCandidateState</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::ParachainStakingSplitCandidateState"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">ParachainStakingConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.ParachainStakingIncreaseMaxDelegationsPerCandidate.html\" title=\"struct runtime_common::migrations::ParachainStakingIncreaseMaxDelegationsPerCandidate\">ParachainStakingIncreaseMaxDelegationsPerCandidate</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::ParachainStakingIncreaseMaxDelegationsPerCandidate"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">ParachainStakingConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.ParachainStakingPurgeStaleStorage.html\" title=\"struct runtime_common::migrations::ParachainStakingPurgeStaleStorage\">ParachainStakingPurgeStaleStorage</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::ParachainStakingPurgeStaleStorage"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">AuthorMappingConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.AuthorMappingTwoXToBlake.html\" title=\"struct runtime_common::migrations::AuthorMappingTwoXToBlake\">AuthorMappingTwoXToBlake</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::AuthorMappingTwoXToBlake"]},{"text":"impl&lt;Runtime, Council, Tech&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.MigrateCollectivePallets.html\" title=\"struct runtime_common::migrations::MigrateCollectivePallets\">MigrateCollectivePallets</a>&lt;Runtime, Council, Tech&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Council: GetStorageVersion + PalletInfoAccess,<br>&nbsp;&nbsp;&nbsp;&nbsp;Tech: GetStorageVersion + PalletInfoAccess,&nbsp;</span>","synthetic":false,"types":["runtime_common::migrations::MigrateCollectivePallets"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"xcm_transactor/pallet/trait.Config.html\" title=\"trait xcm_transactor::pallet::Config\">XcmTransactorConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.XcmTransactorMaxTransactWeight.html\" title=\"struct runtime_common::migrations::XcmTransactorMaxTransactWeight\">XcmTransactorMaxTransactWeight</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::XcmTransactorMaxTransactWeight"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">AssetManagerConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.AssetManagerUnitsWithAssetType.html\" title=\"struct runtime_common::migrations::AssetManagerUnitsWithAssetType\">AssetManagerUnitsWithAssetType</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::AssetManagerUnitsWithAssetType"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">AssetManagerConfig</a>&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.AssetManagerPopulateAssetTypeIdStorage.html\" title=\"struct runtime_common::migrations::AssetManagerPopulateAssetTypeIdStorage\">AssetManagerPopulateAssetTypeIdStorage</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::AssetManagerPopulateAssetTypeIdStorage"]},{"text":"impl&lt;T, StatemineParaIdInfo, StatemineAssetsPalletInfo&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.AssetManagerChangeStateminePrefixes.html\" title=\"struct runtime_common::migrations::AssetManagerChangeStateminePrefixes\">AssetManagerChangeStateminePrefixes</a>&lt;T, StatemineParaIdInfo, StatemineAssetsPalletInfo&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">AssetManagerConfig</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineParaIdInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineAssetsPalletInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"pallet_asset_manager/pallet/trait.Config.html#associatedtype.AssetType\" title=\"type pallet_asset_manager::pallet::Config::AssetType\">AssetType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt;,&nbsp;</span>","synthetic":false,"types":["runtime_common::migrations::AssetManagerChangeStateminePrefixes"]},{"text":"impl&lt;T:&nbsp;Config&gt; <a class=\"trait\" href=\"pallet_migrations/trait.Migration.html\" title=\"trait pallet_migrations::Migration\">Migration</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.SchedulerMigrationV3.html\" title=\"struct runtime_common::migrations::SchedulerMigrationV3\">SchedulerMigrationV3</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::SchedulerMigrationV3"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
(function() {var implementors = {};
implementors["pallet_migrations"] = [];
implementors["runtime_common"] = [{"text":"impl&lt;Runtime, Council, Tech&gt; <a class=\"trait\" href=\"pallet_migrations/trait.GetMigrations.html\" title=\"trait pallet_migrations::GetMigrations\">GetMigrations</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.CommonMigrations.html\" title=\"struct runtime_common::migrations::CommonMigrations\">CommonMigrations</a>&lt;Runtime, Council, Tech&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Council: GetStorageVersion + PalletInfoAccess + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Tech: GetStorageVersion + PalletInfoAccess + 'static,&nbsp;</span>","synthetic":false,"types":["runtime_common::migrations::CommonMigrations"]},{"text":"impl&lt;Runtime, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt; <a class=\"trait\" href=\"pallet_migrations/trait.GetMigrations.html\" title=\"trait pallet_migrations::GetMigrations\">GetMigrations</a> for <a class=\"struct\" href=\"runtime_common/migrations/struct.XcmMigrations.html\" title=\"struct runtime_common::migrations::XcmMigrations\">XcmMigrations</a>&lt;Runtime, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"xcm_transactor/pallet/trait.Config.html\" title=\"trait xcm_transactor::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_migrations/pallet/trait.Config.html\" title=\"trait pallet_migrations::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineParaIdInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineAssetsInstanceInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime as <a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt;::<a class=\"type\" href=\"pallet_asset_manager/pallet/trait.Config.html#associatedtype.AssetType\" title=\"type pallet_asset_manager::pallet::Config::AssetType\">AssetType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt;,&nbsp;</span>","synthetic":false,"types":["runtime_common::migrations::XcmMigrations"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
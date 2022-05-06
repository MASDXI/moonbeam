(function() {var implementors = {};
implementors["moonbase_runtime"] = [{"text":"impl OffchainWorker&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"moonbase_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbase_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonbase_runtime::MaintenanceHooks"]}];
implementors["moonbeam_runtime"] = [{"text":"impl OffchainWorker&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"moonbeam_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbeam_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonbeam_runtime::MaintenanceHooks"]}];
implementors["moonriver_runtime"] = [{"text":"impl OffchainWorker&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"moonriver_runtime/struct.MaintenanceHooks.html\" title=\"struct moonriver_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonriver_runtime::MaintenanceHooks"]}];
implementors["pallet_asset_manager"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_asset_manager/pallet/struct.Pallet.html\" title=\"struct pallet_asset_manager::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_asset_manager::pallet::Pallet"]}];
implementors["pallet_author_mapping"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_author_mapping/pallet/struct.Pallet.html\" title=\"struct pallet_author_mapping::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_author_mapping::pallet::Pallet"]}];
implementors["pallet_ethereum_chain_id"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_ethereum_chain_id/pallet/trait.Config.html\" title=\"trait pallet_ethereum_chain_id::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_ethereum_chain_id/pallet/struct.Pallet.html\" title=\"struct pallet_ethereum_chain_id::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_ethereum_chain_id::pallet::Pallet"]}];
implementors["pallet_maintenance_mode"] = [{"text":"impl&lt;T&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_maintenance_mode/struct.ExecutiveHooks.html\" title=\"struct pallet_maintenance_mode::ExecutiveHooks\">ExecutiveHooks</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_maintenance_mode::types::ExecutiveHooks"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_maintenance_mode/pallet/struct.Pallet.html\" title=\"struct pallet_maintenance_mode::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_maintenance_mode::pallet::Pallet"]}];
implementors["pallet_migrations"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_migrations/pallet/trait.Config.html\" title=\"trait pallet_migrations::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_migrations/pallet/struct.Pallet.html\" title=\"struct pallet_migrations::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_migrations::pallet::Pallet"]}];
implementors["pallet_moonbeam_orbiters"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_moonbeam_orbiters/pallet/trait.Config.html\" title=\"trait pallet_moonbeam_orbiters::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_moonbeam_orbiters/pallet/struct.Pallet.html\" title=\"struct pallet_moonbeam_orbiters::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_moonbeam_orbiters::pallet::Pallet"]}];
implementors["pallet_proxy_genesis_companion"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_proxy_genesis_companion/pallet/trait.Config.html\" title=\"trait pallet_proxy_genesis_companion::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_proxy_genesis_companion/pallet/struct.Pallet.html\" title=\"struct pallet_proxy_genesis_companion::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_proxy_genesis_companion::pallet::Pallet"]}];
implementors["parachain_staking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"parachain_staking/pallet/struct.Pallet.html\" title=\"struct parachain_staking::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::pallet::Pallet"]}];
implementors["xcm_transactor"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"xcm_transactor/pallet/trait.Config.html\" title=\"trait xcm_transactor::pallet::Config\">Config</a>&gt; OffchainWorker&lt;&lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"xcm_transactor/pallet/struct.Pallet.html\" title=\"struct xcm_transactor::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["xcm_transactor::pallet::Pallet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
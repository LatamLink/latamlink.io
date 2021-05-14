module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Testnet',
      items: [
        'eosio',
        'consensus-mechanism',
        'network-topology',
        'accounts-permissions',
        'entity-node-info',
        'traceability',
        'resource-usage',
        'monitoring',
        'performance',
        'digital-identity',
        'privacy',
        'interoperability',
        'roadmap'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/development-environment',
        'guides/private-keys',
        'guides/create-user-account',
        'guides/create-contract-account',
        'guides/create-entity-account',
        {
          'EOSIO Nodes': [
            "guides/eosio-nodes/infrastructure-considerations",
            "guides/eosio-nodes/node-installation"
          ],
        },
        "guides/get-resources",
        'guides/partners',
        'guides/deploy-smart-contract',
        'guides/contribute'
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/monitor',
        'tools/api',
        'tools/cli',
        'tools/block-explorer',
        'tools/network-governance',
        'tools/sdk-libraries',
        'tools/backups',
        'tools/boilerplates'
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/other-resources',
        'resources/eosio-networks',
        'resources/important-functions',
        'resources/glossary'
      ],
    },
  ],  
};
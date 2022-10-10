import { defineStore } from 'pinia';

export const useHelpStore = defineStore('help', {
  state: () => {
    kb: [
      {
        title: 'How to search SalesForce KB API',
        link: 'https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_knowledge_support_artlist.htm',
      },
      {
        title: 'Knowledge Actions API',
        link: 'https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/actions_obj_knowledge.htm',
      },
      {
        title: 'How to watch lectures',
        link: 'google.com/s/how',
      },
      {
        title: 'How upgrade account',
        link: 'google.com/s/upgrade',
      },
    ];
  },
});

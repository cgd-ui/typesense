const SettingsIndex = () => import('../../../pages/integrations/settings/Index');

export default {
    name: 'integrations.typesense.settings.index',
    path: 'settings',
    component: SettingsIndex,
    meta: {
        breadcrumb: 'settings',
        title: 'Settings',
    },
};

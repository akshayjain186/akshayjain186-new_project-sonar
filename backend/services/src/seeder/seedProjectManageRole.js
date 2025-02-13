const ProjectManagerRole = require("../models/projectmanagerole");

const projectManageRoles = [
    {
        name: 'Project Manager',
        machineName: 'project_manager',
        description: 'Role responsible for overseeing the project, ensuring its timely completion.',
        permissions: {
            manageProjects: true,
            allocateResources: true,
            approveBudgets: true,
            overseeProgress: true,
            communicateWithStakeholders: true,
        },
    },
    {
        name: 'Appraiser',
        machineName: 'appraiser',
        description: 'Responsible for evaluating the project’s value and quality.',
        permissions: {
            evaluateProjects: true,
            provideFeedback: true,
            assistInDecisionMaking: true,
            approveQuality: true,
        },
    },
    {
        name: 'Builder',
        machineName: 'builder',
        description: 'Constructs the project according to the provided plan and specifications.',
        permissions: {
            manageConstruction: true,
            ensureCompliance: true,
            overseeTeam: true,
            reportProgress: true,
        },
    },
    {
        name: 'Interior Designer',
        machineName: 'interior_designer',
        description: 'Designs the interior spaces of the project according to client specifications and aesthetic considerations.',
        permissions: {
            designInteriors: true,
            selectMaterials: true,
            collaborateWithArchitects: true,
            overseeInteriorProgress: true,
        },
    },
];

const seedProjectManageRole = async () => {
    try {
        for (const roleData of projectManageRoles) {
            const { permissions, ...otherData } = roleData;
            await ProjectManagerRole.findOrCreate({
                where: { machineName: otherData.machineName },
                defaults: {
                    ...otherData,
                    permissions: JSON.stringify(permissions), 
                },
            });
        }
    } catch (err) {
        
    }
};

module.exports = seedProjectManageRole;

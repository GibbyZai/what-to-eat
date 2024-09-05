# AKS Voting App sample

This repo provides the source code and scenario artefacts for the AKS Voting App sample used in the [AKS documentation](https://docs.microsoft.com/en-us/azure/aks/).

## Container images

The AKS Voting App components are built from the source located in the `src` folder. The following options will build the components as the following containers in your local docker registry:
- voting-app:1.0
- voting-app:2.0
- voting-analytics:1.0
- voting-analytics:1.1
- voting-analytics:2.0
- voting-storage:2.0

### Build all containers